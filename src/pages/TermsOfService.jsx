import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Legal.css';

const TermsOfService = () => {
    return (
        <>
            <Navbar />
            <div className="legal-page">
                <div className="container">
                    <div className="legal-content glass-card">
                        <h1>Terms of Service</h1>
                        <p className="last-updated">Last Updated: December 1, 2025</p>

                        <section>
                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using Navis, you agree to be bound by these Terms of Service.
                                If you disagree with any part of the terms, you may not use the software.
                            </p>
                        </section>

                        <section>
                            <h2>2. License and Open Source</h2>
                            <p>
                                Navis is free and open-source software. Your use of the software is governed by the applicable open-source license
                                (e.g., MIT License) included with the source code. Please refer to the LICENSE file in the repository for specific terms.
                            </p>
                        </section>

                        <section>
                            <h2>3. Disclaimer of Warranties ("AS IS")</h2>
                            <p className="uppercase-warning">
                                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
                                THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
                                TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                            </p>
                        </section>

                        <section>
                            <h2>4. Limitation of Liability</h2>
                            <p className="uppercase-warning">
                                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NAVIS AND ITS CONTRIBUTORS SHALL NOT BE LIABLE FOR ANY INDIRECT,
                                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY
                                OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE
                                OF OR INABILITY TO ACCESS OR USE THE SOFTWARE.
                            </p>
                        </section>

                        <section>
                            <h2>5. User Responsibilities</h2>
                            <p>
                                You are responsible for your use of the software, including compliance with all applicable laws and regulations.
                                You are solely responsible for securing your data and environment.
                            </p>
                        </section>

                        <section>
                            <h2>6. Modifications</h2>
                            <p>
                                We reserve the right to modify or replace these Terms at any time. By continuing to access or use our software after
                                those revisions become effective, you agree to be bound by the revised terms.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TermsOfService;
