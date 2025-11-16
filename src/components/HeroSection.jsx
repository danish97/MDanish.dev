import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative  min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 ">
          {/* Image */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hello, I'm</span>
            <span className="opacity-0 text-primary animate-fade-in-delay-1">
              {" "}
              Muhammad Danish
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold">
            <TypeAnimation
              sequence={["Full Stack Developer", 1500, "AI Engineer", 1500, "Tech Enthusiast", 1500]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
              className="text-primary "
            />
          </h2>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-row gap-4 justify-center">
            <a href="/resume/Danish_Resume.pdf" download className="cosmic-button ">
              Resume
            </a>
            <a href="#projects" className="cosmic-button ">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
