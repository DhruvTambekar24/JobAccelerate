import { NavHeader } from "@/components/nav-header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader />

      <main className="pt-24 pb-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground mb-8">Last updated: December 2025</p>

          <div className="space-y-8">
            <Card className="p-6 glassmorphic border-border/20">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                JobAccelerateAI ("Company", "we", "our", or "us") operates the JobAccelerator website and mobile
                application (the "Service"). This page informs you of our policies regarding the collection, use, and
                disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </Card>

            <Card className="p-6 glassmorphic border-border/20">
              <h2 className="text-2xl font-bold mb-4">2. Information Collection and Use</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We collect several different types of information for various purposes to provide and improve our
                  Service to you.
                </p>
                <h3 className="font-semibold text-foreground">Types of Data Collected:</h3>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Personal Data: Name, email address, phone number, resume</li>
                  <li>Usage Data: IP address, browser type, pages visited, time spent</li>
                  <li>Device Data: Device ID, operating system, browser information</li>
                  <li>Application Data: Job preferences, application history, recruiter interactions</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 glassmorphic border-border/20">
              <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                The security of your data is important to us, but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </Card>

            <Card className="p-6 glassmorphic border-border/20">
              <h2 className="text-2xl font-bold mb-4">4. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
            </Card>

            <Card className="p-6 glassmorphic border-border/20">
              <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at: privacy@jobaccelerator.ai
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
