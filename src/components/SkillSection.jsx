import { FadeInUp } from "./fadein";
import { useState } from "react";
import { cn } from "../lib/utils";
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

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 85, category: "backend" },
  { name: "MongoDB", level: 90, category: "backend" },
  { name: "MySQL", level: 90, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Postmen", level: 95, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  // AI
  { name: "n8n", level: 90, category: "ai" },
  { name: "GHL", level: 80, category: "ai" },
  { name: "Vapi", level: 95, category: "ai" },
  { name: "Make.com", level: 95, category: "ai" },
  { name: "Supabase", level: 90, category: "ai" },
];
const categories = ["all", "frontend", "backend", "tools", "ai"];

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary"> Skills</span>
          </h2>
        </FadeInUp>
        <FadeInUp>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-forefround hover:bd-secondary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeInUp>
            <FadeInUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg text-center"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"                  
                />
              </div>
              <div className="text-right mt-1">
              </div>
            </div>
          ))}
        </div>
        </FadeInUp>
      </div>
      <div className="max-w-6xl mx-auto mt-6">
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
    </section>
  );
};

export default SkillSection;
