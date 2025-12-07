"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is auto-applying to jobs safe and allowed?",
    answer:
      "Absolutely. Our auto-apply feature uses legitimate job board APIs and respects all terms of service. We only apply to jobs you're eligible for based on your resume and preferences.",
  },
  {
    question: "How many jobs can AI apply to per day?",
    answer:
      "With our Pro plan, the AI applies to 50+ jobs daily. The Ultimate plan has unlimited applications. The exact number depends on available job matches in your criteria.",
  },
  {
    question: "Which job boards are supported?",
    answer:
      "We support LinkedIn, Indeed, Wellfound, AngelList, Glassdoor, and 20+ other major job boards. We continuously add new sources.",
  },
  {
    question: "Can I customize what jobs the AI applies to?",
    answer:
      "Yes! You can set filters for role, seniority, salary range, location, company type, industry, and more. The AI respects all your preferences.",
  },
  {
    question: "How does email deliverability work?",
    answer:
      "We use multiple SMTP services and warm up email accounts to maintain high deliverability rates. We track opens and replies in real-time.",
  },
  {
    question: "Can I see which jobs the AI applied to?",
    answer:
      "Yes. Our dashboard shows all applications with timestamps, company details, and application status. You can manually apply to jobs too.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Your data is encrypted at rest and in transit. We comply with GDPR, CCPA, and never sell your data to third parties. You control what we access.",
  },
  {
    question: "What if a job requires authentication or custom info?",
    answer:
      "Our AI can handle most form types, but complex applications may require manual completion. We flag these and optionally apply for you.",
  },
  {
    question: "Can I pause or stop the AI agents?",
    answer:
      "Yes, you can pause AI auto-apply, recruiter outreach, or any individual feature at any time. Changes take effect immediately.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 7-day free trial with full feature access. After that, we have a 30-day money-back guarantee if you're not satisfied.",
  },
  {
    question: "What's the difference between Pro and Ultimate?",
    answer:
      "Pro: 50+ applications daily, single CV. Ultimate: Unlimited applications, multi-CV A/B testing, API access, dedicated support.",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes, you can export all your data including application history, recruiter contacts, and analytics in CSV or JSON format anytime.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/10 bg-card/20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about JobAccelerateAI</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:text-primary transition">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
