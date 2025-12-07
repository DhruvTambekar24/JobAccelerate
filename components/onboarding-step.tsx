import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

interface OnboardingStepProps {
  number: number
  title: string
  description: string
  icon: ReactNode
  isActive: boolean
  isCompleted: boolean
}

export function OnboardingStep({ number, title, description, icon, isActive, isCompleted }: OnboardingStepProps) {
  return (
    <Card
      className={`p-6 cursor-pointer transition-all ${
        isActive
          ? "glassmorphic border-primary/50 bg-primary/10"
          : isCompleted
            ? "glassmorphic border-accent/50 bg-accent/5"
            : "glassmorphic border-border/20"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
            isCompleted
              ? "bg-accent/20 text-accent"
              : isActive
                ? "bg-primary/20 text-primary"
                : "bg-muted text-muted-foreground"
          }`}
        >
          {isCompleted ? "✓" : <span className="text-lg">{icon}</span>}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold text-muted-foreground">Step {number}</span>
            {isActive && <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">Current</span>}
          </div>
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  )
}
