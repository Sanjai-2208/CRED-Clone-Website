import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CreditCardsSection } from "@/components/credit-cards-section"
import { TrustSection } from "@/components/trust-section"
import { FeaturesSection } from "@/components/features-section"
import { CredMoneySection } from "@/components/cred-money-section"
import { RewardsSection } from "@/components/rewards-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SecuritySection } from "@/components/security-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CreditCardsSection />
      <TrustSection />
      <FeaturesSection />
      <CredMoneySection />
      <RewardsSection />
      <SecuritySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
