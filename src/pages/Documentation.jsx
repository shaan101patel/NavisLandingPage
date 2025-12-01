import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GithubLogo } from 'phosphor-react';
import './Legal.css';

const Documentation = () => {
    return (
        <>
            <Navbar />
            <div className="legal-page">
                <div className="container">
                    <div className="legal-content glass-card">
                        <h1>Documentation</h1>

                        <section>
                            <h2>Open Source License</h2>
                            <p>
                                Navis is proud to be an open-source project. We believe in the power of community collaboration
                                and transparency. You can access our source code, contribute to the project, and inspect
                                how it works directly on GitHub.
                            </p>
                            <div style={{ marginTop: '1.5rem' }}>
                                <a
                                    href="https://github.com/shaan101patel/NavisCopilot_NP_1.0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    <GithubLogo size={20} weight="bold" />
                                    View on GitHub
                                </a>
                            </div>
                        </section>

                        <section>
                            <h2>Commercial Use Restrictions</h2>
                            <p className="uppercase-warning">
                                PLEASE NOTE: While Navis is open source, it is NOT open for commercial reselling or unauthorized commercial use.
                            </p>
                            <p>
                                You are free to use Navis for your own internal business purposes or personal use. However, you may not:
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Resell the software as a standalone product.</li>
                                <li style={{ marginBottom: '0.5rem' }}>White-label the software and sell it to third parties.</li>
                                <li style={{ marginBottom: '0.5rem' }}>Include the software in a commercial distribution without explicit permission.</li>
                            </ul>
                            <p>
                                For any questions regarding commercial licensing or partnerships, please contact us directly.
                            </p>
                        </section>

                        <section>
                            <h2>Getting Started</h2>
                            <p>
                                For detailed installation instructions, configuration guides, and contribution guidelines,
                                please refer to our README and documentation files located in our GitHub repository.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Documentation;
