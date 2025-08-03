"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ArrowRight, Play, Code, Zap, TrendingUp } from "lucide-react"
import { siteConfig } from "@/lib/constants"

const codeSnippets = [
  `const a3sLabs = {
  expertise: ['Software Dev', 'Data Science'],
  approach: 'Innovation First',
  result: 'Digital Excellence'
}`,
  `async function transformBusiness() {
  const insights = await analyzeData();
  const solution = buildSolution(insights);
  return deploy(solution);
}`,
  `class A3SLabs {
  constructor() {
    this.innovation = 'unlimited';
    this.quality = 'exceptional';
  }
  
  deliver() {
    return 'excellence';
  }
}`
]

export function Hero() {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0)
  const [displayedCode, setDisplayedCode] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentCode = codeSnippets[currentCodeIndex]
    let charIndex = 0

    const typeCode = () => {
      if (charIndex <= currentCode.length) {
        setDisplayedCode(currentCode.slice(0, charIndex))
        charIndex++
        setTimeout(typeCode, 50)
      } else {
        setTimeout(() => {
          setIsTyping(false)
          setTimeout(() => {
            setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length)
            setIsTyping(true)
            setDisplayedCode("")
          }, 2000)
        }, 1000)
      }
    }

    typeCode()
  }, [currentCodeIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-emerald/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 pulse-glow"
              >
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Innovation at Scale
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="gradient-text">Transforming Ideas</span>
                <br />
                <span className="text-foreground">into Digital Reality</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl text-muted-foreground max-w-2xl"
              >
                {siteConfig.description}. We specialize in cutting-edge software development, 
                data science, and AI solutions that drive business transformation.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" variant="accent" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="accentPurple" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
            >
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-purple">100+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-emerald">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text-orange">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Code Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card border border-border rounded-xl p-6 shadow-2xl rainbow-border">
              {/* Code Header */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-sm text-muted-foreground ml-4">
                  a3s-labs.js
                </div>
              </div>

              {/* Animated Code */}
              <div className="font-mono text-sm">
                <pre className="text-foreground">
                  <code>
                    {displayedCode}
                    {isTyping && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="text-primary"
                      >
                        |
                      </motion.span>
                    )}
                  </code>
                </pre>
              </div>

              {/* Enhanced Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center neon-glow"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Code className="h-4 w-4 text-primary" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center neon-glow-emerald"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <TrendingUp className="h-4 w-4 text-secondary" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-6 w-6 h-6 bg-purple/20 rounded-full flex items-center justify-center neon-glow-purple"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-purple rounded-full" />
              </motion.div>

              <motion.div
                className="absolute bottom-1/2 -left-6 w-6 h-6 bg-emerald/20 rounded-full flex items-center justify-center neon-glow-emerald"
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="w-2 h-2 bg-emerald rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
} 