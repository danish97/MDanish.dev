import { GithubIcon, LinkedinIcon, MailIcon, Code, Bot, Webhook, Tv2Icon, ChartNoAxesCombined } from "lucide-react";
import { FadeInUp } from "./fadein";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* mobile image first */}
          <div className=" md:hidden grid-cols-1 gap-6">
            <div className="flex bg-primary justify-center">
              <img className=" h-72 w-72 object-cover " src="src/imgs/dp.JPG" />
            </div>
          </div>
          <FadeInUp>
          <div className="gradient-border card-hover p-3 rounded-lg space-y-6">
            <h2 className="text-2xl font-bold text-primary">My Journey</h2>
            <p className="text-muted-foreground">
              A <span className="text-primary font-semibold">Full Stack Developer</span> and AI Automation Engineer with a passion
              for creating smart, scalable, and impactful digital solutions. I
              started coding at the age of 12, and that early curiosity evolved
              into a deep love for building technology that makes life simpler
              and more efficient. With that passion I chose Computer Science as my bachelors and graduated in June 2025.
            </p>
            <p>
              My expertise lies in the MERN Stack, Python, and a strong
              foundation in C++. I enjoy turning ideas into fully functional
              products — whether it's a full-stack web app or an automation
              system powered by AI. For me, development is more than just code —
              it's about crafting seamless experiences.
            </p>
            <div className="flex flex-row gap-4 justify-center">
              <a href="#projects" className="cosmic-button">
                Portfolio
              </a>
            </div>
            <div className="flex flex-row gap-4 justify-center">
              <a
                href="https://github.com/danish97"
                className="hover:text-primary transition-colors duration-300"
              >
                <GithubIcon className="size-6" />
              </a>
              <a
                href="https://linkedin.com/in/danishwbb"
                className="hover:text-primary transition-colors duration-300"
              >
                <LinkedinIcon className="size-6" />
              </a>
              <a
                href="mailto:danishayaz97@gmail.com"
                className="hover:text-primary transition-colors duration-300"
              >
                <MailIcon className="size-6" />
              </a>
            </div>
          </div>
          </FadeInUp>
          <div className="hidden md:grid grid-cols-1 gap-6">
            <div className="flex md:h-96 md:w-96 bg-primary justify-center">
              <img className="md:h-96 md:w-96 md:-mt-2 md:-ml-4 object-cover " src="src/imgs/dp.JPG" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
