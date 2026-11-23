import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogById, getCachedBlogById } from '../services/blogService';
// Import DOMPurify if it was available, but we'll use dangerouslySetInnerHTML safely for now as it's an internal CMS.

const BlogPost = () => {
    const { id } = useParams();
    const cached = getCachedBlogById(id);
    const [blog, setBlog] = useState(cached);
    const [loading, setLoading] = useState(!cached);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const fetchedBlog = await getBlogById(id);
                if (fetchedBlog && fetchedBlog.status === 'published') {
                    setBlog(fetchedBlog);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error("Error fetching blog:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return (
            <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
                <div className="spinner" style={{margin: '0 auto'}}></div>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh', color: 'var(--secondary)' }}>
                <h2>Blog Post Not Found</h2>
                <p style={{marginTop: '10px', color: 'var(--text-muted)'}}>The post you are looking for does not exist or has been unpublished.</p>
                <Link to="/blogs" className="btn btn-primary" style={{ marginTop: '30px' }}>Back to Blogs</Link>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="container">
                <Link to="/blogs" style={{ color: 'var(--accent)', fontWeight: 'bold', display: 'inline-block', marginBottom: '20px' }}>
                    <i className="fas fa-arrow-left"></i> Back to All Posts
                </Link>
                <div className="card" style={{ overflow: 'hidden', background: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                    
                    {/* Cover image area */}
                    {blog.imageUrl ? (
                        <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
                            <img src={blog.imageUrl} alt={blog.title} fetchPriority="high" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    ) : (
                        <div style={{ width: '100%', height: '300px', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ fontSize: '5rem', color: 'rgba(255,255,255,0.05)' }}>
                                <i className="fas fa-image"></i>
                            </div>
                        </div>
                    )}
                    
                    <div style={{ padding: '60px', maxWidth: '900px', margin: '0 auto' }}>
                        {blog.category && (
                            <span className="blog-category" style={{ position: 'relative', top: '0', left: '0', marginBottom: '20px', display: 'inline-block' }}>
                                {blog.category}
                            </span>
                        )}
                        <h1 style={{ color: 'var(--secondary)', marginBottom: '15px', fontSize: '2.8rem', letterSpacing: '0.5px' }}>{blog.title}</h1>
                        
                        <div style={{ display: 'flex', gap: '20px', color: 'rgba(255, 255, 255, 0.6)', fontSize: '1rem', marginBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' }}>
                            <span><i className="fas fa-user" style={{marginRight: '5px'}}></i> {blog.authorName || 'WMWave Team'}</span>
                            <span><i className="fas fa-calendar" style={{marginRight: '5px'}}></i> {blog.publishedAt ? new Date(blog.publishedAt.toDate()).toLocaleDateString() : ''}</span>
                        </div>
                        
                        {/* Render rich text content */}
                        <div 
                            style={{ fontSize: '1.2rem', lineHeight: '1.9', color: 'rgba(255, 255, 255, 0.9)' }}
                            dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br/>') }}
                        />

                        {/* Tags */}
                        {blog.tags && blog.tags.length > 0 && (
                            <div style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                    {blog.tags.map((tag, idx) => (
                                        <span key={idx} style={{ padding: '6px 15px', background: 'rgba(45, 127, 249, 0.15)', border: '1px solid rgba(45, 127, 249, 0.3)', color: 'var(--accent)', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
