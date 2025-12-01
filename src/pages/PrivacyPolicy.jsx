import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Legal.css';

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <div className="legal-page">
                <div className="container">
                    <div className="legal-content glass-card">
                        <h1>Privacy Policy</h1>
                        <p className="last-updated">Last Updated: December 1, 2025</p>

                        <section>
                            <h2>1. Introduction</h2>
                            <p>
                                Navis ("we", "our", or "us") provides a free and open-source AI tool for customer service representatives.
                                This Privacy Policy explains how we handle information when you use our software.
                                By using Navis, you agree to the collection and use of information in accordance with this policy.
                            </p>
                        </section>

                        <section>
                            <h2>2. Information Collection</h2>
                            <p>
                                As an open-source tool running locally or in your own environment, Navis is designed to minimize data collection.
                                We do not centrally store your customer call data, transcripts, or audio recordings on our servers.
                                Any data processing happens within your own infrastructure or the local environment where you deploy the software.
                            </p>
                        </section>

                        <section>
                            <h2>3. Data Usage</h2>
                            <p>
                                We do not sell, trade, or rent your personal identification information to others.
                                Since the core functionality of Navis operates on your own systems, you retain full control and ownership of your data.
                            </p>
                        </section>

                        <section>
                            <h2>4. Third-Party Services</h2>
                            <p>
                                Navis may integrate with third-party LLM providers (e.g., OpenAI, Anthropic) or other APIs depending on your configuration.
                                Please review the privacy policies of these third-party providers, as their data handling practices are governed by their own terms.
                                We are not responsible for the privacy practices of these third-party services.
                            </p>
                        </section>

                        <section>
                            <h2>5. Security</h2>
                            <p>
                                While we strive to use commercially acceptable means to protect your software experience, remember that no method of transmission over the internet
                                or method of electronic storage is 100% secure. As open-source software, Navis is provided "AS IS", and you are responsible for
                                securing your own deployment environment.
                            </p>
                        </section>

                        <section>
                            <h2>6. Changes to This Policy</h2>
                            <p>
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                            </p>
                        </section>

                        <section>
                            <h2>7. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us via our GitHub repository or community channels.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
