"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    type: "application",
    title: "Applied to Senior Product Designer at Stripe",
    time: "2 hours ago",
    status: "success",
  },
  {
    type: "email",
    title: "Email sent to recruiter@airbnb.com",
    time: "4 hours ago",
    status: "sent",
  },
  {
    type: "reply",
    title: "Reply from LinkedIn recruiter",
    time: "6 hours ago",
    status: "success",
  },
  {
    type: "application",
    title: "Applied to Senior Engineer at Google",
    time: "8 hours ago",
    status: "success",
  },
  {
    type: "cv",
    title: "CV optimized - ATS score improved to 92%",
    time: "1 day ago",
    status: "info",
  },
]

const statusStyles = {
  success: "bg-accent/20 text-accent",
  sent: "bg-primary/20 text-primary",
  info: "bg-secondary/20 text-secondary",
}

export function DashboardActivity() {
  return (
    <Card className="p-6 glassmorphic border-border/20">
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
      <div className="space-y-3">
        {activities.map((activity, i) => (
          <div
            key={i}
            className="flex items-start justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition"
          >
            <div className="flex-1">
              <p className="font-medium text-sm">{activity.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
            </div>
            <Badge variant="secondary" className={statusStyles[activity.status as keyof typeof statusStyles]}>
              {activity.status}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}
