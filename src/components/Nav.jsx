import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      "fixed top-0 z-40 w-full px-6 md:px-12 transition-all duration-300 flex items-center justify-between h-20 md:h-24",
      scrolled ? "bg-navy/85 backdrop-blur shadow-lg h-16 md:h-20" : "bg-transparent"
    )}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-teal"
      >
        <a href="/" className="group relative block w-10 h-10">
          <div className="absolute inset-0 border-2 border-teal rounded-sm rotate-45 group-hover:bg-teal-tint transition-all" />
          <span className="absolute inset-0 flex items-center justify-center font-mono font-bold text-lg">H</span>
        </a>
      </motion.div>

      <nav className="hidden md:flex items-center space-x-8">
        <ol className="flex space-x-8 list-none ">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="font-mono text-sm tracking-widest"
            >
              <a
                href={link.href}
                className={cn(
                  "transition-all duration-300 border-b-2 py-1",
                  activeSection === link.href.substring(1)
                    ? "text-teal-500 border-teal-500"
                    : "text-lightest-slate border-transparent hover:text-teal-500"
                )}
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ol>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/Hamza_Resume_Java.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-teal text-teal text-sm font-mono rounded hover:bg-teal-tint transition-all"
          >
            Resume
          </a>
        </motion.div>
      </nav>

      {/* Mobile Menu Toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:hidden text-teal focus:outline-none z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </motion.button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-light-navy/95 backdrop-blur-md shadow-xl flex flex-col items-center py-8 z-40 md:hidden"
          >
            <ol className="flex flex-col items-center space-y-6 list-none w-full">
              {navLinks.map((link) => (
                <li key={link.name} className="font-mono text-lg tracking-widest w-full text-center">
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "transition-all duration-300 block w-full py-2",
                      activeSection === link.href.substring(1)
                        ? "text-teal"
                        : "text-lightest-slate hover:text-teal"
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ol>
            <a
              href="/Hamza_Resume_Java.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-8 px-8 py-4 border border-teal text-teal text-lg font-mono rounded hover:bg-teal-tint transition-all"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
