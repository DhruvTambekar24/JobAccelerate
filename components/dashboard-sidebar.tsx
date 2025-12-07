"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Briefcase,
  Send,
  Mail,
  BarChart3,
  FileText,
  Settings,
  CreditCard,
  LogOut,
  ChevronDown,
} from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Job Matches", href: "/dashboard/jobs", icon: Briefcase },
  { name: "Auto Apply Queue", href: "/dashboard/queue", icon: Send },
  { name: "Email Outreach", href: "/dashboard/emails", icon: Mail },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Resume Library", href: "/dashboard/resumes", icon: FileText },
]

const secondary = [
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)

  return (
    <aside
      className={`fixed left-0 top-0 h-screen z-40 border-r border-border/10 bg-card/50 backdrop-blur transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Logo */}
      <div className="p-4 border-b border-border/10 flex items-center justify-between h-16">
        {isOpen && (
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">JA</span>
            </div>
            <span className="font-bold text-sm hidden sm:inline">JobAI</span>
          </Link>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 hover:bg-muted rounded transition"
          aria-label="Toggle sidebar"
        >
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "-rotate-90" : ""}`} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
                isActive ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-muted/50"
              }`}
              title={!isOpen ? item.name : ""}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span className="text-sm font-medium">{item.name}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Secondary Navigation */}
      <div className="border-t border-border/10 p-2 space-y-1">
        {secondary.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
                isActive ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-muted/50"
              }`}
              title={!isOpen ? item.name : ""}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span className="text-sm font-medium">{item.name}</span>}
            </Link>
          )
        })}

        <button
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-destructive hover:bg-destructive/10 transition text-sm font-medium"
          title="Logout"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </aside>
  )
}
