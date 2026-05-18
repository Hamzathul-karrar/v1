import { RESUME_DATA } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="section-heading">My Stack</h2>
      <div className="flex flex-col gap-10 mt-8">
        {RESUME_DATA.skills.map((category, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 md:gap-8 items-start">
            <h3 className="text-lg font-semibold text-lightest-slate mt-2">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group flex items-center gap-2 bg-light-navy/50 px-4 py-2 rounded border border-lightest-navy hover:border-teal hover:bg-light-navy hover:-translate-y-1 transition-all duration-300"
                >
                  {skill.slug ? (
                    <img
                      src={`https://cdn.simpleicons.org/${skill.slug}`}
                      alt={skill.name}
                      className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-teal opacity-80 group-hover:opacity-100 transition-opacity"></span>
                  )}
                  <span className="text-sm text-light-slate group-hover:text-teal transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
