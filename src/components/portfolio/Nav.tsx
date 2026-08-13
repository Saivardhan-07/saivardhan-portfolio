import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Internship" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a href="#top" className="font-display text-sm font-semibold tracking-tight">
          Saivardhan<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Saivardhan-Mailaram-Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-4 py-1.5 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <FileDown className="size-4" aria-hidden="true" /> Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background/95 backdrop-blur md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Saivardhan-Mailaram-Resume.pdf"
                download
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center gap-2 rounded-md bg-primary px-3 py-2.5 font-medium text-primary-foreground"
              >
                <FileDown className="size-4" aria-hidden="true" /> Download resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
