import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CaretLeft, CaretRight } from 'phosphor-react';
import './Testimonials.css';

const Testimonials = () => {
    const { ref, isVisible } = useScrollAnimation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "At Nestig, I envisioned a tool that understood context, organized queries, and suggested smart responses. Navis delivers that and more making customer interactions effortless.",
            author: "Kayli Sweeney",
            role: "Senior Customer Experience Associate at Nestig",
            result: "40% faster resolution"
        },
        {
            quote: "As a business owner I juggle endless documents and support tasks. The power Navis has as a live digital assistant will save me countless hours. And the analytics will lets us focus on growth, not busywork",
            author: "Ajar Rajbhandary",
            role: "CEO and Founder of ESSIENTIAL Ventures",
            result: "+85% resolution rate"
        },
        {
            quote: "In my role, every minute counts. Navis feels like a different approach, prioritizing both the customer and agent in real time. The ticketing cuts down on manual follow-ups so I can focus on more tickets.",
            author: "Joe Carson",
            role: "Customer Service Agent at RNL",
            result: "20% CSAT boost"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="testimonials-section section">
            <div className="container">
                <div ref={ref} className={`testimonials-header fade-in-up ${isVisible ? 'visible' : ''}`}>
                    <h2>Loved by Customer Service Agents, Managers, and Representatives</h2>
                    <p>See how Navis transforms customer interactions</p>
                </div>

                <div className="testimonials-carousel">
                    <button onClick={prevSlide} className="carousel-btn prev" aria-label="Previous testimonial">
                        <CaretLeft size={32} weight="light" />
                    </button>

                    <div className="testimonials-track">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`testimonial-card glass-card ${index === currentIndex ? 'active' : ''}`}
                            >
                                <p className="testimonial-quote">"{testimonial.quote}"</p>
                                <div className="testimonial-author">
                                    <p className="author-name">{testimonial.author}</p>
                                    <p className="author-role">{testimonial.role}</p>
                                </div>
                                <div className="testimonial-result">{testimonial.result}</div>
                            </div>
                        ))}
                    </div>

                    <button onClick={nextSlide} className="carousel-btn next" aria-label="Next testimonial">
                        <CaretRight size={32} weight="light" />
                    </button>
                </div>

                <div className="carousel-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
