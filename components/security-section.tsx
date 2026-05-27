"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Lock, Eye, Server } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "256-bit encryption",
    description: "industry-standard encryption protects your data at all times.",
  },
  {
    icon: Lock,
    title: "secure payments",
    description: "all transactions are processed through secure, encrypted channels.",
  },
  {
    icon: Eye,
    title: "privacy first",
    description: "your data is never shared with third parties without consent.",
  },
  {
    icon: Server,
    title: "data centers",
    description: "hosted on secure, compliant cloud infrastructure.",
  },
]

export function SecuritySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-background">
      {/* Animated shield background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Shield className="w-[500px] h-[500px] text-foreground" strokeWidth={0.5} />
        </motion.div>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border border-accent/20 rounded-full"
                  style={{
                    scale: 0.6 + i * 0.2,
                  }}
                  animate={{
                    scale: [0.6 + i * 0.2, 0.65 + i * 0.2, 0.6 + i * 0.2],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
              
              {/* Center shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-32 h-32 md:w-40 md:h-40 glass rounded-full flex items-center justify-center"
                >
                  <Shield className="w-16 h-16 md:w-20 md:h-20 text-accent" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05] tracking-tight"
            >
              your security,
              <br />
              our priority
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed font-serif italic"
            >
              we use bank-level security measures to ensure your data
              and transactions are always protected.
            </motion.p>

            {/* Security features grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3
                    group-hover:bg-accent/20 transition-colors duration-500">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif italic text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
