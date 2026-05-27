"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const footerLinks = {
  company: [
    { name: "About", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ],
  product: [
    { name: "CRED Pay", href: "#" },
    { name: "CRED Coins", href: "#" },
    { name: "Credit Score", href: "#" },
    { name: "Rewards", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security", href: "#" },
    { name: "Grievance", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Community", href: "#" },
  ],
}

const socialLinks = [
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12.017 0C8.396 0 7.989.013 6.756.072c-1.23.06-2.07.27-2.805.577a5.655 5.655 0 00-2.044 1.33A5.66 5.66 0 00.576 4.023C.27 4.758.06 5.598 0 6.828.013 8.061 0 8.468 0 12.089s.013 4.028.072 5.261c.06 1.23.27 2.07.577 2.805a5.655 5.655 0 001.33 2.044 5.66 5.66 0 002.044 1.331c.735.307 1.575.517 2.805.577 1.233.059 1.64.072 5.261.072s4.028-.013 5.261-.072c1.23-.06 2.07-.27 2.805-.577a5.655 5.655 0 002.044-1.33 5.66 5.66 0 001.331-2.044c.307-.735.517-1.575.577-2.805.059-1.233.072-1.64.072-5.261s-.013-4.028-.072-5.261c-.06-1.23-.27-2.07-.577-2.805a5.655 5.655 0 00-1.33-2.044A5.66 5.66 0 0020.023.577C19.288.27 18.448.06 17.218 0 15.985.013 15.578 0 11.957 0h.06zm-.06 2.166h.047c3.574 0 3.995.014 5.404.078 1.303.06 2.01.279 2.48.463.624.243 1.069.533 1.537 1.001.468.468.758.913 1.001 1.537.184.47.404 1.177.463 2.48.064 1.409.078 1.83.078 5.404s-.014 3.995-.078 5.404c-.06 1.303-.279 2.01-.463 2.48a4.16 4.16 0 01-1.001 1.537 4.16 4.16 0 01-1.537 1.001c-.47.184-1.177.404-2.48.463-1.409.064-1.83.078-5.404.078s-3.995-.014-5.404-.078c-1.303-.06-2.01-.279-2.48-.463a4.16 4.16 0 01-1.537-1.001 4.16 4.16 0 01-1.001-1.537c-.184-.47-.404-1.177-.463-2.48-.064-1.409-.078-1.83-.078-5.404s.014-3.995.078-5.404c.06-1.303.279-2.01.463-2.48a4.16 4.16 0 011.001-1.537 4.16 4.16 0 011.537-1.001c.47-.184 1.177-.404 2.48-.463 1.409-.064 1.83-.078 5.404-.078z" clipRule="evenodd" />
        <path d="M12.017 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12.017 16a4 4 0 110-8 4 4 0 010 8z" />
        <circle cx="18.406" cy="5.594" r="1.44" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
      </svg>
    ),
  },
]

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer id="about" className="py-16 md:py-24 border-t border-border/50 relative bg-background">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-2 md:col-span-1"
          >
            <a href="#" className="flex items-center gap-3 mb-6">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
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
              <span className="text-xl font-semibold text-foreground">CRED</span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              a members-only credit card bill payment platform that rewards you for being responsible.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (categoryIndex + 1), ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} CRED. all rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
