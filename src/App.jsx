import Nav from './components/Nav';
import SocialSidebar from './components/SocialSidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative">
      <Nav />

      <main className="px-6 md:px-24 lg:px-36">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <SocialSidebar />
        <Footer />
      </main>
    </div>
  );
}
