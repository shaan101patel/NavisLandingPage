import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Target, Users, TrendUp } from 'phosphor-react';
import './About.css';

const About = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
    const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();

    const team = [
        { name: "Shaan Patel", role: "Founder", bio: "" },
        { name: "Noelle Rocheteau", role: "Creative Director", bio: "" },
        { name: "Srikar Vangala", role: "Data Scientist", bio: "" },
        { name: "Armaan Shah", role: "Data Scientist", bio: "" }
    ];

    const milestones = [
        { year: "2023", event: "Founded Navis", description: "Two founders united by a vision to revolutionize call center AI" },
        { year: "2024 Q1", event: "Secured Seed Funding", description: "$5M seed round led by top VCs" },
        { year: "2024 Q2", event: "100+ Customers", description: "Rapid adoption across SMBs and enterprises" },
        { year: "2024 Q4", event: "Series A", description: "$20M Series A to scale globally" },
        { year: "2025", event: "1,000+ Teams", description: "Serving customers worldwide with 99.9% uptime" }
    ];

    return (
        <>
            <Navbar />
            <div className="about-page">
                <section className="about-hero section">
                    <div className="container">
                        <div ref={headerRef} className={`about-header fade-in-up ${headerVisible ? 'visible' : ''}`}>
                            <h1>About <span className="gradient-text">Navis</span></h1>
                            <p className="about-subtitle">
                                We're on a mission to make every customer conversation count
                            </p>
                        </div>
                    </div>
                </section>

                <section className="story-section section">
                    <div className="container">
                        <div ref={storyRef} className={`story-content fade-in-up ${storyVisible ? 'visible' : ''}`}>
                            <h2>Our Story</h2>
                            <p>
                                Navis was born from a simple observation: customer service teams were drowning in calls,
                                struggling with clunky tools, and losing valuable insights in every conversation.
                                We believed AI could change that – not by replacing humans, but by empowering them.
                            </p>
                            <p>
                                The founder, a veterans of enterprise software and AI research, spent years watching
                                call centers operate inefficiently despite having the best intentions. The problem wasn't
                                effort... it was the absence of real-time, intelligent support.
                            </p>
                            <p>
                                Today, Navis aims to serve 1000+ people and processing millions of calls.
                            </p>
                        </div>

                        <div className="values-grid">
                            <div className="value-card glass-card">
                                <Target size={48} weight="light" />
                                <h3>Customer-First</h3>
                                <p>Every feature we build starts with customer feedback and real-world use cases</p>
                            </div>
                            <div className="value-card glass-card">
                                <Users size={48} weight="light" />
                                <h3>Empower Teams</h3>
                                <p>We believe AI should augment human expertise, not replace it</p>
                            </div>
                            <div className="value-card glass-card">
                                <TrendUp size={48} weight="light" />
                                <h3>Continuous Innovation</h3>
                                <p>We ship new features weekly based on cutting-edge AI research</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="team-section section">
                    <div className="container">
                        <h2 className="section-title">Meet the Team</h2>
                        <div className="team-grid">
                            {team.map((member, index) => (
                                <div key={index} className="team-card glass-card">
                                    <div className="team-avatar">{member.name.split(' ').map(n => n[0]).join('')}</div>
                                    <h3>{member.name}</h3>
                                    <p className="role">{member.role}</p>
                                    <p className="bio">{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="cta-section section">
                    <div className="container">
                        <div className="cta-content glass-card">
                            <h2>Ready to Transform Your Calls?</h2>
                            <p>Join the 1,000+ agents using Navis to deliver exceptional customer experiences</p>
                            <button className="btn-primary">Start Free Trial</button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default About;
