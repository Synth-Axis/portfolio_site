import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/profile";

export default function ContactPage() {
  return (
    <div className="shell page-content contact-page">
      <div className="page-heading">
        <p className="eyebrow">Good things start with a conversation</p>
        <h1>
          Let&apos;s make
          <br />
          <span className="accent">something happen.</span>
        </h1>
        <p>
          A project, an opportunity, or just a hello. I&apos;d love to hear what
          you have in mind.
        </p>
      </div>
      <a href={`mailto:${profile.email}`} className="contact-email">
        <span className="contact-icon">
          <Mail size={25} />
        </span>
        <div>
          <span className="eyebrow">Drop me a line</span>
          <span className="email-address">{profile.email}</span>
        </div>
        <ArrowUpRight size={27} className="contact-arrow" />
      </a>
      <div className="contact-social-grid">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin size={25} />
          <div>
            <h2>LinkedIn</h2>
            <p>Let&apos;s connect professionally.</p>
          </div>
          <ArrowUpRight size={23} />
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          <Github size={25} />
          <div>
            <h2>GitHub</h2>
            <p>A closer look at the code.</p>
          </div>
          <ArrowUpRight size={23} />
        </a>
      </div>
      <p className="contact-note">
        Prefer to get to know me first?{" "}
        <a href={profile.resume} download>
          Download my resume
          <ArrowUpRight size={15} />
        </a>
      </p>
    </div>
  );
}
