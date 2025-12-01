import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Legal.css';

const Compliance = () => {
    return (
        <>
            <Navbar />
            <div className="legal-page">
                <div className="container">
                    <div className="legal-content glass-card">
                        <h1>Compliance</h1>
                        <p className="last-updated">Last Updated: December 1, 2025</p>

                        <section>
                            <h2>1. Compliance Overview</h2>
                            <p>
                                Navis is a tool that can assist organizations in their compliance efforts, but the software itself is not a compliance certification.
                                Using Navis does not automatically make your organization compliant with regulations such as GDPR, HIPAA, or SOC 2.
                            </p>
                        </section>

                        <section>
                            <h2>2. Your Responsibility</h2>
                            <p>
                                Compliance is a shared responsibility, but primarily rests with you as the data controller and operator of the software.
                                You are responsible for ensuring that your use of Navis, including how you collect, process, and store data,
                                complies with all applicable laws and regulations in your jurisdiction.
                            </p>
                        </section>

                        <section>
                            <h2>3. GDPR and Privacy Regulations</h2>
                            <p>
                                Navis is designed to be privacy-friendly by keeping data local. However, you must ensure you have the appropriate legal basis
                                (such as consent) to record and process customer calls. You are responsible for handling data subject requests (e.g., deletion, access)
                                within your own data stores.
                            </p>
                        </section>

                        <section>
                            <h2>4. No Legal Advice</h2>
                            <p>
                                Information provided by Navis regarding compliance is for informational purposes only and does not constitute legal advice.
                                You should consult with your own legal counsel to understand your compliance obligations.
                            </p>
                        </section>

                        <section>
                            <h2>5. HIPAA Considerations</h2>
                            <p>
                                If you are a covered entity under HIPAA, you are responsible for ensuring that your deployment of Navis and any associated infrastructure
                                meets HIPAA security and privacy rule requirements. Navis does not sign Business Associate Agreements (BAAs) as we do not host your data.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Compliance;
