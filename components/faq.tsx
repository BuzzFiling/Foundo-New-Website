"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/ui/accordion"
import { Button } from "@/ui/button"

const categories = [
  { id: "general", name: "General" },
  { id: "billing", name: "Billing & Payments" },
  { id: "account", name: "Account & Security" },
  { id: "technical", name: "Technical Support" },
  { id: "features", name: "Features" },
]

const faqs = {
  general: [
    {
      question: "What is your product about?",
      answer:
        "Our product is a comprehensive solution designed to help you streamline your workflow and increase productivity. It offers a wide range of features tailored to meet your specific needs.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy! Simply sign up for an account, complete your profile, and follow our interactive onboarding guide. You can also check out our documentation for detailed instructions.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial.",
    },
  ],
  billing: [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for enterprise customers.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately, and billing is prorated.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied with our service, contact our support team within 30 days of purchase for a full refund.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No hidden fees. The price you see is the price you pay. All features in your plan are included with no additional charges.",
    },
  ],
  account: [
    {
      question: "How do I reset my password?",
      answer:
        'Click on "Forgot Password" on the login page, enter your email address, and we\'ll send you a secure link to reset your password.',
    },
    {
      question: "Can I have multiple users on one account?",
      answer:
        "Yes! Our Team and Enterprise plans support multiple users. Each user gets their own login credentials and you can manage permissions from the admin panel.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We take security seriously. All data is encrypted in transit and at rest using industry-standard AES-256 encryption. We're also SOC 2 Type II certified and GDPR compliant.",
    },
  ],
  technical: [
    {
      question: "What browsers do you support?",
      answer:
        "We support the latest versions of Chrome, Firefox, Safari, and Edge. For the best experience, we recommend keeping your browser up to date.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Yes! We have native apps for both iOS and Android. You can download them from the App Store or Google Play Store.",
    },
    {
      question: "How do I report a bug?",
      answer:
        "If you encounter a bug, please contact our support team with a detailed description of the issue, including screenshots if possible. We'll investigate and resolve it promptly.",
    },
    {
      question: "Do you offer API access?",
      answer:
        "Yes, API access is available on our Pro and Enterprise plans. Full API documentation is available in your account dashboard.",
    },
  ],
  features: [
    {
      question: "What integrations are available?",
      answer:
        "We integrate with over 50 popular tools including Slack, Google Workspace, Microsoft 365, Salesforce, Zapier, and many more. Check our integrations page for the full list.",
    },
    {
      question: "Can I customize the interface?",
      answer:
        "Yes! You can customize themes, layouts, and workflows to match your preferences. Enterprise plans also offer white-label options.",
    },
    {
      question: "Is offline mode available?",
      answer:
        "Yes, our mobile apps support offline mode. Any changes made offline will automatically sync when you reconnect to the internet.",
    },
  ],
}

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("general")

  return (
    <div className="w-full py-12 px-4 md:py-20 lg:py-24 text-black">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Find answers to common questions about our product, billing, and support.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 lg:mb-12">
          <div
            className="flex gap-2 overflow-x-auto pb-2 lg:justify-center scrollbar-hide"
            role="tablist"
            aria-label="FAQ categories"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="whitespace-nowrap"
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-controls={`panel-${category.id}`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        <div
          id={`panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
          className="bg-card border border-border rounded-lg p-6 md:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button size="lg" variant="outline">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  )
}
