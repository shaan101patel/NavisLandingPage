import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './FeaturedIn.css';

const FeaturedIn = () => {
    const { ref, isVisible } = useScrollAnimation();

    const companies = [
        'The Home Depot',
        'KPMG',
        'Y Combinator',
        'Georgia Technology',
        'Nestig',
        'COX',
        'Salesforce'
    ];

    return (
        <section id="featured" className="featured-section section">
            <div className="container">
                <div ref={ref} className={`featured-content fade-in-up ${isVisible ? 'visible' : ''}`}>
                    <h3 className="featured-title">Built by engineers and customer service representatives from</h3>
                    <div className="featured-carousel">
                        <div className="featured-track">
                            {[...companies, ...companies].map((company, index) => (
                                <div key={index} className="featured-item">
                                    {company}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedIn;
