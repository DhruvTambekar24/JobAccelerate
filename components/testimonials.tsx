"use client"

import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Product Manager",
    content: "Landed 4 interviews in 2 weeks. The AI auto-apply feature alone saved me 10+ hours.",
    metric: "4 interviews in 2 weeks",
    avatar: "🧑‍💼",
  },
  {
    name: "Marcus Johnson",
    role: "Full Stack Engineer",
    content: "Best investment I made. Job search went from overwhelming to automated. Highly recommend.",
    metric: "3 job offers in 1 month",
    avatar: "👨‍💻",
  },
  {
    name: "Aisha Patel",
    role: "UX Designer",
    content: "The recruiter outreach feature is game-changing. Got contacted by top companies within days.",
    metric: "8 recruiter contacts",
    avatar: "👩‍🎨",
  },
  {
    name: "James Williams",
    role: "Data Scientist",
    content: "The analytics dashboard helped me understand exactly what's working in my job search.",
    metric: "12% interview rate",
    avatar: "🧬",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/10 bg-card/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Loved by Job Seekers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who landed their dream job with JobAccelerateAI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 glassmorphic border-border/20">
              <div className="flex gap-4 mb-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{testimonial.content}</p>
              <p className="text-sm font-semibold text-accent">{testimonial.metric}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
