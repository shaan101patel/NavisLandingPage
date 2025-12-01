import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Mission.css';

const Mission = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="mission" className="mission-section section">
            <div className="container">
                <div ref={ref} className={`mission-content fade-in-up ${isVisible ? 'visible' : ''}`}>
                    <h2 className="mission-title">Our Mission</h2>
                    <p className="mission-statement">
                        Navis exists to make every customer interaction <span className="gradient-text">efficient and effective</span>.
                        We built this because agents deserve AI that adapts in real-time, turning every call into measurable results –
                        regardless of platform or experience level.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Mission;
