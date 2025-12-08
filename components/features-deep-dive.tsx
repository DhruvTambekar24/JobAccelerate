"use client"

import { Card } from "@/components/ui/card"
import CardDemo from "@/components/cards-demo-3";

export function FeaturesDeepDive() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/10">
      <div className="mx-auto max-w-7xl">
        {/* Feature 1: Auto Job Apply */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">Agentic AI Auto-Apply</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Set it and forget it. Our AI agents work 24/7 to find, filter, and apply to jobs matching your criteria.
                No manual work required.
              </p>
              <ul className="space-y-4">
                {[
                  "Applies 10-50+ jobs daily",
                  "Handles form filling & customization",
                  "Tracks submission status",
                  "Automatic retries on failures",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* <Card className="p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-border/20 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🤖</div>
                <p className="text-muted-foreground">Auto-Apply Timeline Visualization</p>
              </div>
            </Card> */}
            <CardDemo />
          </div>
        </div>

        {/* Feature 2: Job Matching */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8 bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 border-border/20 h-96 order-2 lg:order-1 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-muted-foreground">Match Score Ranking System</p>
              </div>
            </Card>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">Intelligent Job Matching</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our ML model ranks every job by match probability, saving you from wasting time on bad fits.
              </p>
              <ul className="space-y-4">
                {[
                  "AI analyzes 100+ job factors",
                  "Role, seniority & salary matching",
                  "Company culture fit analysis",
                  "Growth opportunity scoring",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Feature 3: Recruiter Outreach */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">Recruiter Email Outreach</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Find recruiter emails and send personalized messages at the perfect time to maximize open & reply rates.
              </p>
              <ul className="space-y-4">
                {[
                  "Auto-discovers 1000+ recruiters",
                  "Personalized message templates",
                  "A/B testing for optimization",
                  "Delivery time optimization",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-8 bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10 border-border/20 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📧</div>
                <p className="text-muted-foreground">Email Template & A/B Testing</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Feature 4: Analytics */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Card className="p-8 bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10 border-border/20 h-96 order-2 lg:order-1 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📈</div>
                <p className="text-muted-foreground">Conversion Funnel Analytics</p>
              </div>
            </Card>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">Job Search Analytics</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Get detailed insights into your job search performance with real-time analytics and recommendations.
              </p>
              <ul className="space-y-4">
                {[
                  "Application → Interview conversion",
                  "Email open & reply rates",
                  "CV performance scoring",
                  "A/B testing insights",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
