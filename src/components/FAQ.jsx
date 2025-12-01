import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CaretDown } from 'phosphor-react';
import './FAQ.css';

const FAQ = () => {
    const { ref, isVisible } = useScrollAnimation();
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Works on any call platform?",
            answer: "Yes! Navis integrates seamlessly with Zoom, Microsoft Teams, Google Meet, traditional phone systems, and most VoIP platforms. Our platform-agnostic approach ensures you can use Navis regardless of your communication infrastructure."
        },
        {
            question: "How does RAG use our data?",
            answer: "Our Retrieval-Augmented Generation system combines real-time call transcripts with your company's knowledge base (documentation, past tickets, product info) to provide contextually accurate responses. Your data is encrypted, never shared, and you maintain full control over what information the AI can access."
        },
        {
            question: "Multi-agent support?",
            answer: "Coming Soon"
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section section">
            <div className="container">
                <div ref={ref} className={`faq-header fade-in-up ${isVisible ? 'visible' : ''}`}>
                    <h2>Frequently Asked Questions</h2>
                    <p>Everything you need to know about Navis</p>
                </div>

                <div className="faq-accordion">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item glass-card ${openIndex === index ? 'open' : ''}`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="faq-question"
                            >
                                <span>{faq.question}</span>
                                <CaretDown size={24} weight="light" className="faq-icon" />
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
