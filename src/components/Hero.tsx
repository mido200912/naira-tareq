import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import niraPortrait from "@/assets/nira-portrait.jpg";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="text-gradient">Nira Tarek</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Graphic Designer
            </p>
            <p className="text-lg text-muted-foreground">
              Transforming ideas into stunning visual experiences through innovative design solutions.
            </p>
            <div className="flex gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={niraPortrait}
                alt="Nira Tarek - Graphic Designer"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToProjects}
            className="animate-bounce p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Scroll to projects"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
