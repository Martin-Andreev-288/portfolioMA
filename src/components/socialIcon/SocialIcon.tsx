function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-200 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-foreground transition-all transform hover:scale-110"
      aria-label="Social media link"
    >
      {icon}
    </a>
  );
}

export default SocialIcon;
