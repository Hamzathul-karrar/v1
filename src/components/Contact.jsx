import { RESUME_DATA } from '../constants';

const Contact = () => (
  <section id="contact" className="text-center max-w-[600px] py-32 mx-auto">
    <p className="mono mb-5">What’s Next?</p>
    <h2 className="text-4xl md:text-6xl font-bold text-lightest-slate mb-5">Get In Touch</h2>
    <p className="text-lg mb-12">
      I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
    </p>
    <a
      href={`mailto:${RESUME_DATA.email}`}
      className="inline-block px-10 py-5 border border-teal text-teal font-mono text-sm rounded hover:bg-teal-tint transition-all"
    >
      Say Hello
    </a>
  </section>
);

export default Contact;
