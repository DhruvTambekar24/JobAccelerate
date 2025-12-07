"use client"

import type React from "react"

import { AuthCard } from "@/components/auth-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      setIsLoading(true)
      // Simulate signup
      setTimeout(() => setIsLoading(false), 1000)
    }
  }

  return (
    <AuthCard
      title={step === 1 ? "Create Account" : "Complete Profile"}
      subtitle="Join thousands landing more interviews with AI"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 ? (
          <>
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <Input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <Input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <p className="text-xs text-muted-foreground mt-1">At least 8 characters</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>

            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1" required />
              <span className="text-muted-foreground">
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>
          </>
        ) : (
          <>
            <div>
              <label className="block text-sm font-medium mb-2">Target Roles</label>
              <Input type="text" placeholder="e.g., Product Manager, Senior Engineer" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Target Locations</label>
              <Input type="text" placeholder="e.g., San Francisco, Remote" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Preferred Salary Range</label>
              <div className="flex gap-2">
                <Input type="text" placeholder="Min" />
                <Input type="text" placeholder="Max" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Job Boards</label>
              <div className="space-y-2">
                {["LinkedIn", "Indeed", "Wellfound", "Glassdoor"].map((board) => (
                  <label key={board} className="flex items-center gap-2 text-sm">
                    <input type="checkbox" defaultChecked />
                    <span>{board}</span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="flex gap-3 pt-4">
          {step === 2 && (
            <Button type="button" variant="outline" onClick={() => setStep(1)} className="flex-1">
              Back
            </Button>
          )}
          <Button
            type="submit"
            className={`flex-1 bg-primary hover:bg-primary/90 text-foreground font-semibold`}
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : step === 1 ? "Continue" : "Create Account"}
          </Button>
        </div>
      </form>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:text-primary/80 transition font-semibold">
          Sign in
        </Link>
      </p>
    </AuthCard>
  )
}
