import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { List, X } from 'phosphor-react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Features', href: '#features' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Mission', href: '#mission' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#faq' },
    ];

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        setIsMenuOpen(false);

        // If not on homepage, navigate to homepage first
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation to complete, then scroll
            setTimeout(() => {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // Already on homepage, just scroll
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/logos/navis-header.png" alt="Navis Copilot" />
                </Link>

                {/* Desktop Navigation */}
                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="navbar-link"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Additional Page Links */}
                <div className="navbar-actions">
                    <Link to="/about" className="navbar-link">About</Link>
                    <Link to="/blog" className="navbar-link">Blog</Link>
                    <Link to="/documentation" className="navbar-link">Documentation</Link>
                    <a href="https://navis-copilot-front-end-pr-1-0.vercel.app/" className="btn-primary navbar-cta" target="_blank" rel="noopener noreferrer">Get Started</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="navbar-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} weight="light" /> : <List size={28} weight="light" />}
                </button>
            </div>

            {/* Mobile Menu Tray */}
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="mobile-menu-link"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link to="/about" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
                        About
                    </Link>
                    <Link to="/blog" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
                        Blog
                    </Link>
                    <Link to="/documentation" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
                        Documentation
                    </Link>
                    <Link to="/contact" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
                        Contact
                    </Link>
                </div>
                <a href="https://navis-copilot-front-end-pr-1-0.vercel.app/" className="btn-primary" onClick={() => setIsMenuOpen(false)} target="_blank" rel="noopener noreferrer">
                    Get Started
                </a>
            </div>

            {/* Overlay */}
            {isMenuOpen && <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)} />}
        </nav>
    );
};

export default Navbar;
