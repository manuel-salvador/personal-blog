import { EmailIcon, GitHubIcon, LinkedInIcon } from '@/components/Icons';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-5 pt-8 pb-5">
      <div className="flex gap-5">
        <a href="mailto:manu.sacr@hotmail.com" target="_blank" referrerPolicy="no-referrer">
          <EmailIcon />
        </a>
        <a href="https://github.com/manuel-salvador" target="_blank" referrerPolicy="no-referrer">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/manuel-salvador/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p className="text-gray-400">Manuel Salvador • © 2023</p>
    </footer>
  );
}
