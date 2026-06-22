import FadeIn from "./FadeIn";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

const Skills = () => {
  return (
    <FadeIn>
      <section id="skills" className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold uppercase tracking-widest">
              My Skills
            </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Technologies I Use
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-orange-500 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-800 text-slate-300 px-4 py-2 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </FadeIn>
  );
};

export default Skills;
