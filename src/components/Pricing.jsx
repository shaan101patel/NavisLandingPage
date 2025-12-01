import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Check } from 'phosphor-react';
import './Pricing.css';

const Pricing = () => {
    const { ref, isVisible } = useScrollAnimation();

    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "forever",
            popular: true,
            features: [
                "Self Setup API Key",
                "Real-time transcription",
                "Basic RAG chatbot",
                "Community support",
                "Standard analytics"
            ]
        },
        {
            name: "Paid",
            price: "$10",
            period: "per month",
            comingSoon: true,
            features: [
                "Managed API Keys",
                "Advanced RAG with custom data",
                "Priority support",
                "Advanced analytics & dashboards",
                "Sentiment analysis",
                "Custom integrations"
            ]
        }
    ];

    return (
        <section id="pricing" className="pricing-section section">
            <div className="container">
                <div ref={ref} className={`pricing-header fade-in-up ${isVisible ? 'visible' : ''}`}>
                    <h2>Simple, Transparent Pricing</h2>
                    <p>Choose the plan that fits your team</p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`pricing-card glass-card fade-in-up ${isVisible ? 'visible' : ''} ${plan.popular ? 'popular' : ''}`}
                        >
                            {plan.popular && <div className="popular-badge">Most Popular</div>}
                            <h3 className="plan-name">{plan.name}</h3>
                            <div className="plan-price">
                                <span className="price">{plan.price}</span>
                                <span className="period">/{plan.period}</span>
                            </div>
                            <ul className="plan-features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <Check size={20} weight="bold" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            {plan.comingSoon ? (
                                <button className="btn-primary plan-cta" disabled>Coming Soon</button>
                            ) : (
                                <a href="https://navis-copilot-front-end-pr-1-0.vercel.app/" className="btn-primary plan-cta" target="_blank" rel="noopener noreferrer">Get Started</a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
