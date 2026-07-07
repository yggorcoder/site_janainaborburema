import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StructuredData from "./components/StructuredData";

export default function App() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
