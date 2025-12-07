"use client"

import { NavHeader } from "@/components/nav-header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FeatureSection } from "@/components/feature-section"
import { CheckCircle2, Zap, Brain, Mail, BarChart3, Settings, Shield, Smartphone } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border/10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Powerful Features to
              <br />
              <span className="gradient-text">Automate Your Job Search</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to find, apply, and land your dream job — powered by cutting-edge AI
            </p>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border/10">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Core Capabilities</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "AI Auto-Apply Engine",
                  description: "Autonomous job applications 24/7",
                  features: [
                    "50-500+ daily applications",
                    "Multi-job-board support",
                    "Smart form filling",
                    "Error recovery & retries",
                  ],
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Job Matching Algorithm",
                  description: "ML-powered job relevance scoring",
                  features: [
                    "100+ factor analysis",
                    "Role & seniority matching",
                    "Salary alignment",
                    "Growth opportunity scoring",
                  ],
                },
                {
                  icon: <Mail className="w-8 h-8" />,
                  title: "Recruiter Outreach",
                  description: "Automated email discovery & outreach",
                  features: [
                    "Email finder (1000+ contacts)",
                    "Personalized templates",
                    "A/B testing",
                    "Delivery optimization",
                  ],
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: "Analytics Dashboard",
                  description: "Real-time job search insights",
                  features: [
                    "Application → Interview funnel",
                    "Open & reply rates",
                    "CV performance metrics",
                    "Trend analysis",
                  ],
                },
              ].map((feature, i) => (
                <Card key={i} className="p-6 glassmorphic border-border/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-primary">{feature.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {feature.features.map((f, j) => (
                      <li key={j} className="flex gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Dive Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 space-y-20 border-b border-border/10">
          <div className="mx-auto max-w-7xl">
            {/* Feature 1 */}
            <FeatureSection
              icon={<Zap />}
              title="Autonomous Job Search Engine"
              description="24/7 AI agents find, filter, and apply to jobs"
              imagePosition="right"
              content={
                <div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Daily schedule automation</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Multi-source job scraping (LinkedIn, Indeed, Wellfound, etc.)</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Intelligent match scoring</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Automatic form submission</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Application tracking & status monitoring</span>
                    </li>
                  </ul>
                </div>
              }
            />
          </div>

          <div className="mx-auto max-w-7xl">
            {/* Feature 2 */}
            <FeatureSection
              icon={<Brain />}
              title="Resume Intelligence"
              description="AI-powered CV analysis and optimization"
              imagePosition="left"
              content={
                <div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Advanced resume parsing</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Skill extraction & mapping</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>ATS optimization scoring</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Keyword recommendations</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Multi-CV A/B testing</span>
                    </li>
                  </ul>
                </div>
              }
            />
          </div>

          <div className="mx-auto max-w-7xl">
            {/* Feature 3 */}
            <FeatureSection
              icon={<Mail />}
              title="Smart Recruiter Outreach"
              description="Find and contact recruiters at scale"
              imagePosition="right"
              content={
                <div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Email discovery API integration</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Recruiter profile enrichment</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Personalized message templates</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>A/B testing for messaging</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Open rate & reply tracking</span>
                    </li>
                  </ul>
                </div>
              }
            />
          </div>

          <div className="mx-auto max-w-7xl">
            {/* Feature 4 */}
            <FeatureSection
              icon={<BarChart3 />}
              title="Advanced Analytics"
              description="Data-driven insights into your job search"
              imagePosition="left"
              content={
                <div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Application conversion funnel</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Real-time performance metrics</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>CV performance comparison</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Interview rate tracking</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Custom reporting & exports</span>
                    </li>
                  </ul>
                </div>
              }
            />
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border/10 bg-card/20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">More Powerful Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Settings className="w-8 h-8" />,
                  title: "Custom Workflows",
                  description: "Build your perfect automation",
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Privacy & Security",
                  description: "Enterprise-grade protection",
                },
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: "Mobile App",
                  description: "Apply on the go",
                },
                {
                  icon: <Mail className="w-8 h-8" />,
                  title: "Bot Integration",
                  description: "WhatsApp/Telegram support",
                },
              ].map((feature, i) => (
                <Card key={i} className="p-6 glassmorphic border-border/20 text-center">
                  <div className="text-primary mb-3 flex justify-center">{feature.icon}</div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Experience the Power?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your free trial today and automate your entire job search
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
