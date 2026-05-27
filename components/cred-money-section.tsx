"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

const categories = [
  { id: "bank", name: "BANK BALANCE", value: "₹2,45,890" },
  { id: "mf", name: "MF", value: "₹5,67,432" },
  { id: "stocks", name: "STOCKS", value: "₹3,21,098" },
  { id: "nps", name: "NPS", value: "₹1,89,543" },
  { id: "fd", name: "FD", value: "₹4,56,789" },
  { id: "gold", name: "GOLD", value: "₹2,34,567" },
]

const floatingParticles = [
  { xOffset: -20, duration: 10.5 },
  { xOffset: 18, duration: 12.2 },
  { xOffset: -35, duration: 11.1 },
  { xOffset: -12, duration: 13.4 },
  { xOffset: 28, duration: 10.9 },
  { xOffset: -26, duration: 12.8 },
]

export function CredMoneySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("bank")
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Gradient sky background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#8B1E3F] via-[#3D5A80] to-[#1E3A5F]" />
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            backgroundSize: "100% 100%",
          }}
        />
      </div>

      {/* Temple image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <Image
          src="/images/money-temple.jpg"
          alt="CRED Money Temple"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24"
        style={{ opacity }}
      >
        {/* Header text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <motion.h2
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold tracking-tight leading-[0.95] uppercase"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ALL THAT YOU OWN.
          </motion.h2>
          <motion.h2
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold tracking-tight leading-[0.95] uppercase mt-2"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AT A GLANCE.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            track all your assets, investments, and wealth in one unified dashboard.
            CRED money brings clarity to your financial life.
          </motion.p>
        </motion.div>

        {/* Floating wealth total card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-2xl p-8 md:p-10 mb-12 text-center backdrop-blur-xl bg-white/10 border border-white/20"
        >
          <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Total Net Worth</p>
          <motion.p
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            ₹20,15,319
          </motion.p>
          <p className="text-accent mt-3 flex items-center justify-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent/20">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14l5-5 5 5H7z" />
              </svg>
            </span>
            +12.5% this month
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="w-full max-w-5xl mx-auto"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {categories.map((cat, index) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 md:px-6 py-3 text-xs md:text-sm tracking-widest font-medium transition-all duration-300 rounded-sm ${
                  activeCategory === cat.id
                    ? "bg-white text-background"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>

          {/* Active category value */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              {categories.find(c => c.id === activeCategory)?.value}
            </p>
          </motion.div>
        </motion.div>

        {/* Floating icons animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {floatingParticles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm"
              initial={{
                x: `${particle.xOffset}%`,
                y: "100%",
                opacity: 0,
              }}
              animate={{
                y: "-100%",
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear",
              }}
              style={{
                left: `${10 + i * 15}%`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* QR Code download */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-4 qr-container p-4 rounded-lg backdrop-blur-xl bg-white/10 border border-white/20"
      >
        <div className="w-14 h-14 bg-white rounded-sm flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-12 h-12 text-background">
            <rect x="3" y="3" width="7" height="7" fill="currentColor" />
            <rect x="14" y="3" width="7" height="7" fill="currentColor" />
            <rect x="3" y="14" width="7" height="7" fill="currentColor" />
            <rect x="14" y="14" width="3" height="3" fill="currentColor" />
            <rect x="18" y="18" width="3" height="3" fill="currentColor" />
            <rect x="14" y="18" width="3" height="3" fill="currentColor" />
            <rect x="18" y="14" width="3" height="3" fill="currentColor" />
          </svg>
        </div>
        <div>
          <div className="text-sm text-white/60">download</div>
          <div className="text-lg font-semibold text-white">CRED</div>
        </div>
      </motion.div>
    </section>
  )
}
