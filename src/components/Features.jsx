import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Microphone, ChatCircle, ChartLineUp, Layout } from 'phosphor-react';
import './Features.css';

const Features = () => {
    const { ref, isVisible } = useScrollAnimation();

    const features = [
        {
            icon: <ChatCircle size={48} weight="light" />,
            title: "AI-Powered Insights",
            description: "Our AI understands customer queries in context, providing accurate and relevant answers without extensive searching or scripting."
        },
        {
            icon: <Microphone size={48} weight="light" />,
            title: "Real-Time Transcription",
            description: "Convert conversations into searchable text instantly and generate concise summaries of key points and action items."
        },
        {
            icon: <Layout size={48} weight="light" />,
            title: "Smart Script Guidance",
            description: "Dynamic script assistance that evolves with each interaction, providing representatives with the best responses."
        },
        {
            icon: <ChartLineUp size={48} weight="light" />,
            title: "Live Analytics",
            description: "Monitor customer interactions in real-time and gain insights from comprehensive analytics to improve service quality."
        },
        {
            icon: <Layout size={48} weight="light" />, // Using Layout as placeholder for Integration if needed, or maybe Plugs/Link
            title: "Seamless Integration",
            description: "Connect with your existing CRM and tools to maintain a unified workflow and keep all customer data in sync."
        },
        {
            icon: <ChatCircle size={48} weight="light" />, // Using ChatCircle as placeholder for Automation if needed, or maybe Robot
            title: "Workflow Automation",
            description: "Tailor the system to your specific needs and automate repetitive tasks to boost efficiency and focus on what matters most."
        }
    ];

    return (
        <section id="features" className="features-section section">
            <div className="container">
                <div ref={ref} className={`features-header fade-in-up ${isVisible ? 'visible' : ''}`}>
                    <h2>Powerful Features</h2>
                    <p>Everything you need to transform customer interactions</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className={`feature-card glass-card fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
