import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Phone, Robot, ChartLine } from 'phosphor-react';
import './HowItWorks.css';

const HowItWorks = () => {
    const { ref, isVisible } = useScrollAnimation();

    const steps = [
        {
            icon: <Phone size={48} weight="light" />,
            title: "Connect Your Calls",
            description: "Link Zoom, Teams, phone instantly"
        },
        {
            icon: <Robot size={48} weight="light" />,
            title: "Set Up AI Assistant",
            description: "Live RAG + adaptive scripts"
        },
        {
            icon: <ChartLine size={48} weight="light" />,
            title: "Automate Insights",
            description: "Auto-analytics & ticketing"
        }
    ];

    return (
        <section id="howitworks" className="how-it-works-section section">
            <div className="container">
                <div ref={ref} className={`how-header fade-in-up ${isVisible ? 'visible' : ''}`}>
                    <h2>How It Works</h2>
                    <p>Get started in minutes, see results immediately</p>
                </div>

                <div className="how-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="how-card glass-card fade-in-up">
                            <div className="how-icon">{step.icon}</div>
                            <h3 className="how-title">{step.title}</h3>
                            <p className="how-description">{step.description}</p>
                            <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
