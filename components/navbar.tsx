"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const menuSections = [
  {
    name: "WHAT'S NEW",
    items: [
      { title: "CRED IndusInd Bank Card", subtitle: "Rupay Credit Card", tag: "NEW LAUNCH", image: "/images/credit-cards.jpg" },
      { title: "CRED Money", subtitle: "Track all assets", image: "/images/money-temple.jpg" },
    ]
  },
  {
    name: "PAYMENTS",
    items: [
      { title: "Credit Card Bills", subtitle: "Pay all cards", image: "/images/phone-mockup.jpg" },
      { title: "CRED Pay UPI", subtitle: "Scan & Pay", image: "/images/upi-feature.jpg" },
      { title: "Rent Payment", subtitle: "Pay with card", image: "/images/cashback.jpg" },
    ]
  },
  {
    name: "UPGRADES",
    items: [
      { title: "CRED Mint", subtitle: "Premium membership", image: "/images/coins-3d.jpg" },
      { title: "Credit Score", subtitle: "Track for free", image: "/images/credit-score.jpg" },
    ]
  },
  {
    name: "COMPANY",
    items: [
      { title: "About Us", subtitle: "Our story" },
      { title: "Careers", subtitle: "Join the team" },
      { title: "Blog", subtitle: "Latest updates" },
    ]
  },
  {
    name: "INSIDER PERKS",
    items: [
      { title: "Rewards Store", subtitle: "Redeem coins", image: "/images/rewards-bg.jpg" },
      { title: "Jackpots", subtitle: "Win big", image: "/images/coins-3d.jpg" },
    ]
  },
]

const navLinks = [
  { name: "CRED Pay", href: "#features" },
  { name: "Money", href: "#money" },
  { name: "Rewards", href: "#rewards" },
  { name: "About", href: "#about" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("WHAT'S NEW")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const activeMenuSection = menuSections.find(s => s.name === activeSection)

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* CRED Shield Logo */}
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
                <path 
                  d="M20 4L6 10V18C6 26.8 12.4 34.8 20 36C27.6 34.8 34 26.8 34 18V10L20 4Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none"
                />
                <path 
                  d="M15 18L18 21L25 14" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl font-semibold tracking-tight text-foreground">CRED</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block px-4 py-2 text-xs text-muted-foreground border border-border/50 rounded-sm text-right">
                CRED INDUSIND BANK
                <br />
                <span className="text-foreground">RUPAY CREDIT CARD</span>
              </div>
              <motion.button 
                className="w-12 h-12 flex items-center justify-center border border-border/50 text-foreground hover:bg-secondary/50 rounded-sm transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mega Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background"
          >
            <div className="flex h-full pt-24">
              {/* Left sidebar - Menu sections */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full md:w-1/3 lg:w-1/4 border-r border-border/30 p-8 overflow-y-auto"
              >
                {/* Logo */}
                <div className="mb-12">
                  <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground mb-4">
                    <path 
                      d="M20 4L6 10V18C6 26.8 12.4 34.8 20 36C27.6 34.8 34 26.8 34 18V10L20 4Z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none"
                    />
                    <path 
                      d="M15 18L18 21L25 14" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-2xl font-semibold tracking-tight text-foreground">CRED</span>
                </div>

                {/* Menu sections */}
                <div className="space-y-2">
                  {menuSections.map((section, index) => (
                    <motion.button
                      key={section.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      onClick={() => setActiveSection(section.name)}
                      className={`block w-full text-left py-4 border-b border-border/20 text-lg tracking-widest transition-all duration-300 ${
                        activeSection === section.name 
                          ? "text-foreground font-medium" 
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {section.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Right side - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 p-8 overflow-y-auto hidden md:block"
              >
                {/* Featured item */}
                {activeMenuSection?.items[0] && (
                  <div className="mb-8">
                    {activeMenuSection.items[0].tag && (
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs tracking-widest mb-4 rounded-sm">
                        {activeMenuSection.items[0].tag}
                      </span>
                    )}
                    <h3 className="text-xl md:text-2xl text-muted-foreground tracking-wider mb-2">
                      {activeMenuSection.items[0].title}
                    </h3>
                    <p className="text-foreground text-lg">
                      {activeMenuSection.items[0].subtitle}
                    </p>
                    
                    {activeMenuSection.items[0].image && (
                      <motion.div 
                        className="mt-6 relative h-48 md:h-64 rounded-xl overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={activeMenuSection.items[0].image}
                          alt={activeMenuSection.items[0].title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Grid of other items */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {activeMenuSection?.items.slice(1).map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group cursor-pointer"
                    >
                      {item.image && (
                        <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        </div>
                      )}
                      <h4 className="text-foreground text-sm font-medium">{item.title}</h4>
                      <p className="text-muted-foreground text-xs">{item.subtitle}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center border border-border/50 text-foreground hover:bg-secondary/50 rounded-sm transition-colors"
              >
                <X size={24} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
