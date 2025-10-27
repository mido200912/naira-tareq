import { motion } from "framer-motion";
import { Palette, Sparkles, Layers, Wand2 } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: Palette,
      title: "Adobe Photoshop",
      description: "Expert in photo editing, manipulation, and digital art creation.",
    },
    {
      icon: Sparkles,
      title: "Adobe Illustrator",
      description: "Professional vector graphics and logo design capabilities.",
    },
 {
  icon: Layers,
  title: "Canva",
  description: "Creative graphic design and visual content creation using Canva.",
},

    {
      icon: Wand2,
      title: "After Effects",
      description: "Motion graphics and animation for engaging visual content.",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate graphic designer with expertise in creating compelling visual identities 
            and designs that tell stories. With years of experience in the industry, I specialize in 
            transforming brands through creative design solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-card shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <skill.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
