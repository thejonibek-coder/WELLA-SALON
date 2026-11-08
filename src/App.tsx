import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Gallery } from '@/components/Gallery';
import { Booking } from '@/components/Booking';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal antialiased selection:bg-rosegold/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Booking />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
