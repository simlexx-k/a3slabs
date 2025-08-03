"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Code, Brain, Lightbulb, ArrowRight, Check } from "lucide-react"
import { services } from "@/lib/constants"

const iconMap = {
  Code: Code,
  Brain: Brain,
  Lightbulb: Lightbulb,
}

const serviceVariants = [
  { gradientClass: "gradient-text", glowClass: "glow-effect", borderClass: "gradient-border" },
  { gradientClass: "gradient-text-purple", glowClass: "glow-effect-purple", borderClass: "gradient-border-purple" },
  { gradientClass: "gradient-text-emerald", glowClass: "glow-effect-emerald", borderClass: "gradient-border-emerald" },
]

export function Services() {
  return (
    <section id="services" className="py-20">
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
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 pulse-glow"
          >
            <Code className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">What We Do</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We deliver cutting-edge solutions across software development, data science, 
            and strategic consulting to transform your business.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            const variant = serviceVariants[index % serviceVariants.length]
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card variant="service" className={`h-full ${variant.borderClass} ${variant.glowClass}`}>
                  <CardHeader className="pb-4">
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="h-6 w-6 text-primary" />
                    </motion.div>
                    <CardTitle className={`text-xl mb-2 ${variant.gradientClass}`}>{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (featureIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-2"
                        >
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-colors hover:neon-glow">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card variant="glass" className="max-w-2xl mx-auto p-8 rainbow-border">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let&apos;s discuss how our expertise can drive your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button variant="accent" size="lg">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="accentEmerald" size="lg">
              Schedule Consultation
            </Button>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
} 