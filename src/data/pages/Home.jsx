import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Akshit - Front‑end Developer Portfolio | BCa 2nd Year</title>
                 <meta name="description" content="Portfolio of John Doe, a front‑end web developer proficient in HTML, CSS, JavaScript, React, and more. Currently studying BCA at Dr. N. Dronacharya College." />
        <meta name="keywords" content="front‑end developer, React, JavaScript, portfolio, BCA, student" />
            </Helmet>

            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </>
    );
}
