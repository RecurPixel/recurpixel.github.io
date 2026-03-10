import { portfolioData } from "@/lib/portfolioData";
import { Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";

const contactData = portfolioData.contact ?? {};
const message = contactData.message ?? "Open to backend roles and interesting projects. Drop a line if you'd like to collaborate.";
const email = contactData.email ?? "recurpixel@gmail.com";

const ContactSection = () => (
  <section className="pb-24">
    <SectionHeading title="Contact" id="contact" />
    <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-6">
      {message}
    </p>
    <a
      href={`mailto:${email}`}
      className="inline-flex items-center gap-2 font-mono text-sm text-primary border border-primary/30 rounded-md px-5 py-2 hover:bg-primary/10 transition-colors"
    >
      <Mail size={14} />
      {email}
    </a>
  </section>
);

export default ContactSection;
