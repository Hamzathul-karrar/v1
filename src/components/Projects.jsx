import { Github, ExternalLink } from 'lucide-react';
import { RESUME_DATA } from '../constants';
import { cn } from '../lib/utils';

const Projects = () => (
  <section id="projects" className="scroll-mt-20">
    <h2 className="section-heading">Some Things I’ve Built</h2>
    <div className="space-y-24">
      {RESUME_DATA.projects.map((project, i) => (
        <div key={project.title} className={cn(
          "relative grid grid-cols-12 items-center mb-30",
          i % 2 !== 0 && "md:text-right"
        )}>
          {/* Project Image */}
          <div className={cn(
            "col-span-12 md:col-span-7 relative aspect-[16/10] rounded overflow-hidden group shadow-xl md:row-start-1",
            i % 2 !== 0 ? "md:col-start-6" : "md:col-start-1"
          )}>
            <a href={project.live || project.github} target="_blank" rel="noopener noreferrer" className="w-full h-full block relative z-10">
              <div className="absolute inset-0 bg-teal/30 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 z-20"></div>
              <img
                src={`/${project.image}`}
                alt={project.title}
                className="w-full h-full object-cover mix-blend-multiply group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Project Content */}
          <div className={cn(
            "col-span-12 md:col-span-6 z-20 mt-6 md:mt-0 flex flex-col md:row-start-1 text-left",
            i % 2 !== 0 ? "md:col-start-1 md:items-start md:text-left" : "md:col-start-7 md:items-end md:text-right"
          )}>
            <h3 className="text-2xl md:text-3xl font-bold mb-5 hover:text-teal transition-all">
              <a href={project.live || project.github} target="_blank" rel="noopener noreferrer">{project.title}</a>
            </h3>
            <div className="bg-light-navy p-6 rounded shadow-xl text-light-slate text-base md:text-lg mb-6 w-full">
              {project.description}
            </div>
            <ul className={cn(
              "flex flex-wrap list-none font-mono text-xs text-light-slate mb-4",
              i % 2 !== 0 ? "justify-start md:justify-start" : "justify-start md:justify-end"
            )}>
              {project.tech.map((t, index) => (
                <li key={t} className={cn("mb-2 mr-4", i % 2 === 0 && "md:mr-0 md:ml-4")}>{t}</li>
              ))}
            </ul>
            <div className={cn(
              "flex items-center",
              i % 2 !== 0 ? "justify-start md:justify-start" : "justify-start md:justify-end"
            )}>
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-all mr-4"><Github size={20} /></a>}
              {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-all"><ExternalLink size={20} /></a>}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
