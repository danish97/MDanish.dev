import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiGithub,
  SiN8N,
  SiPostman,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiExpress />, title: "Express" },
  { node: <SiMongodb />, title: "MongoDB" },
  { node: <SiSupabase />, title: "Supabase" },
  { node: <SiGithub />, title: "GitHub" },
  { node: <SiNodedotjs />, title: "NodeJs" },
  { node: <SiN8N />, title: "n8n" },
  { node: <SiPostman />, title: "n8n" },
];

const langs = [
  { name: "Javascript/Typescript", level: "90" },
  { name: "Python", level: "95" },
  { name: "C#", level: "85" },
  { name: "C++", level: "85" },
];

const SkillSection = () => {
  return (
    <div
      id="skills"
      className="relative py-24 flex flex-col items-center justify-center space-y-4 mb-6 "
    >
      <h2 className="text-2xl md:text-4xl font-bold text-center animate-fade-in-delay-1">
        My <span className="text-primary ">Skills</span>
      </h2>
      <div className="flex flex-col justify-center mx-auto gap-2">
        <div className="flex space-y-4 bg-card p-6 rounded-lg overflow-hidden max-w-6xl">
          <div className="mr-4 max-w-xl ">
            <p className="text-muted-foreground text-center">
              My skill set spans JavaScript/TypeScript, Python, C++, and C#,
              giving me the versatility to design scalable apps, powerful
              automations, and performance-driven systems. Whether it's frontend
              logic, backend architecture, or low-level problem-solving — I love
              working across the entire stack.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold">
        <span className="text-primary">Tools/Frameworks</span> I Use
      </h2>
      <div className="max-w-6xl">
      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        ariaLabel="Technology partners"
      />
      </div>
    </div>
  );
};

export default SkillSection;
