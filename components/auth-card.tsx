import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

interface AuthCardProps {
  title: string
  subtitle?: string
  children: ReactNode
}

export function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <Card className="w-full max-w-md p-8 glassmorphic border-border/20">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">JA</span>
            </div>
            <span className="font-bold text-xl">JobAccelerator</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>

        {children}
      </Card>
    </div>
  )
}
