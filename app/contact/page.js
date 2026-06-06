import ContactForm from "@/components/ContactForm";
import { ContactTrustStrip } from "@/components/ContactTrustStrip";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = {
  title: "Contact",
  description:
    "Start your freelance web project. Tell me about your business and I'll reply within 24 hours with next steps.",
};

export default function ContactPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <SectionHeader
        label="Contact"
        title="Start your project"
        description="Fill out the form below and I'll get back to you with a clear proposal — no spam, no pressure."
      />

      <ContactTrustStrip />

      <ContactForm />
    </div>
  );
}
