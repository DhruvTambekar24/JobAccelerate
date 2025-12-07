import { Button } from "@/components/ui/button"
import Link from "next/link"
import FluidGlass from './FluidGlass'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/20 backdrop-blur">
          <span className="w-2 h-2 bg-accent rounded-full" />
          <span className="text-xs sm:text-sm text-muted-foreground">Powered by AI Agents</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Automate Your Job Search.
          <br />
          <span className="gradient-text">Get 3x More Interviews.</span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Upload your resume → Choose your role → Press Start. AI agents auto-apply to jobs daily, email recruiters, and
          optimize your CV for maximum results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-foreground font-semibold" asChild>
            <Link href="/signup">Start Free Trial</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-border/30 hover:bg-card/50 bg-transparent" asChild>
            <Link href="#how-it-works">See How It Works</Link>
          </Button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="relative">
        </div>
      </div>
    </section>
  )
}