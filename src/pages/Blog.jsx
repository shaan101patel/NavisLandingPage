import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CalendarBlank, User } from 'phosphor-react';
import './Blog.css';

const Blog = () => {
    const { ref, isVisible } = useScrollAnimation();

    const articles = [
        {
            slug: 'rag-revolutionizing-call-center-efficiency',
            title: 'RAG: Revolutionizing Call Center Efficiency',
            excerpt: 'Discover how Retrieval-Augmented Generation is transforming customer support by combining AI precision with real-time knowledge access.',
            author: 'Sarah Chen',
            date: 'December 15, 2024',
            readTime: '8 min read'
        },
        {
            slug: 'real-time-transcription-best-practices',
            title: 'Real-Time Transcription Best Practices',
            excerpt: 'Learn industry best practices for implementing real-time call transcription across your organization and maximizing ROI.',
            author: 'Michael Rodriguez',
            date: 'December 10, 2024',
            readTime: '6 min read'
        },
        {
            slug: 'analytics-that-drive-sales-conversions',
            title: 'Analytics That Drive Sales Conversions',
            excerpt: 'Explore how data-driven insights from call analytics can transform your sales process and boost conversion rates by 35%.',
            author: 'Emily Thompson',
            date: 'December 5, 2024',
            readTime: '7 min read'
        },
        {
            slug: 'adaptive-scripts-for-support-wins',
            title: 'Adaptive Scripts for Support Wins',
            excerpt: 'How AI-powered adaptive scripts help support agents deliver personalized, effective responses in real-time.',
            author: 'David Kim',
            date: 'December 1, 2024',
            readTime: '5 min read'
        }
    ];

    return (
        <>
            <Navbar />
            <div className="blog-page">
                <section className="blog-hero section">
                    <div className="container">
                        <div ref={ref} className={`blog-header fade-in-up ${isVisible ? 'visible' : ''}`}>
                            <h1>Navis <span className="gradient-text">Blog</span></h1>
                            <p className="blog-subtitle">
                                Insights, tips, and best practices for customer success teams
                            </p>
                        </div>
                    </div>
                </section>

                <section className="blog-listing section">
                    <div className="container">
                        <div className="articles-grid">
                            {articles.map((article) => (
                                <Link
                                    to={`/blog/${article.slug}`}
                                    key={article.slug}
                                    className="article-card glass-card"
                                >
                                    <h2 className="article-title">{article.title}</h2>
                                    <p className="article-excerpt">{article.excerpt}</p>
                                    <div className="article-meta">
                                        <div className="meta-item">
                                            <User size={16} weight="light" />
                                            <span>{article.author}</span>
                                        </div>
                                        <div className="meta-item">
                                            <CalendarBlank size={16} weight="light" />
                                            <span>{article.date}</span>
                                        </div>
                                        <div className="meta-item">
                                            <span>{article.readTime}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Blog;
