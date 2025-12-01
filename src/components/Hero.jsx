import { useScrollAnimation } from '../hooks/useScrollAnimation';
import HeroDashboard from './HeroDashboard';
import './Hero.css';

const Hero = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="hero" className="hero-section">
            <div className="container">
                <div className="hero-badge-wrapper">
                    <div className="hero-badge">
                        Free and Open Source AI for Customer Service Representatives
                    </div>
                </div>
                <div className="hero-grid">
                    <div ref={ref} className={`hero-content fade-in-up ${isVisible ? 'visible' : ''}`}>
                        <h1 className="hero-title">
                            Customer Service <br />
                            <span className="gradient-text">Reimagined</span>
                        </h1>
                        <p className="hero-subtitle">
                            Your personal AI assistant for customer service. Get instant answers, smart suggestions, and powerful insights.
                        </p>
                        <div className="hero-actions">
                            <a href="https://navis-copilot-front-end-pr-1-0.vercel.app/" className="btn-primary hero-cta" target="_blank" rel="noopener noreferrer">
                                Get Started
                            </a>
                            <a href="https://youtu.be/-_mzu2c2y6w?t=368" className="btn-secondary hero-cta-secondary" target="_blank" rel="noopener noreferrer">
                                <span className="play-icon">▶</span> Watch Demo
                            </a>
                        </div>
                    </div>

                    <div className={`hero-mockup fade-in-up ${isVisible ? 'visible' : ''}`}>
                        <HeroDashboard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
