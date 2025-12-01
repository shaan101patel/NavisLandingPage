import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Legal.css';

const Security = () => {
    return (
        <>
            <Navbar />
            <div className="legal-page">
                <div className="container">
                    <div className="legal-content glass-card">
                        <h1>Security</h1>
                        <p className="last-updated">Last Updated: December 1, 2025</p>

                        <section>
                            <h2>1. Our Approach to Security</h2>
                            <p>
                                At Navis, we prioritize security by design. However, as an open-source tool that you deploy and manage,
                                the security of your specific instance largely depends on your infrastructure and configuration.
                            </p>
                        </section>

                        <section>
                            <h2>2. Data Sovereignty</h2>
                            <p>
                                Navis is designed to keep your data under your control. We do not maintain a central database of your
                                call logs or customer interactions. Data is processed locally or within your own cloud environment,
                                reducing the risk of third-party data breaches.
                            </p>
                        </section>

                        <section>
                            <h2>3. Vulnerability Reporting</h2>
                            <p>
                                If you discover a security vulnerability in Navis, please report it to us responsibly via our GitHub repository.
                                We appreciate the community's help in identifying and fixing potential issues.
                            </p>
                        </section>

                        <section>
                            <h2>4. No Security Guarantees</h2>
                            <p>
                                While we strive to write secure code, software may contain bugs or vulnerabilities.
                                Navis is provided "as is" without any warranty regarding its security or invulnerability to attacks.
                                You are responsible for auditing the code and securing your deployment environment.
                            </p>
                        </section>

                        <section>
                            <h2>5. Third-Party Dependencies</h2>
                            <p>
                                Navis relies on various third-party libraries and APIs. We cannot guarantee the security of these external dependencies.
                                We recommend keeping your software and dependencies up to date to mitigate known risks.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Security;
