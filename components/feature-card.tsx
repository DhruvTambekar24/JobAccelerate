import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  highlight?: boolean
}

export function FeatureCard({ icon, title, description, highlight }: FeatureCardProps) {
  return (
    <div
      className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-smooth hover:-translate-y-1 ${
        highlight ? "glassmorphic border-primary/30 bg-primary/5" : "glass-border glassmorphic"
      }`}
    >
      <div className="mb-4 text-accent text-3xl">{icon}</div>
      <h3 className="font-semibold mb-2 text-lg">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
