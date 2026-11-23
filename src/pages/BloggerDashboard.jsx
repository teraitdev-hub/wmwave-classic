import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { createBlog, getBlogs, updateBlog, deleteBlog } from '../services/blogService';
import { uploadImage } from '../services/storageService';

const BloggerDashboard = () => {
  const navigate = useNavigate();
  const [view, setView] = useState('dashboard'); // 'dashboard', 'list', 'create', 'edit'
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [currentBlogId, setCurrentBlogId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    tags: '',
    imageUrl: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  useEffect(() => {
    if (view === 'dashboard' || view === 'list') {
      fetchBlogs();
    }
  }, [view]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const user = auth.currentUser;
      if (user) {
        const fetchedBlogs = await getBlogs(false, user.uid);
        setBlogs(fetchedBlogs);
      }
    } catch (error) {
      console.error("Error fetching blogs", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/blogger-login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      tags: '',
      imageUrl: ''
    });
    setImageFile(null);
    setImagePreview('');
    setCurrentBlogId(null);
    setFormError('');
    setFormSuccess('');
  };

  const handleSubmit = async (status) => {
    setFormError('');
    setFormSuccess('');
    
    if (!formData.title || !formData.content) {
      setFormError("Title and Content are required.");
      return;
    }

    setFormLoading(true);
    try {
      const user = auth.currentUser;
      
      let finalImageUrl = formData.imageUrl;
      
      // Upload image if a new one was selected
      if (imageFile) {
        finalImageUrl = await uploadImage(imageFile);
      }

      const blogPayload = {
        ...formData,
        imageUrl: finalImageUrl,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        status,
        authorId: user.uid,
        authorEmail: user.email,
        authorName: user.email.split('@')[0]
      };

      if (view === 'create') {
        await createBlog(blogPayload);
        setFormSuccess(`Blog successfully ${status === 'published' ? 'published' : status === 'upcoming' ? 'marked as upcoming' : 'saved as draft'}!`);
      } else if (view === 'edit' && currentBlogId) {
        await updateBlog(currentBlogId, blogPayload);
        setFormSuccess(`Blog successfully updated and ${status === 'published' ? 'published' : status === 'upcoming' ? 'marked as upcoming' : 'saved as draft'}!`);
      }
      
      setTimeout(() => {
        setView('list');
      }, 1500);

    } catch (error) {
      setFormError(error.message || 'Failed to save blog.');
    } finally {
      setFormLoading(false);
    }
  };

  const handleEditClick = (blog) => {
    setFormData({
      title: blog.title || '',
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      category: blog.category || '',
      tags: blog.tags ? blog.tags.join(', ') : '',
      imageUrl: blog.imageUrl || ''
    });
    setImageFile(null);
    setImagePreview(blog.imageUrl || '');
    setCurrentBlogId(blog.id);
    setView('edit');
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog? This cannot be undone.")) {
      try {
        await deleteBlog(id);
        fetchBlogs();
      } catch (error) {
        alert("Failed to delete blog: " + error.message);
      }
    }
  };

  const handleStatusToggle = async (blog) => {
    try {
      const newStatus = blog.status === 'published' ? 'draft' : 'published';
      await updateBlog(blog.id, { status: newStatus });
      fetchBlogs();
    } catch (error) {
      alert("Failed to update status: " + error.message);
    }
  };

  const renderDashboard = () => (
    <>
      <div className="dashboard-cards">
        <div className="glass-dark dashboard-card" onClick={() => { resetForm(); setView('create'); }}>
          <i className="fas fa-pen-to-square"></i>
          <h3>Create New Post</h3>
          <p>Write and publish a new article to the WMWave blog.</p>
        </div>
        <div className="glass-dark dashboard-card" onClick={() => setView('list')}>
          <i className="fas fa-list-check"></i>
          <h3>Manage Posts</h3>
          <p>Edit, delete, or view analytics for your existing articles.</p>
        </div>
      </div>

      <div className="glass-dark dashboard-recent">
        <h2 style={{color: 'white', marginBottom: '20px'}}>Recent Posts</h2>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}><div className="spinner" style={{margin:'0 auto'}}></div></div>
        ) : blogs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0', color: 'rgba(255,255,255,0.5)' }}>
            <p>No posts found. Start by creating a new post!</p>
          </div>
        ) : (
          <div className="cms-table-container">
            <table className="cms-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {blogs.slice(0, 5).map(blog => (
                  <tr key={blog.id}>
                    <td>{blog.title}</td>
                    <td>
                      <span style={{ 
                        padding: '4px 8px', 
                        borderRadius: '4px', 
                        fontSize: '0.8rem',
                        backgroundColor: blog.status === 'published' ? 'rgba(46, 213, 115, 0.2)' : blog.status === 'upcoming' ? 'rgba(162, 155, 254, 0.2)' : 'rgba(255, 165, 2, 0.2)',
                        color: blog.status === 'published' ? '#2ed573' : blog.status === 'upcoming' ? '#a29bfe' : '#ffa502'
                      }}>
                        {blog.status}
                      </span>
                    </td>
                    <td>
                      {blog.createdAt ? new Date(blog.createdAt.toDate()).toLocaleDateString() : 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );

  const renderList = () => (
    <div className="glass-dark dashboard-recent">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{color: 'white'}}>Manage Posts</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn-outline" onClick={() => setView('dashboard')}>Back</button>
          <button className="btn btn-primary" onClick={() => { resetForm(); setView('create'); }}>Create Post</button>
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}><div className="spinner" style={{margin:'0 auto'}}></div></div>
      ) : blogs.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px 0', color: 'rgba(255,255,255,0.5)' }}>
          <p>You haven't created any posts yet.</p>
        </div>
      ) : (
        <div className="cms-table-container">
          <table className="cms-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map(blog => (
                <tr key={blog.id}>
                  <td>
                    <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                      {blog.imageUrl ? 
                        <img src={blog.imageUrl} alt="" style={{width: '45px', height: '45px', objectFit: 'cover', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)'}} /> : 
                        <div style={{width: '45px', height: '45px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)'}}><i className="fas fa-image" style={{color: 'rgba(255,255,255,0.2)'}}></i></div>
                      }
                      <span style={{fontWeight: '500'}}>{blog.title}</span>
                    </div>
                  </td>
                  <td>{blog.category || <span style={{color:'rgba(255,255,255,0.3)'}}>None</span>}</td>
                  <td>
                    <span style={{ 
                      padding: '6px 12px', 
                      borderRadius: '20px', 
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      backgroundColor: blog.status === 'published' ? 'rgba(46, 213, 115, 0.15)' : blog.status === 'upcoming' ? 'rgba(162, 155, 254, 0.15)' : 'rgba(255, 165, 2, 0.15)',
                      color: blog.status === 'published' ? '#2ed573' : blog.status === 'upcoming' ? '#a29bfe' : '#ffa502',
                      border: `1px solid ${blog.status === 'published' ? 'rgba(46, 213, 115, 0.3)' : blog.status === 'upcoming' ? 'rgba(162, 155, 254, 0.3)' : 'rgba(255, 165, 2, 0.3)'}`
                    }}>
                      {blog.status}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button onClick={() => handleEditClick(blog)} style={{ background: 'rgba(45, 127, 249, 0.1)', border: '1px solid rgba(45, 127, 249, 0.3)', color: 'var(--accent)', cursor: 'pointer', padding: '6px 12px', borderRadius: '4px', fontSize: '0.85rem', transition: 'all 0.2s' }}><i className="fas fa-pen" style={{marginRight: '5px'}}></i>Edit</button>
                      <button onClick={() => handleStatusToggle(blog)} style={{ background: 'rgba(255, 165, 2, 0.1)', border: '1px solid rgba(255, 165, 2, 0.3)', color: '#ffa502', cursor: 'pointer', padding: '6px 12px', borderRadius: '4px', fontSize: '0.85rem', transition: 'all 0.2s' }}>
                        <i className={`fas ${blog.status === 'published' ? 'fa-eye-slash' : 'fa-eye'}`} style={{marginRight: '5px'}}></i>
                        {blog.status === 'published' ? 'Unpublish' : 'Publish'}
                      </button>
                      <button onClick={() => handleDeleteClick(blog.id)} style={{ background: 'rgba(255, 107, 107, 0.1)', border: '1px solid rgba(255, 107, 107, 0.3)', color: '#ff6b6b', cursor: 'pointer', padding: '6px 12px', borderRadius: '4px', fontSize: '0.85rem', transition: 'all 0.2s' }}><i className="fas fa-trash" style={{marginRight: '5px'}}></i>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

  const renderForm = () => (
    <div className="glass-dark dashboard-recent">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{color: 'white'}}>{view === 'create' ? 'Create New Post' : 'Edit Post'}</h2>
        <button className="btn btn-outline" onClick={() => setView('dashboard')}>Back</button>
      </div>

      {formError && <div className="auth-error" style={{textAlign: 'left'}}>{formError}</div>}
      {formSuccess && <div style={{ background: 'rgba(46, 213, 115, 0.1)', border: '1px solid rgba(46, 213, 115, 0.5)', color: '#2ed573', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>{formSuccess}</div>}

      <div className="cms-form-group">
        <label className="cms-label">Cover Image</label>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {imagePreview && (
            <img src={imagePreview} alt="Preview" style={{ width: '150px', height: '100px', objectFit: 'cover', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' }} />
          )}
          <input type="file" accept="image/*" onChange={handleImageChange} className="cms-input" style={{ flex: 1, padding: '10px' }} />
        </div>
      </div>

      <div className="cms-form-group">
        <label className="cms-label">Title *</label>
        <input type="text" name="title" value={formData.title} onChange={handleInputChange} className="cms-input" required />
      </div>

      <div className="cms-form-group">
        <label className="cms-label">Excerpt</label>
        <textarea name="excerpt" value={formData.excerpt} onChange={handleInputChange} className="cms-input" rows="2" placeholder="Brief summary of the post..." />
      </div>

      <div className="cms-form-group">
        <label className="cms-label">Category</label>
        <input type="text" name="category" value={formData.category} onChange={handleInputChange} className="cms-input" placeholder="e.g. Technology, Security" />
      </div>

      <div className="cms-form-group">
        <label className="cms-label">Tags (comma separated)</label>
        <input type="text" name="tags" value={formData.tags} onChange={handleInputChange} className="cms-input" placeholder="e.g. biometric, access control" />
      </div>

      <div className="cms-form-group">
        <label className="cms-label">Content *</label>
        <textarea name="content" value={formData.content} onChange={handleInputChange} className="cms-input" rows="15" required style={{ fontFamily: 'monospace', lineHeight: '1.6' }} placeholder="You can use HTML tags here if needed..." />
      </div>

      <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
        <button 
          onClick={() => handleSubmit('draft')} 
          disabled={formLoading} 
          className="btn btn-outline"
        >
          {formLoading ? 'Saving...' : 'Save as Draft'}
        </button>
        <button 
          onClick={() => handleSubmit('upcoming')} 
          disabled={formLoading} 
          className="btn btn-outline"
          style={{borderColor: '#a29bfe', color: '#a29bfe'}}
        >
          {formLoading ? 'Saving...' : 'Mark as Upcoming'}
        </button>
        <button 
          onClick={() => handleSubmit('published')} 
          disabled={formLoading} 
          className="btn btn-primary"
        >
          {formLoading ? 'Saving...' : 'Publish'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div style={{ cursor: 'pointer' }} onClick={() => setView('dashboard')}>
          <h1 className="auth-title" style={{ textAlign: 'left', marginBottom: '5px' }}>
            Blogger <span>Dashboard</span>
          </h1>
          <p>Welcome back, <strong style={{color: 'white'}}>{auth.currentUser?.email}</strong></p>
        </div>
        <button onClick={handleLogout} className="btn btn-outline">
          Logout
        </button>
      </div>

      {view === 'dashboard' && renderDashboard()}
      {view === 'list' && renderList()}
      {(view === 'create' || view === 'edit') && renderForm()}
      
    </div>
  );
};

export default BloggerDashboard;
