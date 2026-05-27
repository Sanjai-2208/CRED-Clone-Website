"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function CreditCardsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])

  return (
    <section 
      id="credit-cards" 
      ref={containerRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-background"
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight"
            >
              do more with
              <br />
              your credit cards
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg font-serif italic"
            >
              manage your credit cards better and improve your credit score:
              receive payment reminders, uncover hidden fees, get spending
              insights, and discover ways to maximize card benefits.
            </motion.p>

            {/* QR Code Download */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="qr-container p-4 rounded-lg inline-flex items-center gap-4 cursor-pointer"
              >
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
          </div>

          {/* Right - Credit Cards Image */}
          <motion.div 
            className="order-1 lg:order-2 relative"
            style={{ y: imageY }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square"
            >
              <Image
                src="/images/credit-cards.jpg"
                alt="Premium Credit Cards"
                fill
                className="object-contain"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent blur-3xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
