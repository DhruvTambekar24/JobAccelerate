"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function NavHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">JA</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">JobAccelerator</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
              Pricing
            </Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition">
              Blog
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/signup">Start Free Trial</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border/10 space-y-3 pb-4">
            <Link
              href="/features"
              className="block text-sm text-muted-foreground hover:text-foreground transition py-2"
            >
              Features
            </Link>
            <Link href="/pricing" className="block text-sm text-muted-foreground hover:text-foreground transition py-2">
              Pricing
            </Link>
            <Link href="/blog" className="block text-sm text-muted-foreground hover:text-foreground transition py-2">
              Blog
            </Link>
            <div className="flex gap-2 pt-2">
              <Button variant="ghost" size="sm" asChild className="flex-1">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90" asChild>
                <Link href="/signup">Start Trial</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
