import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { profile } from "@/lib/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <Link href="/" className="footer-name">
            Sergio Garcia<span>.</span>
          </Link>
          <p>Thoughtful code. Useful experiences.</p>
        </div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
            <ArrowUpRight size={15} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
            <ArrowUpRight size={15} />
          </a>
          <a href={profile.resume} download>
            Resume
            <ArrowUpRight size={15} />
          </a>
        </div>
        <span className="copyright">
          © {new Date().getFullYear()} Sergio Garcia
        </span>
      </div>
    </footer>
  );
}
