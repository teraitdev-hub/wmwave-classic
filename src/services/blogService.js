import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase';

const BLOGS_COLLECTION = 'blogs';

// Helper to create a URL-friendly slug
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Create a new blog
export const createBlog = async (blogData) => {
  try {
    publicBlogsCache = null;
    const slug = generateSlug(blogData.title);
    const docRef = await addDoc(collection(db, BLOGS_COLLECTION), {
      ...blogData,
      slug,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      publishedAt: blogData.status === 'published' ? serverTimestamp() : null
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding blog: ", error);
    throw error;
  }
};

let publicBlogsCache = null;
let publicBlogsCacheTime = 0;

// Get all blogs (optionally filter by published status)
export const getBlogs = async (onlyPublished = false, authorId = null) => {
  try {
    if (onlyPublished && !authorId && publicBlogsCache && (Date.now() - publicBlogsCacheTime < 5 * 60 * 1000)) {
      return publicBlogsCache;
    }

    let q = collection(db, BLOGS_COLLECTION);
    
    const constraints = [];
    if (onlyPublished) {
      constraints.push(where('status', 'in', ['published', 'upcoming']));
    }
    if (authorId) {
      constraints.push(where('authorId', '==', authorId));
    }
    
    // For simplicity without requiring the user to set up indexes immediately, we'll fetch and sort in memory 
    // or just rely on the default order if constraints are complex. 
    // Let's use simple queries.
    if (constraints.length > 0) {
      q = query(q, ...constraints);
    }

    const querySnapshot = await getDocs(q);
    const blogs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    // Sort by createdAt descending
    blogs.sort((a, b) => {
      const timeA = a.createdAt?.toMillis() || 0;
      const timeB = b.createdAt?.toMillis() || 0;
      return timeB - timeA;
    });

    if (onlyPublished && !authorId) {
      publicBlogsCache = blogs;
      publicBlogsCacheTime = Date.now();
    }

    return blogs;
  } catch (error) {
    console.error("Error getting blogs: ", error);
    throw error;
  }
};

// Export synchronous cache access for instant UI rendering
export const getCachedBlogById = (id) => {
  if (publicBlogsCache) {
    return publicBlogsCache.find(b => b.id === id || b.slug === id);
  }
  return null;
};

// Get a single blog by ID
export const getBlogById = async (id) => {
  try {
    // Check cache first for instant load
    const cachedBlog = getCachedBlogById(id);
    if (cachedBlog) {
      return cachedBlog;
    }

    const docRef = doc(db, BLOGS_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      // Try to find by slug if id is actually a slug
      const q = query(collection(db, BLOGS_COLLECTION), where('slug', '==', id));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return { id: doc.id, ...doc.data() };
      }
      return null;
    }
  } catch (error) {
    console.error("Error getting blog: ", error);
    throw error;
  }
};

// Update a blog
export const updateBlog = async (id, blogData) => {
  try {
    publicBlogsCache = null;
    const docRef = doc(db, BLOGS_COLLECTION, id);
    const updatePayload = {
      ...blogData,
      updatedAt: serverTimestamp()
    };
    
    if (blogData.title) {
      updatePayload.slug = generateSlug(blogData.title);
    }
    
    if (blogData.status === 'published') {
      updatePayload.publishedAt = serverTimestamp();
    }

    await updateDoc(docRef, updatePayload);
  } catch (error) {
    console.error("Error updating blog: ", error);
    throw error;
  }
};

// Delete a blog
export const deleteBlog = async (id) => {
  try {
    publicBlogsCache = null;
    const docRef = doc(db, BLOGS_COLLECTION, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting blog: ", error);
    throw error;
  }
};
