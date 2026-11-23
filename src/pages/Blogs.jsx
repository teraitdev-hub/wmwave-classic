import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';
import { getBlogs } from '../services/blogService';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const fetchPublicBlogs = async () => {
            try {
                // Fetch only published blogs
                const publishedBlogs = await getBlogs(true);
                setBlogs(publishedBlogs || []);
            } catch (error) {
                console.error("Failed to load blogs:", error);
                setErrorMsg(error.message || 'Unknown error occurred while fetching blogs');
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPublicBlogs();
    }, []);

    return (
        <div style={{ paddingTop: '100px' }}>
            <div className="container">
                <h1 className="section-title">Case Studies & Blogs</h1>
                
                <div className="blog-grid" style={{ paddingBottom: '100px' }}>
                    {loading ? (
                        <div style={{ width: '100%', gridColumn: '1 / -1', textAlign: 'center', padding: '50px 0' }}>
                            <div className="spinner" style={{margin: '0 auto'}}></div>
                        </div>
                    ) : errorMsg ? (
                        <div style={{ width: '100%', gridColumn: '1 / -1', textAlign: 'center', padding: '50px 0' }}>
                            <h3 style={{color: '#ff6b6b'}}>Error loading blogs</h3>
                            <p style={{color: 'white', marginTop: '10px'}}>{errorMsg}</p>
                        </div>
                    ) : blogs.length === 0 ? (
                        <div style={{ width: '100%', gridColumn: '1 / -1', textAlign: 'center', padding: '50px 0' }}>
                            <h3 style={{color: 'var(--secondary)'}}>More content coming soon!</h3>
                        </div>
                    ) : (
                        blogs.map((blog) => (
                            <div className="blog-card" key={blog.id} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <Link to={`/blog/${blog.slug || blog.id}`} style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', height: '100%' }}>
                                    <div className="blog-img" style={{height: '120px', flexShrink: 0, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative'}}>
                                        {blog.category && <span className="blog-category" style={{position: 'absolute', top: '15px', left: '15px', zIndex: 10}}>{blog.category}</span>}
                                        {blog.imageUrl ? (
                                            <img src={blog.imageUrl} alt={blog.title} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        ) : (
                                            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(45,127,249,0.2) 0%, rgba(7,26,53,0.8) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <i className="fas fa-image" style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.2)', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))' }}></i>
                                            </div>
                                        )}
                                    </div>
                                    <div className="blog-content" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, padding: '25px' }}>
                                        <h3 className="blog-title" style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{blog.title}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', flexGrow: 1 }}>
                                            {blog.excerpt || (blog.content ? blog.content.substring(0, 150) + '...' : '')}
                                        </p>
                                        <span className="blog-link" style={{ marginTop: '20px', display: 'inline-block', fontWeight: 'bold' }}>Read Full Case Study <i className="fas fa-arrow-right"></i></span>
                                    </div>
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
