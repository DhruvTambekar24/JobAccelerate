"use client"

import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { day: "Mon", applications: 45, replies: 8, interviews: 2 },
  { day: "Tue", applications: 52, replies: 12, interviews: 3 },
  { day: "Wed", applications: 48, replies: 10, interviews: 2 },
  { day: "Thu", applications: 61, replies: 15, interviews: 4 },
  { day: "Fri", applications: 55, replies: 9, interviews: 2 },
  { day: "Sat", applications: 42, replies: 6, interviews: 1 },
  { day: "Sun", applications: 38, replies: 5, interviews: 1 },
]

export function AnalyticsChart() {
  return (
    <Card className="p-6 glassmorphic border-border/20">
      <h2 className="text-lg font-bold mb-6">Application Funnel (7 Days)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis dataKey="day" stroke="var(--color-muted-foreground)" />
          <YAxis stroke="var(--color-muted-foreground)" />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--color-card)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="applications" stroke="var(--color-primary)" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="replies" stroke="var(--color-accent)" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="interviews" stroke="var(--color-secondary)" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
