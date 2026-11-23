import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getBlogs } from '../services/blogService';

const BlogPreviewSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const revealRef = useRef(null);

    useEffect(() => {
        const fetchPublicBlogs = async () => {
            try {
                // Fetch only published blogs
                const publishedBlogs = await getBlogs(true);
                setBlogs(publishedBlogs ? publishedBlogs.slice(0, 6) : []);
            } catch (error) {
                console.error("Failed to load blogs:", error);
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPublicBlogs();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (revealRef.current) {
            observer.observe(revealRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
    };

    return (
        <section className="section" id="blog-preview" style={{ padding: '80px 0', background: 'transparent' }}>
            <div className="container reveal" ref={revealRef}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
                    <div>
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '10px' }}>Recent & Upcoming Blogs</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Discover the latest updates, upcoming features, and workforce trends.</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        <Link to="/blogs" className="btn btn-primary" style={{ padding: '10px 20px', borderRadius: '30px', textDecoration: 'none' }}>View All Blogs</Link>
                    </div>
                </div>
                
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '50px 0' }}>
                        <div className="spinner" style={{ margin: '0 auto' }}></div>
                    </div>
                ) : blogs.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '50px 0', color: 'var(--text-muted)' }}>
                        <p>More insights and upcoming blogs coming soon...</p>
                    </div>
                ) : (
                    <div className="blog-slider-wrapper">
                        <button onClick={scrollLeft} className="slider-btn slider-btn-left" aria-label="Previous">
                            Previous
                        </button>
                        
                        <div className="blog-slider-container" ref={scrollContainerRef} style={{
                            display: 'flex',
                            overflowX: 'auto',
                            gap: '30px',
                            paddingBottom: '30px',
                            scrollSnapType: 'x mandatory',
                            WebkitOverflowScrolling: 'touch',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            width: '100%'
                        }}>
                            {blogs.map((blog) => (
                            <div className="blog-card" key={blog.id} style={{ 
                                minWidth: '320px', 
                                maxWidth: '350px',
                                flex: '0 0 auto', 
                                scrollSnapAlign: 'start',
                                margin: '0'
                            }}>
                                <Link to={`/blog/${blog.slug || blog.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                                    <div className="blog-img" style={{height: '220px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative'}}>
                                        {blog.category && <span className="blog-category" style={{position: 'absolute', top: '15px', left: '15px', zIndex: 10}}>{blog.category}</span>}
                                        {blog.imageUrl ? (
                                            <img src={blog.imageUrl} alt={blog.title} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        ) : (
                                            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(45,127,249,0.2) 0%, rgba(7,26,53,0.8) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <i className="fas fa-image" style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.2)' }}></i>
                                            </div>
                                        )}
                                    </div>
                                    <div className="blog-content">
                                        <h3 className="blog-title">{blog.title}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                            {blog.excerpt || (blog.content ? blog.content.substring(0, 100) + '...' : '')}
                                        </p>
                                        <span className="blog-link" style={{ marginTop: '15px', display: 'inline-block' }}>Read More <i className="fas fa-arrow-right"></i></span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        </div>

                        <button onClick={scrollRight} className="slider-btn slider-btn-right" aria-label="Next">
                            Next
                        </button>
                    </div>
                )}
            </div>
            {/* Custom scrollbar styles for webkit */}
            <style dangerouslySetInnerHTML={{__html: `
                .blog-slider-container::-webkit-scrollbar {
                    height: 8px;
                }
                .blog-slider-container::-webkit-scrollbar-track {
                    background: rgba(255,255,255,0.05);
                    border-radius: 10px;
                }
                .blog-slider-container::-webkit-scrollbar-thumb {
                    background: var(--primary);
                    border-radius: 10px;
                }
                .blog-slider-container::-webkit-scrollbar-thumb:hover {
                    background: #1a64da;
                }
            `}} />
        </section>
    );
};

export default BlogPreviewSection;
