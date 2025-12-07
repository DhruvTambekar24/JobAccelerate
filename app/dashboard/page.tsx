"use client"

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardStats } from "@/components/dashboard-stats"
import { DashboardActivity } from "@/components/dashboard-activity"
import { AnalyticsChart } from "@/components/analytics-chart"
import { JobCard } from "@/components/job-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <DashboardHeader />

      <main className="ml-20 md:ml-64 pt-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Stats Grid */}
          <DashboardStats />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column: Analytics & Jobs */}
            <div className="lg:col-span-2 space-y-6">
              {/* Chart */}
              <AnalyticsChart />

              {/* Jobs Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Recommended Jobs</h2>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/dashboard/jobs">View All</a>
                  </Button>
                </div>

                <div className="space-y-4">
                  <JobCard
                    title="Senior Product Manager"
                    company="Stripe"
                    location="San Francisco, CA"
                    salary="$180K - $250K"
                    matchScore={94}
                    tags={["Remote", "Management", "B2B SaaS"]}
                    posted="2 hours ago"
                  />
                  <JobCard
                    title="Full Stack Engineer"
                    company="Vercel"
                    location="Remote"
                    salary="$150K - $200K"
                    matchScore={87}
                    tags={["Remote", "React", "Node.js"]}
                    posted="4 hours ago"
                  />
                  <JobCard
                    title="Design System Lead"
                    company="Figma"
                    location="San Francisco, CA"
                    salary="$160K - $220K"
                    matchScore={79}
                    tags={["Design", "Leadership", "UI/UX"]}
                    posted="6 hours ago"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Activity & Status */}
            <div className="space-y-6">
              <DashboardActivity />

              {/* Quick Stats */}
              <Card className="p-6 glassmorphic border-border/20">
                <h2 className="font-bold mb-4">Current Plan</h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Plan</p>
                    <Badge className="bg-primary/20 text-primary">Pro Plan</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Daily Applications Left</p>
                    <p className="text-2xl font-bold">18 / 50</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Emails Remaining</p>
                    <p className="text-2xl font-bold">163 / 500</p>
                  </div>
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90" asChild>
                    <a href="/dashboard/billing">Upgrade Plan</a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
