import telvidaImg from "../assets/projects/telvida.jpg";
import businessImg from "../assets/projects/img_2.jpg";
import webImg from "../assets/projects/img_3.jpg";
import greenImg from "../assets/projects/img_4.jpg";
import noteImg from "../assets/projects/img_5.jpg";
import FadeIn from "./FadeIn";

const projects = [
  {
    title: "Telvida Technologies Website",
    description:
      "A full-stack production website built for Telvida Technologies, featuring a responsive frontend, backend functionality, and an admin dashboard for managing website content and operations.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Admin Dashboard"],
    demo: "https://www.telvidatechnologies.com",
    image: telvidaImg,
  },

  {
    title: "Business Online Health Score",
    description:
      "A platform that analyzes a business's online presence and generates actionable recommendations.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Oluremi37/Swift-project-frontend",
    demo: "https://swift-project-frontend.vercel.app/",
    image: businessImg,
  },

  {
    title: "Web Agency Website",
    description:
      "A responsive website for a web agency showcasing their services and portfolio.",
    tech: ["React", "CSS"],
    github: "https://github.com/Oluremi37/Web-Agency",
    demo: "https://web-agency-five-rho.vercel.app/",
    image: webImg,
  },

  {
    title: "Green Environment Platform",
    description:
      "A platform that promotes environmental awareness and sustainability through interactive content.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Oluremi37/Green-evironment",
    demo: "https://green-evironment.vercel.app",
    image: greenImg,
  },

  {
    title: "Note App",
    description: "A simple note-taking app built with React and MongoDB.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Oluremi37/Note-App",
    demo: "https://note-app-eight-pied.vercel.app/",
    image: noteImg,
  },
];

const Projects = () => {
  return (
    <FadeIn>
      <section id="projects" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold uppercase tracking-widest">
              My Work
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
              Featured Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-5 text-sm leading-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-slate-800 text-slate-300 px-3 py-1 rounded-lg text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    {/* Live Website / Demo */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 text-center px-4 py-2 rounded-lg transition ${
                        project.github
                          ? "bg-orange-500 hover:bg-orange-600 text-white"
                          : "bg-orange-500 hover:bg-orange-600 text-white"
                      }`}
                    >
                      {project.title === "Telvida Technologies Website"
                        ? "Visit Website"
                        : "Live Demo"}
                    </a>

                    {/* GitHub - only for projects that have a GitHub link */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default Projects;
