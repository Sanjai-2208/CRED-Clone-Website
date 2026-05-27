"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Award, Users, TrendingUp } from "lucide-react"

const trustPoints = [
  {
    icon: Shield,
    title: "bank-grade security",
    description: "your data is protected with 256-bit encryption and strict security protocols.",
  },
  {
    icon: Award,
    title: "exclusive membership",
    description: "join a community of financially responsible individuals with credit scores above 750.",
  },
  {
    icon: Users,
    title: "9M+ members",
    description: "trusted by millions of users across the country for secure bill payments.",
  },
  {
    icon: TrendingUp,
    title: "credit score boost",
    description: "members have seen an average 35% improvement in their credit scores.",
  },
]

export function TrustSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="trust" className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-background">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.05] tracking-tight"
          >
            a members-only
            <br />
            credit club
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed font-serif italic"
          >
            we believe good financial behavior should be rewarded, not ignored.
          </motion.p>
        </div>

        {/* Trust points grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group relative p-8 md:p-10 rounded-lg glass cursor-pointer"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6
                  group-hover:bg-accent/20 transition-colors duration-500">
                  <point.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-serif italic text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>

                {/* Hover line */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
