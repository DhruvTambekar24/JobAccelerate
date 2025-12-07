"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useState } from "react"

const plans = [
  {
    name: "Starter",
    description: "For exploring job opportunities",
    price: "Free",
    cta: "Get Started",
    features: [
      "Up to 5 AI auto-applications daily",
      "Manual job search tools",
      "Basic resume parsing",
      "Community access",
    ],
    notIncluded: ["Recruiter email outreach", "Advanced analytics", "A/B testing", "Priority support"],
  },
  {
    name: "Pro",
    description: "Most popular — For serious job seekers",
    price: "$29",
    period: "/month",
    cta: "Start Free Trial",
    popular: true,
    features: [
      "50+ AI auto-applications daily",
      "Smart job matching (ML-powered)",
      "Recruiter email outreach",
      "Advanced analytics dashboard",
      "CV A/B testing",
      "Email templates & personalization",
      "Application tracking",
      "Priority support",
    ],
    notIncluded: ["Multi-CV management", "White-label options"],
  },
  {
    name: "Ultimate",
    description: "For maximum results",
    price: "$79",
    period: "/month",
    cta: "Start Free Trial",
    features: [
      "Unlimited AI auto-applications",
      "Multi-profile management",
      "Multi-CV A/B testing",
      "Advanced recruiter outreach",
      "Real-time analytics & insights",
      "API access",
      "Custom workflows",
      "Dedicated account manager",
      "White-label options",
    ],
    notIncluded: [],
  },
]

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground mb-8">Choose the perfect plan to supercharge your job search</p>

          {/* Toggle Annual/Monthly */}
          <div className="inline-flex items-center gap-4 bg-card/50 p-1 rounded-lg border border-border/20">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md transition ${!isAnnual ? "bg-primary text-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md transition ${isAnnual ? "bg-primary text-foreground" : "text-muted-foreground"}`}
            >
              Annual
              <span className="ml-2 text-xs bg-accent text-accent-foreground px-2 py-1 rounded">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 flex flex-col ${
                plan.popular
                  ? "border-primary/50 bg-gradient-to-br from-primary/10 via-card to-secondary/5"
                  : "glassmorphic border-border/20"
              } ${plan.popular ? "md:scale-105 md:shadow-smooth" : ""}`}
            >
              {plan.popular && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full w-fit mb-4">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-xs font-semibold text-primary">Most Popular</span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>

              <Button className="w-full mb-8" size="lg" variant={plan.popular ? "default" : "outline"}>
                {plan.cta}
              </Button>

              <div className="space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}

                {plan.notIncluded.length > 0 && (
                  <div className="border-t border-border/20 pt-4 mt-4">
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex gap-3 text-muted-foreground opacity-50">
                        <span className="text-muted-foreground text-sm">✗</span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
