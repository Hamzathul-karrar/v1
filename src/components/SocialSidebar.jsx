import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const SocialSidebar = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1 }}
    className="flex justify-center items-center space-x-6 py-6"
  >
    <a href={RESUME_DATA.github} target="_blank" rel="noreferrer" className="text-slate hover:text-teal hover:-translate-y-1 transition-all inline-block"><Github size={24} /></a>
    <a href={RESUME_DATA.linkedin} target="_blank" rel="noreferrer" className="text-slate hover:text-teal hover:-translate-y-1 transition-all inline-block"><Linkedin size={24} /></a>
    <a href={`mailto:${RESUME_DATA.email}`} className="text-slate hover:text-teal hover:-translate-y-1 transition-all inline-block"><Mail size={24} /></a>
  </motion.div>
);

export default SocialSidebar;
