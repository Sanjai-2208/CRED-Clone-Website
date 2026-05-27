"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="CRED Premium Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </motion.div>

      {/* Warm amber lighting effects */}
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-tl from-amber-500/10 via-transparent to-transparent blur-3xl" />

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
        style={{ opacity }}
      >
        {/* Main Heading - Large Serif Italic */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-[0.95] tracking-tight text-shadow-glow"
        >
          <span className="block">crafted for the</span>
          <span className="block">creditworthy</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 md:mt-12 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          CRED is a members-only club that enables the
          <br className="hidden sm:block" />
          trustworthy to make financial progress
        </motion.p>

        {/* QR Code Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-8 right-8 z-50 hidden lg:block"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="qr-container p-4 rounded-lg flex items-center gap-4 cursor-pointer"
          >
            {/* QR Code SVG */}
            <div className="w-14 h-14 bg-foreground rounded-sm p-1 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full text-background">
                <rect x="10" y="10" width="25" height="25" fill="currentColor" />
                <rect x="65" y="10" width="25" height="25" fill="currentColor" />
                <rect x="10" y="65" width="25" height="25" fill="currentColor" />
                <rect x="15" y="15" width="15" height="15" fill="white" />
                <rect x="70" y="15" width="15" height="15" fill="white" />
                <rect x="15" y="70" width="15" height="15" fill="white" />
                <rect x="20" y="20" width="5" height="5" fill="currentColor" />
                <rect x="75" y="20" width="5" height="5" fill="currentColor" />
                <rect x="20" y="75" width="5" height="5" fill="currentColor" />
                <rect x="40" y="10" width="5" height="5" fill="currentColor" />
                <rect x="50" y="10" width="5" height="5" fill="currentColor" />
                <rect x="40" y="20" width="5" height="5" fill="currentColor" />
                <rect x="45" y="25" width="5" height="5" fill="currentColor" />
                <rect x="55" y="20" width="5" height="5" fill="currentColor" />
                <rect x="40" y="40" width="5" height="5" fill="currentColor" />
                <rect x="50" y="45" width="5" height="5" fill="currentColor" />
                <rect x="65" y="40" width="5" height="5" fill="currentColor" />
                <rect x="75" y="45" width="5" height="5" fill="currentColor" />
                <rect x="85" y="40" width="5" height="5" fill="currentColor" />
                <rect x="65" y="55" width="5" height="5" fill="currentColor" />
                <rect x="80" y="55" width="5" height="5" fill="currentColor" />
                <rect x="65" y="65" width="10" height="10" fill="currentColor" />
                <rect x="80" y="65" width="10" height="10" fill="currentColor" />
                <rect x="65" y="80" width="10" height="10" fill="currentColor" />
                <rect x="80" y="80" width="10" height="10" fill="currentColor" />
                <rect x="10" y="40" width="5" height="5" fill="currentColor" />
                <rect x="20" y="45" width="5" height="5" fill="currentColor" />
                <rect x="10" y="55" width="5" height="5" fill="currentColor" />
                <rect x="30" y="50" width="5" height="5" fill="currentColor" />
                <rect x="40" y="55" width="5" height="5" fill="currentColor" />
                <rect x="50" y="60" width="5" height="5" fill="currentColor" />
                <rect x="40" y="70" width="5" height="5" fill="currentColor" />
                <rect x="55" y="75" width="5" height="5" fill="currentColor" />
                <rect x="40" y="85" width="5" height="5" fill="currentColor" />
                <rect x="50" y="85" width="5" height="5" fill="currentColor" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">download</div>
              <div className="text-lg font-semibold text-foreground">CRED</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-foreground rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
