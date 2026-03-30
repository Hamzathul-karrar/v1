const About = () => (
  <section id="about" className="scroll-mt-20">
    <h2 className="section-heading" >About Me</h2>
    <div className="grid md:grid-cols-[3fr_2fr] gap-12">
      <div className="space-y-4 text-lg">
        <p>
          Hello! I'm <span className="text-teal">Hamzathul karrar</span>, a software developer who loves the challenge of turning a complex problem into a clean, functional piece of software. My journey in tech started with a deep curiosity about how the web works, which led me to earn my B.Tech in Computer Science and Engineering.
        </p>
        <p>
          I specialize in building scalable web applications and designing RESTful web services using Spring Boot, Hibernate, and MySQL. With a strong foundation in clean MVC architecture and Spring Security,
        </p>
        <p>
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul className="grid grid-cols-2 gap-2 list-none font-mono text-sm">
          {['Java', 'Spring Boot', 'React', 'MySQL', 'Rest APIs', 'Hibernate'].map(tech => (
            <li key={tech} className="before:content-['▹'] before:text-teal before:mr-2">{tech}</li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block relative group max-w-[300px] mx-auto md:mx-0">
        <div className="relative z-10 block w-full aspect-square rounded overflow-hidden">
          <img
            src={`/me.png`}
            alt="Profile"
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-5 left-5 w-full aspect-square border-2 border-teal rounded -z-10 group-hover:top-4 group-hover:left-4 transition-all duration-300" />
      </div>
    </div>
  </section>
);

export default About;
