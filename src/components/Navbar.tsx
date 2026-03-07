import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "education", href: "#education" },
  { label: "achievements", href: "#achievements" },
  { label: "books", href: "#books" },
  { label: "writing", href: "#posts" },
  { label: "contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-mono text-sm leading-none tracking-tight">
          <span className="text-primary">RecurPixel</span>
          <span className="ml-2 text-[10px] text-muted-foreground">by Manu</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
              .{l.label}()
            </a>
          ))}
        </div>
        <button className="md:hidden text-muted-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors">
              .{l.label}()
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
