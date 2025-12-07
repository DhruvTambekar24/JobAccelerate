"use client"

import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    title: "Upload Your Resume",
    description:
      "AI parses your CV, extracts skills, experience, and automatically builds your job profile with ATS optimization insights.",
    icon: "📄",
  },
  {
    number: "02",
    title: "AI Finds & Filters Jobs Daily",
    description:
      "Our autonomous agents scan job boards (LinkedIn, Indeed, Wellfound, etc.), filter relevant opportunities based on your preferences and salary expectations.",
    icon: "🔍",
  },
  {
    number: "03",
    title: "Auto-Apply & Email Recruiters",
    description:
      "AI automatically completes applications and finds recruiter emails to send personalized outreach messages on your behalf, 24/7.",
    icon: "✉️",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/10 bg-card/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to automate your entire job search
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 -right-4 w-8 h-1 bg-gradient-to-r from-primary to-transparent" />
              )}

              <div className="glassmorphic p-8 rounded-xl border-border/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold text-foreground">
                    {step.number}
                  </div>
                  <div className="text-3xl">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="/signup">Get Started Now</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
