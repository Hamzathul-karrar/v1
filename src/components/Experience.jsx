import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RESUME_DATA } from '../constants';
import { cn } from '../lib/utils';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="scroll-mt-20 max-w-[700px]">
      <h2 className="section-heading">Where I’ve Worked</h2>
      <div className="flex flex-col md:flex-row min-h-[300px]">
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible mb-8 md:mb-0 border-b md:border-b-0 md:border-l border-lightest-navy">
          {RESUME_DATA.experience.map((exp, i) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(i)}
              className={cn(
                "px-5 py-3 text-left font-mono text-xs whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 transition-all",
                activeTab === i
                  ? "text-teal border-teal bg-light-navy"
                  : "text-slate border-lightest-navy hover:bg-light-navy hover:text-teal"
              )}
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div className="md:pl-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-medium mb-1">
                {RESUME_DATA.experience[activeTab].role} <span className="text-teal">@ {RESUME_DATA.experience[activeTab].company}</span>
              </h3>
              <p className="font-mono text-xs mb-6">{RESUME_DATA.experience[activeTab].period}</p>
              <ul className="space-y-4 list-none">
                {RESUME_DATA.experience[activeTab].description.map((item, i) => (
                  <li key={i} className="flex text-base">
                    <span className="text-teal mr-3 mt-1.5 leading-none text-xs">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;
