"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Github, Users, Star } from "lucide-react"
import { team } from "@/lib/constants"

export function Team() {
  return (
    <section id="team" className="py-20">
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
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Team</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">Meet Our</span>
            <br />
            <span className="text-foreground">Expert Team</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Our talented team of experts brings together years of experience in software development, 
            data science, and cutting-edge technologies to deliver exceptional results.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300">
                {/* Member Avatar Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <p className="text-sm text-muted-foreground">Professional Photo</p>
                  </div>
                  
                  {/* Social Links Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/30">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/30">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-lg mb-1">{member.name}</CardTitle>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* Expertise */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Experience Indicator */}
                  <div className="flex items-center space-x-2 pt-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${i < 4 ? 'text-yellow-500 fill-current' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">Expert Level</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card variant="glass" className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Dedication</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card variant="glass" className="max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Team
            </h3>
            <p className="text-muted-foreground mb-6">
              We&apos;re always looking for talented individuals who are passionate about technology and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg">
                View Open Positions
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
} 