"use client"

import { Bell, User, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <header className="fixed top-0 right-0 left-20 md:left-64 h-16 border-b border-border/10 bg-card/50 backdrop-blur z-30 px-6 flex items-center justify-between">
      <div className="flex-1">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
        </Button>

        {/* Quick Settings */}
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </Button>

        {/* User Profile */}
        <Button variant="ghost" size="icon" className="rounded-full">
          <User className="w-5 h-5" />
        </Button>
      </div>
    </header>
  )
}
