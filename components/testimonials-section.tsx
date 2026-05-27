"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    content: "CRED has completely changed how I manage my credit cards. The rewards are incredible and the interface is so elegant.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Marketing Manager",
    content: "I never miss a payment anymore. The reminders and the cashback make it feel like I am being rewarded for being responsible.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Tech Lead",
    content: "The credit score tracking feature alone makes CRED worth it. Plus the exclusive rewards are unmatched anywhere else.",
    rating: 5,
  },
]

const appRatings = [
  { store: "App Store", rating: "4.9", reviews: "2.1M+" },
  { store: "Play Store", rating: "4.8", reviews: "5.2M+" },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-background">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-background to-background" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.05] tracking-tight"
          >
            loved by millions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed font-serif italic"
          >
            join 9 million+ members who trust CRED for their financial journey.
          </motion.p>
        </div>

        {/* App Store Ratings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {appRatings.map((app) => (
            <div key={app.store} className="glass p-6 rounded-lg text-center min-w-[180px]">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-3xl font-serif italic text-foreground">{app.rating}</div>
              <div className="text-sm text-muted-foreground mt-1">{app.store}</div>
              <div className="text-xs text-muted-foreground">{app.reviews} reviews</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full p-6 md:p-8 rounded-lg glass"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-6 font-serif italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
