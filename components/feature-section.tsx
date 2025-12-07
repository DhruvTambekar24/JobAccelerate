import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

interface FeatureSectionProps {
  title: string
  description: string
  icon: ReactNode
  content: ReactNode
  imagePosition?: "left" | "right"
}

export function FeatureSection({ title, description, icon, content, imagePosition = "right" }: FeatureSectionProps) {
  const gridContent = (
    <>
      <div className={imagePosition === "left" ? "order-2 lg:order-1" : "order-1 lg:order-2"}>
        <div className="flex items-start gap-4 mb-6">
          <div className="text-4xl">{icon}</div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold">{title}</h3>
            <p className="text-muted-foreground mt-2">{description}</p>
          </div>
        </div>
        {content}
      </div>
      <Card
        className={`p-8 h-80 rounded-xl glassmorphic border-border/20 flex items-center justify-center ${imagePosition === "left" ? "order-1 lg:order-2" : "order-2 lg:order-1"}`}
      >
        <div className="text-center">
          <div className="text-5xl mb-3">📊</div>
          <p className="text-muted-foreground">Feature Visualization</p>
        </div>
      </Card>
    </>
  )

  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">{gridContent}</div>
}
