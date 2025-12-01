import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LinkedinLogo, GithubLogo } from 'phosphor-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLinkClick = (e, href) => {
        e.preventDefault();

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <img src="/logos/navis-header.png" alt="Navis" className="footer-logo" />
                        <p className="footer-tagline">
                            AI-powered call intelligence for modern teams
                        </p>
                        <div className="footer-social">
                            <a href="https://www.linkedin.com/company/navis-fyi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <LinkedinLogo size={24} weight="light" />
                            </a>
                            <a href="https://github.com/shaan101patel/NavisCopilot_NP_1.0" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <GithubLogo size={24} weight="light" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Product</h4>
                        <ul>
                            <li><a href="#features" onClick={(e) => handleLinkClick(e, '#features')}>Features</a></li>
                            <li><a href="#pricing" onClick={(e) => handleLinkClick(e, '#pricing')}>Pricing</a></li>
                            <li><a href="#features" onClick={(e) => handleLinkClick(e, '#features')}>How It Works</a></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><a href="#mission" onClick={(e) => handleLinkClick(e, '#mission')}>Mission</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Resources</h4>
                        <ul>
                            <li><Link to="/documentation">Documentation</Link></li>
                            <li><a href="#faq" onClick={(e) => handleLinkClick(e, '#faq')}>FAQ</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Service</Link></li>
                            <li><Link to="/security">Security</Link></li>
                            <li><Link to="/compliance">Compliance</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Navis Copilot. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
