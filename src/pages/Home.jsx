import AboutSection from "../components/AboutMe.jsx";
import AnimatedBackground from "../components/AnimatedBackground.jsx";
import HeroSection from "../components/HeroSection.jsx";
import NavBar from "../components/NavBar.jsx";
import { ThemeToggle } from "../components/ThemeToggle.jsx";
import PixelBlast from "../components/PixelBackground.jsx";
import SkillSection from "../components/SkillSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Ribbons from "../components/Ribbons.jsx";
import FooterSection from "../components/FooterSection.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden items-center">
      
  <Ribbons
    baseThickness={25}
    colors={['#7362CB']}
    speedMultiplier={0.5}
    maxAge={500}
    enableFade={true}
    enableShaderEffect={true}
  />

      <div className="">
        <ThemeToggle />
      </div>

      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#b479fb"
        patternScale={1.3}
        patternDensity={0.4}
        pixelSizeJitter={0.5}
        speed={0.6}
        edgeFade={0.25}
        transparent
      />
      <NavBar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <FooterSection/>
    </div>
  );
};

export default Home;
