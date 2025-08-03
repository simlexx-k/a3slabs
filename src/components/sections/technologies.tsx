"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Cloud, Brain, Smartphone, Globe } from "lucide-react"
import { technologies } from "@/lib/constants"

const techCategories = [
  {
    name: "Frontend",
    icon: Globe,
    technologies: ["React", "Next.js", "TypeScript", "D3.js", "Three.js"],
    color: "from-blue-500 to-cyan-500",
    gradientClass: "gradient-text-cyan",
    glowClass: "glow-effect",
  },
  {
    name: "Backend",
    icon: Code,
    technologies: ["Node.js", "Python", "GraphQL", "Redis", "Elasticsearch"],
    color: "from-green-500 to-emerald-500",
    gradientClass: "gradient-text-emerald",
    glowClass: "glow-effect-emerald",
  },
  {
    name: "Database",
    icon: Database,
    technologies: ["PostgreSQL", "MongoDB"],
    color: "from-purple-500 to-pink-500",
    gradientClass: "gradient-text-purple",
    glowClass: "glow-effect-purple",
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    technologies: ["AWS", "Docker", "Kubernetes"],
    color: "from-orange-500 to-red-500",
    gradientClass: "gradient-text-orange",
    glowClass: "glow-effect-orange",
  },
  {
    name: "AI & ML",
    icon: Brain,
    technologies: ["TensorFlow", "PyTorch"],
    color: "from-indigo-500 to-purple-500",
    gradientClass: "gradient-text-purple",
    glowClass: "glow-effect-purple",
  },
  {
    name: "Mobile",
    icon: Smartphone,
    technologies: ["React Native"],
    color: "from-teal-500 to-blue-500",
    gradientClass: "gradient-text-cyan",
    glowClass: "glow-effect",
  },
]

export function Technologies() {
  return (
    <section className="py-20 bg-gradient-dark">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Code className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Tech Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">Cutting-Edge</span>
            <br />
            <span className="text-foreground">Technologies</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We leverage the latest technologies and frameworks to build scalable, 
            performant, and innovative solutions for our clients.
          </motion.p>
        </motion.div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => {
            const IconComponent = category.icon
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card variant="tech" className={`h-full ${category.glowClass}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className={`text-xl font-semibold ${category.gradientClass}`}>{category.name}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* All Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 gradient-text">Complete Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="group"
              >
                <Badge 
                  variant="glass" 
                  className="text-sm px-4 py-2 cursor-pointer group-hover:bg-primary/20 transition-all duration-300 hover:neon-glow"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card variant="glass" className="p-8 rainbow-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text-purple mb-2">17+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text-emerald mb-2">6</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text-orange mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Compatibility</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text-cyan mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
} 