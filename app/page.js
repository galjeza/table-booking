import Hero from './components/Hero';
import Features from './components/Features';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import Companies from './components/Companies';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';
import ContactSales from './components/ContactSales';
export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <Cta />
      <Testimonials />
      <Blogs />
      <Newsletter />

      <ContactSales />
      <Footer />
    </>
  );
}
