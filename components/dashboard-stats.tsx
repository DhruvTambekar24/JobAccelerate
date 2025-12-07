"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Send, Mail, CheckCircle, Zap, Target } from "lucide-react"

const stats = [
  {
    label: "Jobs Found Today",
    value: "142",
    icon: Target,
    change: "+24%",
    color: "from-primary/20 to-primary/5",
  },
  {
    label: "Applications Submitted",
    value: "389",
    icon: Send,
    change: "+12%",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    label: "Emails Sent",
    value: "87",
    icon: Mail,
    change: "+8%",
    color: "from-accent/20 to-accent/5",
  },
  {
    label: "Replies Received",
    value: "23",
    icon: CheckCircle,
    change: "+5%",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    label: "Interview Conversions",
    value: "4",
    icon: Zap,
    change: "1.2%",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    label: "Profile Views",
    value: "1.2K",
    icon: TrendingUp,
    change: "+18%",
    color: "from-green-500/20 to-green-500/5",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card
            key={stat.label}
            className={`p-6 glassmorphic border-border/20 bg-gradient-to-br ${stat.color} hover:shadow-smooth transition-all hover:-translate-y-1`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-xs text-accent font-semibold mt-1">{stat.change} from yesterday</div>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
