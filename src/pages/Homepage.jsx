import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedIn from '../components/FeaturedIn';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Mission from '../components/Mission';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <FeaturedIn />
            <Features />
            <Testimonials />
            <Mission />
            <Pricing />
            <FAQ />
            <Footer />
        </>
    );
};

export default Homepage;
