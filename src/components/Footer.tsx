import { Download } from "lucide-react";

export const Footer = () => (
  <footer className="bg-gradient-to-r from-black via-zinc-900 to-red-900 py-4 px-3 text-center text-sm text-white ">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p>
        &copy; {new Date().getFullYear()} Alexandre Garcia. All Rights Reserved.
      </p>

      <div className="flex gap-4">
        <a
          href="/CV_SA_ GARCIA_2025-ENG.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 border border-red-500 hover:bg-red-500 hover:text-white rounded-xl px-4 py-1.5 transition text-xs"
        >
          <Download size={14} /> Resume
        </a>
        <a
          href="https://www.linkedin.com/in/sergioalexandregarcia/" // change to your actual LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 border border-red-500 hover:bg-red-500 hover:text-white rounded-xl px-4 py-1.5 transition text-xs"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Synth-Axis" // change to your actual GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 border border-red-500 hover:bg-red-500 hover:text-white rounded-xl px-4 py-1.5 transition text-xs"
        >
          GitHub
        </a>
      </div>
    </div>
  </footer>
);
