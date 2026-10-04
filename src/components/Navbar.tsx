"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { profile } from "@/lib/profile";
import { BrandIcon } from "@/components/BrandIcon";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const outside = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const resize = () => {
      if (window.innerWidth > 760) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("mousedown", outside);
    window.addEventListener("resize", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("mousedown", outside);
      window.removeEventListener("resize", resize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell nav-shell" ref={menuRef}>
        <Link
          href="/"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="Sergio Garcia home"
        >
          <span className="brand-symbol">
            sg<span>.</span>
          </span>
          <span className="brand-name">
            Sergio Garcia<span>Full-stack developer</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href ? "nav-link active" : "nav-link"
              }
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          className="button button-small button-outline desktop-resume"
          href={profile.resume}
          download
        >
          <Download size={15} /> Resume
        </a>
        <button
          className="menu-toggle"
          type="button"
          ref={toggleRef}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        {open && (
          <nav
            className="mobile-nav"
            id="mobile-navigation"
            aria-label="Mobile navigation"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
                <ArrowUpRight size={18} />
              </Link>
            ))}
            <a href={profile.resume} download onClick={() => setOpen(false)}>
              Download resume
              <Download size={18} />
            </a>
            <div className="mobile-socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <BrandIcon name="github" size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <BrandIcon name="linkedin" size={20} />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
