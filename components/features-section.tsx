"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { 
  CreditCard, 
  Gift, 
  BarChart3, 
  Smartphone, 
  Coins, 
  Percent,
  ArrowRight
} from "lucide-react"

const features = [
  {
    icon: CreditCard,
    title: "credit card bills",
    description: "pay all your credit card bills in one place with automated reminders, due date tracking, and instant payment confirmation.",
    image: "/images/credit-cards.jpg",
    gradient: "from-emerald-500/20 to-teal-500/20",
    stats: "9M+ bills paid",
  },
  {
    icon: Gift,
    title: "exclusive rewards",
    description: "earn CRED coins on every payment and redeem them for exclusive brand rewards, experiences, and deals.",
    image: "/images/rewards-bg.jpg",
    gradient: "from-amber-500/20 to-orange-500/20",
    stats: "500+ brands",
  },
  {
    icon: BarChart3,
    title: "credit score",
    description: "track your credit score for free with detailed analysis, personalized insights, and tips to improve it over time.",
    image: "/images/credit-score.jpg",
    gradient: "from-cyan-500/20 to-blue-500/20",
    stats: "free forever",
  },
  {
    icon: Smartphone,
    title: "CRED pay UPI",
    description: "pay anyone using UPI and earn rewards on every transaction. scan any QR code and get cashback instantly.",
    image: "/images/upi-feature.jpg",
    gradient: "from-purple-500/20 to-pink-500/20",
    stats: "10M+ transactions",
  },
  {
    icon: Coins,
    title: "CRED coins",
    description: "collect coins with every payment, multiply them with jackpots, games, and win exclusive prizes daily.",
    image: "/images/coins-3d.jpg",
    gradient: "from-yellow-500/20 to-amber-500/20",
    stats: "100M+ coins won",
  },
  {
    icon: Percent,
    title: "cashback offers",
    description: "get exclusive cashback on bills, shopping, travel, dining, and entertainment from top brands.",
    image: "/images/cashback.jpg",
    gradient: "from-green-500/20 to-emerald-500/20",
    stats: "up to 20% back",
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="features" className="py-24 md:py-32 lg:py-40 relative bg-background overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-accent uppercase tracking-widest">Features</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.05] tracking-tight"
          >
            everything you need,
            <br />
            <span className="text-accent">in one app</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            from bill payments to rewards, credit scores to UPI payments -
            manage your entire financial life with CRED.
          </motion.p>
        </div>

        {/* Features grid with images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full rounded-2xl overflow-hidden cursor-pointer bg-secondary/30 border border-border/30"
              >
                {/* Background image */}
                <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} to-background/90`} />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-accent/10 backdrop-blur-sm flex items-center justify-center mb-5 border border-accent/20"
                    animate={hoveredIndex === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-7 h-7 text-accent" />
                  </motion.div>

                  {/* Stats badge */}
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs text-accent mb-4 w-fit">
                    {feature.stats}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-serif italic text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>

                  {/* Learn more link */}
                  <motion.div 
                    className="flex items-center gap-2 mt-6 text-accent text-sm font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 100%, rgba(52, 211, 153, 0.15), transparent 60%)`,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Video showcase */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-32"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-secondary/30 border border-border/30">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="/images/phone-mockup.jpg"
            >
              <source src="https://www.cred.club/assets/videos/home/cred-hero.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center cursor-pointer shadow-2xl shadow-accent/30"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10 text-background ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>
            
            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="text-foreground font-serif italic text-xl md:text-2xl">experience the CRED app</p>
                <p className="text-muted-foreground text-sm mt-1">watch the full demo</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
