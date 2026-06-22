import FadeIn from "./FadeIn";

const About = () => {
  return (
    <FadeIn>
      <section id="about" className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold uppercase tracking-widest">
              About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Who I Am
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-slate-300 leading-8">
            I'm Yetunde Solanke, a Full Stack Web Developer passionate about
            building modern websites and web applications that solve real
            business problems.
            <br />
            <br />
            I specialize in React, Node.js, Express, MongoDB and Tailwind CSS.
            My background in Agricultural Economics has strengthened my
            analytical thinking, problem-solving abilities and attention to
            detail, helping me approach software development from both a
            technical and business perspective.
            <br />
            <br />
            My goal is to create digital solutions that help businesses improve
            their online presence, attract customers and grow efficiently.
          </p>
        </div>
      </div>
      </section>
    </FadeIn>
  );
};

export default About;
