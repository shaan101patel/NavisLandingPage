import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Envelope, Phone, CheckCircle } from 'phosphor-react';
import './Contact.css';

const Contact = () => {
    const { ref, isVisible } = useScrollAnimation();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        console.log('Form data:', data);
        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSubmitted(true);
                reset();
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                console.error('Failed to submit form');
                // Optional: Handle error state
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Optional: Handle error state
        }
    };

    return (
        <>
            <Navbar />
            <div className="contact-page">
                <section className="contact-hero section">
                    <div className="container">
                        <div ref={ref} className={`contact-header fade-in-up ${isVisible ? 'visible' : ''}`}>
                            <h1>Get in <span className="gradient-text">Touch</span></h1>
                            <p className="contact-subtitle">
                                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="contact-content section">
                    <div className="container">
                        <div className="contact-grid">
                            <div className="contact-form-wrapper glass-card">
                                <h2>Send us a Message</h2>
                                {isSubmitted ? (
                                    <div className="success-message">
                                        <CheckCircle size={64} weight="light" className="success-icon" />
                                        <h3>Message Sent!</h3>
                                        <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                                        <div className="form-group">
                                            <label htmlFor="name">Name *</label>
                                            <input
                                                id="name"
                                                type="text"
                                                {...register('name', { required: 'Name is required' })}
                                                className={errors.name ? 'error' : ''}
                                            />
                                            {errors.name && <span className="error-message">{errors.name.message}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input
                                                id="email"
                                                type="email"
                                                {...register('email', {
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: 'Invalid email address'
                                                    }
                                                })}
                                                className={errors.email ? 'error' : ''}
                                            />
                                            {errors.email && <span className="error-message">{errors.email.message}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">Message *</label>
                                            <textarea
                                                id="message"
                                                rows="6"
                                                {...register('message', { required: 'Message is required' })}
                                                className={errors.message ? 'error' : ''}
                                            />
                                            {errors.message && <span className="error-message">{errors.message.message}</span>}
                                        </div>

                                        <button type="submit" className="btn-primary">Send Message</button>
                                    </form>
                                )}
                            </div>

                            <div className="contact-info">
                                <div className="info-card glass-card">
                                    <MapPin size={32} weight="light" />
                                    <h3>LinkedIn</h3>
                                    <p>
                                        <a href="https://www.linkedin.com/company/navis-fyi" target="_blank" rel="noopener noreferrer">
                                            Follow us on LinkedIn
                                        </a>
                                    </p>
                                </div>

                                <div className="info-card glass-card">
                                    <Envelope size={32} weight="light" />
                                    <h3>Email</h3>
                                    <p>info.navis.ai@gmail.com</p>
                                </div>

                                <div className="info-card glass-card">
                                    <Phone size={32} weight="light" />
                                    <h3>Phone</h3>
                                    <p>+1 (678) 799-6118</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
