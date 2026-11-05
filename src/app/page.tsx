import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Signature from "@/components/Signature";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Signature />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
