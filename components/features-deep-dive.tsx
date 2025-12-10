"use client"
import { Card } from "@/components/ui/card"
import CardDemo from "@/components/cards-demo-3";
import { BentoGrid } from "@/components/ui/bento-grid"
import {BentoCard}  from "@/components/ui/bento-grid"
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, FileText } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import AnimatedBeamMultipleOutputDemo from "@/components/AnimatedBeamMultipleOutputDemo";
import AnimatedListDemo from "@/components/AnimatedListDemo";
import { Marquee } from "@/components/magicui/marquee";
import { File, Search, Settings } from "lucide-react"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import {OrbitingCirclesDemo} from "@/components/ui/OrbitingCirclesDemo"
import { Globe } from "@/components/ui/globe"
export function FeaturesDeepDive() {
  const radius = 100;
  const files = [
  {
    name: "Senior Developer – Google",
    body: "Matched based on your resume: Python, React, System Design, and Cloud Architecture.",
  },
  {
    name: "Data Analyst – Microsoft",
    body: "Your analytics and SQL skills align strongly with this role’s core requirements.",
  },
  {
    name: "Backend Engineer – Stripe",
    body: "High match score: Node.js, API development, microservices, and distributed systems.",
  },
  {
    name: "AI Intern – OpenAI",
    body: "Recommended due to ML experience, embeddings knowledge, and NLP projects.",
  },
  {
    name: "Product Engineer – Meta",
    body: "Your resume matches key product-building, frontend, and user-focused experience.",
  },
];


// -------------------------
// UPDATED FEATURES FOR JOBACCELERATEAI
// -------------------------

const features = [
  {
    Icon: FileText,
    name: "Smart Job Feed",
    description: "AI-curated, real-time job listings matched to your skills and preferences.",
    href: "#",
    cta: "Explore jobs",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },

  {
    Icon: BellIcon,
    name: "Real-time Notifications",
    description: "Instant alerts for new matches, auto-applies, recruiter replies, and interview updates.",
    href: "#",
    cta: "Enable alerts",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo
        className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out 
        [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90"
      />
    ),
  },

  {
    Icon: Share2Icon,
    name: "Resume & Platform Integrations",
    description: "Upload resumes or connect Google Drive & LinkedIn for seamless AI-driven optimization.",
    href: "#",
    cta: "Connect now",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo
        className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out 
        [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"
      />
    ),
  },

  {
    Icon: CalendarIcon,
    name: "Application Timeline",
    description: "Visualize all applications, replies, and interviews in a clean, organized job calendar.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "View timeline",
    background: (
      <Calendar
        mode="single"
        selected={new Date()}
        className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out 
        [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
];


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
            {/* <Card className="p-8 bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 border-border/20 h-96 order-2 lg:order-1 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-muted-foreground">Match Score Ranking System</p>
              </div>
            </Card> */}
            <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
            
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
            {/* <Card className="p-8 bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10 border-border/20 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📧</div>
                <p className="text-muted-foreground">Email Template & A/B Testing</p>
              </div>
            </Card> */}
  {/* <div className="relative h-[500px] w-full overflow-hidden bg-neutral-900 rounded-xl pl-40 flex items-center justify-center">
  <OrbitingCircles>
    <File />
    <Settings />
   <File />
  </OrbitingCircles>

  <OrbitingCircles radius={100} reverse>
    <File />
    <Settings />
    <File />
    <Search />
  </OrbitingCircles>
</div> */}


  

<div className="">
    <OrbitingCirclesDemo />
</div>

          </div>
        </div>

        {/* Feature 4: Analytics */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="p-8 bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10 border-border/20 h-96 order-2 lg:order-1 flex items-center justify-center relative rounded-">
             <Globe />
            </div>
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
