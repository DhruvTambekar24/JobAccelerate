"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { OnboardingStep } from "@/components/onboarding-step"
import Link from "next/link"
import { useState } from "react"

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    roles: "",
    locations: "",
    salaryMin: "",
    salaryMax: "",
  })

  const steps = [
    {
      number: 1,
      title: "Upload CV",
      description: "AI parses your resume and builds your profile",
      icon: "📄",
    },
    {
      number: 2,
      title: "Set Preferences",
      description: "Choose roles, locations, and salary expectations",
      icon: "⚙️",
    },
    {
      number: 3,
      title: "Configure Auto-Apply",
      description: "Set up your automation rules and preferences",
      icon: "🤖",
    },
    {
      number: 4,
      title: "Connect Email",
      description: "Verify your email for recruiter outreach",
      icon: "📧",
    },
    {
      number: 5,
      title: "Ready to Go",
      description: "Your job search automation is live",
      icon: "✨",
    },
  ]

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">JA</span>
            </div>
            <span className="font-bold text-xl">JobAccelerator</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Let's Get You Started</h1>
          <p className="text-muted-foreground">Complete these 5 steps to activate your AI job search</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Steps */}
          <div className="space-y-3">
            {steps.map((s) => (
              <OnboardingStep
                key={s.number}
                number={s.number}
                title={s.title}
                description={s.description}
                icon={s.icon}
                isActive={step === s.number}
                isCompleted={step > s.number}
              />
            ))}
          </div>

          {/* Form */}
          <div className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Upload Your CV</h2>
                <div className="border-2 border-dashed border-border/30 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-3">📄</div>
                  <p className="text-sm text-muted-foreground mb-3">Drag and drop your resume or click to browse</p>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  <Button variant="outline">Choose File</Button>
                </div>
                <Button onClick={() => setStep(2)} className="w-full bg-primary hover:bg-primary/90">
                  Continue
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Your Preferences</h2>
                <Input
                  placeholder="e.g., Product Manager, Senior Engineer"
                  value={formData.roles}
                  onChange={(e) => setFormData({ ...formData, roles: e.target.value })}
                />
                <Input
                  placeholder="e.g., San Francisco, Remote"
                  value={formData.locations}
                  onChange={(e) => setFormData({ ...formData, locations: e.target.value })}
                />
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Min Salary"
                    value={formData.salaryMin}
                    onChange={(e) => setFormData({ ...formData, salaryMin: e.target.value })}
                  />
                  <Input
                    type="text"
                    placeholder="Max Salary"
                    value={formData.salaryMax}
                    onChange={(e) => setFormData({ ...formData, salaryMax: e.target.value })}
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)} className="flex-1 bg-primary hover:bg-primary/90">
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Auto-Apply Settings</h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked />
                    <span>Apply 50+ jobs per day</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked />
                    <span>Email recruiters automatically</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" />
                    <span>Only apply to remote positions</span>
                  </label>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={() => setStep(4)} className="flex-1 bg-primary hover:bg-primary/90">
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Verify Email</h2>
                <p className="text-sm text-muted-foreground">
                  We'll use this email to send recruiter outreach messages
                </p>
                <Input type="email" placeholder="your@email.com" />
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(3)} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={() => setStep(5)} className="flex-1 bg-primary hover:bg-primary/90">
                    Verify & Continue
                  </Button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4 text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold">You're All Set!</h2>
                <p className="text-muted-foreground">
                  Your AI job search is now active. Sit back and watch the interviews come in.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 mt-6" asChild>
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
