import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { FadeInUp } from "./fadein";

const projects = [
  {
    id: 1,
    title: "AI Powered Quiz Funnel Generator",
    description:
      "A simple yet powerful AI tool that generates 5 quiz questions for your quiz funnel by just analyzing your landing page.",
    image: "/projects/quizgenerator.png",
    tags: ["Langchain", "OpenAI", "Django", "React"],
    githubUrl: "https://github.com/danish97/AI-Quiz-Generator",
    live: false,
  },
  {
    id: 2,
    title: "DevConnect",
    description:
      "A Social Media Platform for developers. Register, Login and start posting your favorite Coding Tips",
    image: "/projects/devconnect.png",
    tags: [
      "React",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
      "TailwindCss",
      "Upstash",
    ],
    githubUrl: "https://github.com/danish97/DevConnect",
    live: "https://dev-connect-two-blue.vercel.app/",
  },
  {
    id: 3,
    title: "FlowDo",
    description:
      "A platform to create task boards for yourself. Mark as completed, Create Categories, Update Tasks, All in one place.",
    image: "/projects/flowdo.png",
    tags: ["React", "NodeJS", "ExpressJS", "MongoDB", "TailwindCss"],
    githubUrl: "https://github.com/danish97/FlowDo",
    live: false,
  },
  {
    id: 4,
    title: "Veo 3 Content Creation Agent",
    description:
      "An AI Agent that auto generates content and posts on tiktok. Just input an Idea in Google Sheet and You're done.",
    image: "/projects/Sora2.png",
    tags: ["n8n", "OpenAI"],
    githubUrl: false,
    live: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <FadeInUp>
        <h2 className="text-3xl md:text-4xl mb-4 font-bold text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        </FadeInUp>
        <FadeInUp>
        <p className="text-center text-muted-foreground mb-12 p-4 rounded-sm max-w-2xl mx-auto bg-card/60">
          Here are some of my recent Projects. Each project was carefuly built
          from scratch with attention to detail, performance and user
          experience.
        </p>
        </FadeInUp>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {projects.map((project, key) => (
            <FadeInUp>
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full"
            >
              
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border bg-primary/20 rounded-full text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        className="hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    ) : (
                      ""
                    )}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    ) : (
                      ""
                    )}
                    
                  </div>
                </div>
              </div>
            </div>
            </FadeInUp>
          ))}
          
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://github.com/danish97"
            target="_blank"
            className="flex cosmic-button w-fit items-center mx-auto gap-2"
          >
            Checkout My Github <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
