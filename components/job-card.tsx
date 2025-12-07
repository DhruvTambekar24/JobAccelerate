"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookmarkPlus, ArrowUpRight } from "lucide-react"

interface JobCardProps {
  title: string
  company: string
  location: string
  salary?: string
  matchScore: number
  tags: string[]
  posted: string
}

export function JobCard({ title, company, location, salary, matchScore, tags, posted }: JobCardProps) {
  return (
    <Card className="p-6 glassmorphic border-border/20 hover:shadow-smooth hover:-translate-y-1 transition-all group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-bold text-lg group-hover:text-primary transition">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {company} • {location}
          </p>
        </div>
        <Button variant="ghost" size="icon" className="flex-shrink-0">
          <BookmarkPlus className="w-5 h-5" />
        </Button>
      </div>

      {salary && <p className="text-sm font-semibold text-accent mb-3">{salary}</p>}

      <div className="flex flex-wrap gap-1 mb-4">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Match Score</p>
          <div className="flex items-center gap-2">
            <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                style={{ width: `${matchScore}%` }}
              />
            </div>
            <span className="text-sm font-bold">{matchScore}%</span>
          </div>
        </div>
        <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
          <a href="#" className="flex items-center gap-1">
            Apply <ArrowUpRight className="w-3 h-3" />
          </a>
        </Button>
      </div>

      <p className="text-xs text-muted-foreground mt-3">{posted}</p>
    </Card>
  )
}
