import { NavHeader } from "@/components/nav-header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader />

      <main className="pt-24 pb-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-muted-foreground mb-8">Last updated: December 2025</p>

          <div className="space-y-8">
            <Card className="p-6 glassmorphic border-border/20">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the JobAccelerateAI website and Service, you accept and agree to be bound by the
                terms and provision of this agreement. If you do not agree to abide by the above, please do not use this
                service.
              </p>
            </Card>

            <Card className="p-6 glassmorphic border-border/20">
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on
                  JobAccelerateAI for personal, non-commercial transitory viewing only. This is the grant of a license,
                  not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software contained on the Service</li>
                  <li>Removing any copyright or other proprietary notations from the materials</li>
                  <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 glassmorphic border-border/20">
              <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on JobAccelerateAI are provided on an 'as is' basis. JobAccelerateAI makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties including, without
                limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of rights.
              </p>
            </Card>

            <Card className="p-6 glassmorphic border-border/20">
              <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall JobAccelerateAI or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on JobAccelerateAI.
              </p>
            </Card>

            <Card className="p-6 glassmorphic border-border/20">
              <h2 className="text-2xl font-bold mb-4">5. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United
                States, and you irrevocably submit to the exclusive jurisdiction of the courts located in San Francisco,
                California.
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
