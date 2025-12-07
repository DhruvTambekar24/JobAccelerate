"use client"

import { NavHeader } from "@/components/nav-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesShowcase } from "@/components/features-showcase"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturesDeepDive } from "@/components/features-deep-dive"
import { Testimonials } from "@/components/testimonials"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader />

      <main>
        {/* Hero */}
        <HeroSection />

        {/* Features Showcase */}
        <FeaturesShowcase />

        {/* How It Works */}
        <HowItWorks />

        {/* Features Deep Dive */}
        <FeaturesDeepDive />

        {/* Testimonials */}
        <Testimonials />

        {/* Pricing */}
        <PricingSection />

        {/* FAQ */}
        <FAQSection />

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/10 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Land More Interviews?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of professionals using AI to automate their job search
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8" asChild>
              <a href="/signup">Start Your Free Trial Today</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
