import { motion } from 'motion/react';
import { RESUME_DATA } from '../constants';

const Hero = () => (
  <section id="hero" className="flex flex-col justify-center min-h-screen pt-16 sm:pt-20 md:pt-24">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mono mb-5"
    >
      Hi, my name is
    </motion.p>
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="big-heading mb-2"
    >
      {RESUME_DATA.name}.
    </motion.h1>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="medium-heading mb-5"
    >
      I build things for the web.
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="max-w-[540px] text-lg leading-relaxed mb-12"
    >
      Software Developer focused on building scalable web apps. I specialize in <span className="text-teal">Java, Spring Boot, and React</span>, taking projects from a rough concept to a polished deployment. Let's build something great.     </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <a
        href="#projects"
        className="inline-block px-7 py-4 border border-teal text-teal font-mono text-sm rounded hover:bg-teal-tint transition-all"
      >
        Check out my work!
      </a>
      <br />
      <a
        href="/Hamza_Resume_Java.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-7 py-4 border border-teal text-teal font-mono text-sm rounded hover:bg-teal-tint transition-all"
      >
        Download Resume
      </a>
    </motion.div>
  </section>
);

export default Hero;
