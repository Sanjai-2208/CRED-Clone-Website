"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-background">
      {/* Animated background glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/30 rounded-full blur-3xl"
      />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif italic text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.05] tracking-tight"
        >
          ready to get rewarded?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed font-serif italic"
        >
          download CRED now and start earning rewards on your credit card payments.
          it&apos;s free, secure, and designed for the creditworthy.
        </motion.p>

        {/* Download buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* App Store Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 px-6 py-4 bg-foreground text-background rounded-lg transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-70">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </motion.a>

          {/* Play Store Button */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 px-6 py-4 glass text-foreground rounded-lg transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-70">Get it on</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </motion.a>
        </motion.div>

        {/* QR Code for desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 hidden md:flex justify-center"
        >
          <div className="qr-container p-6 rounded-lg inline-flex items-center gap-6">
            <div className="w-20 h-20 bg-foreground rounded-sm p-1.5 flex items-center justify-center">
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
            <div className="text-left">
              <div className="text-sm text-muted-foreground">scan to download</div>
              <div className="text-2xl font-serif italic text-foreground">CRED</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
