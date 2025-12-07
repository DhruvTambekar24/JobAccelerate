"use client"

import { FeatureCard } from "./feature-card"
import { Zap, Target, Mail, BarChart3 } from "lucide-react"

export function FeaturesShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Four Superpowers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to land more interviews in one intelligent platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Zap />}
            title="AI Auto Apply"
            description="Our agents scan, filter, and apply to 10-50+ jobs daily on your behalf, 24/7."
            highlight
          />
          <FeatureCard
            icon={<Target />}
            title="Smart Job Matching"
            description="Advanced ML model ranks jobs by relevance and fit probability for your profile."
          />
          <FeatureCard
            icon={<Mail />}
            title="Recruiter Outreach"
            description="Auto-find recruiter emails and send personalized messages at optimal times."
          />
          <FeatureCard
            icon={<BarChart3 />}
            title="Analytics Dashboard"
            description="Track open rates, reply rates, interview conversions, and CV A/B testing results."
          />
        </div>
      </div>
    </section>
  )
}
