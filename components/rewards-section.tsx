"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Gift, ShoppingBag, Plane, Utensils, Ticket, Headphones } from "lucide-react"
import Image from "next/image"

const rewardCategories = [
  { icon: Gift, name: "lifestyle", count: "200+" },
  { icon: ShoppingBag, name: "shopping", count: "150+" },
  { icon: Plane, name: "travel", count: "50+" },
  { icon: Utensils, name: "food & dining", count: "300+" },
  { icon: Ticket, name: "entertainment", count: "100+" },
  { icon: Headphones, name: "electronics", count: "80+" },
]

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, isInView])

  return <span ref={ref}>{count}{suffix}</span>
}

export function RewardsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section 
      id="rewards" 
      ref={containerRef}
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: bgY }}
      >
        <Image
          src="/images/rewards-bg.jpg"
          alt="Rewards Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </motion.div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05] tracking-tight"
            >
              redeem your coins for{" "}
              <span className="text-accent">exclusive rewards</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed font-serif italic"
            >
              access a curated collection of premium brands and experiences.
              from luxury products to exclusive experiences, your CRED coins
              unlock a world of rewards.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 grid grid-cols-3 gap-8"
            >
              <div>
                <div className="text-3xl md:text-4xl font-serif italic text-foreground">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground mt-1">brand partners</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif italic text-foreground">
                  <AnimatedCounter end={50} suffix="M+" />
                </div>
                <div className="text-sm text-muted-foreground mt-1">rewards claimed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif italic text-foreground">
                  <AnimatedCounter end={10} suffix="x" />
                </div>
                <div className="text-sm text-muted-foreground mt-1">coin multiplier</div>
              </div>
            </motion.div>

            {/* QR Code */}
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
                    <rect x="65" y="65" width="10" height="10" fill="currentColor" />
                    <rect x="80" y="65" width="10" height="10" fill="currentColor" />
                    <rect x="65" y="80" width="10" height="10" fill="currentColor" />
                    <rect x="80" y="80" width="10" height="10" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">download</div>
                  <div className="text-lg font-semibold text-foreground">CRED</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right - Reward cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {rewardCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-5 rounded-lg glass cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4
                    group-hover:bg-accent/20 transition-colors duration-500">
                    <category.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-serif italic text-foreground text-sm mb-1">{category.name}</h4>
                  <p className="text-xs text-muted-foreground">{category.count} offers</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
