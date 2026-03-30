import { Github, ExternalLink } from 'lucide-react';
import { RESUME_DATA } from '../constants';
import { cn } from '../lib/utils';

const Projects = () => (
  <section id="projects" className="scroll-mt-20">
    <h2 className="section-heading">Some Things I’ve Built</h2>
    <div className="space-y-24">
      {RESUME_DATA.projects.map((project, i) => (
        <div key={project.title} className={cn(
          "relative grid grid-cols-12 items-center",
          i % 2 !== 0 && "text-right"
        )}>
          {/* Project Image */}
          <div className={cn(
            "col-span-12 md:col-span-7 relative aspect-[16/10] rounded overflow-hidden group shadow-xl",
            i % 2 !== 0 ? "md:col-start-6" : "md:col-start-1"
          )}>
            <div className="absolute inset-0 bg-teal/30 group-hover:bg-transparent z-10 transition-all duration-300" />
            <img
              src={`https://picsum.photos/seed/${project.title}/800/500`}
              alt={project.title}
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Project Content */}
          <div className={cn(
            "col-span-12 md:col-span-6 z-20 mt-6 md:mt-0",
            i % 2 !== 0 ? "md:col-start-1 md:text-left" : "md:col-start-7 md:text-right"
          )}>
            <h3 className="text-2xl md:text-3xl font-bold mb-5 hover:text-teal transition-all">
              <a href={project.live} target="_blank" rel="noopener noreferrer">{project.title}</a>
            </h3>
            <div className="bg-light-navy p-6 rounded shadow-xl text-light-slate text-base md:text-lg mb-6">
              {project.description[0]}
            </div>
            <ul className={cn(
              "flex flex-wrap list-none font-mono text-xs text-light-slate mb-4",
              i % 2 !== 0 ? "justify-start" : "justify-end"
            )}>
              {project.tech.map(t => (
                <li key={t} className="mx-2 mb-2">{t}</li>
              ))}
            </ul>
            <div className={cn(
              "flex items-center space-x-4",
              i % 2 !== 0 ? "justify-start" : "justify-end"
            )}>
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-all"><Github size={20} /></a>}
              {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-all"><ExternalLink size={20} /></a>}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
