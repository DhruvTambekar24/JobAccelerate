"use client"

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { JobCard } from "@/components/job-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Filter, Search } from "lucide-react"
import { useState } from "react"

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const jobs = [
    {
      title: "Senior Product Manager",
      company: "Stripe",
      location: "San Francisco, CA",
      salary: "$180K - $250K",
      matchScore: 94,
      tags: ["Remote", "Management", "B2B SaaS"],
      posted: "2 hours ago",
    },
    {
      title: "Full Stack Engineer",
      company: "Vercel",
      location: "Remote",
      salary: "$150K - $200K",
      matchScore: 87,
      tags: ["Remote", "React", "Node.js"],
      posted: "4 hours ago",
    },
    {
      title: "Design System Lead",
      company: "Figma",
      location: "San Francisco, CA",
      salary: "$160K - $220K",
      matchScore: 79,
      tags: ["Design", "Leadership", "UI/UX"],
      posted: "6 hours ago",
    },
    {
      title: "Data Scientist",
      company: "Airbnb",
      location: "San Francisco, CA",
      salary: "$170K - $230K",
      matchScore: 85,
      tags: ["ML", "Python", "Analytics"],
      posted: "8 hours ago",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <DashboardHeader />

      <main className="ml-20 md:ml-64 pt-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Job Matches</h1>
            <span className="text-muted-foreground text-sm">{jobs.length} jobs found</span>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="border-border/30 bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Jobs Grid */}
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <JobCard key={i} {...job} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
