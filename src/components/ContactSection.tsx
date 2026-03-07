import SectionHeading from "./SectionHeading";
import { Mail } from "lucide-react";

const ContactSection = () => (
  <section className="pb-24">
    <SectionHeading title="Contact" id="contact" />
    <p className="text-sm text-muted-foreground leading-relaxed max-w-md mb-6">
      Open to backend roles and interesting projects. Drop a line if you'd like to collaborate.
    </p>
    <a
      href="mailto:recurpixel@gmail.com"
      className="inline-flex items-center gap-2 font-mono text-sm text-primary border border-primary/30 rounded-md px-5 py-2 hover:bg-primary/10 transition-colors"
    >
      <Mail size={14} />
      recurpixel@gmail.com
    </a>
  </section>
);

export default ContactSection;
