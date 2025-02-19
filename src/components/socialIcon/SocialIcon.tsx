function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-gray-600 transition-colors"
    >
      {icon}
    </a>
  );
}

export default SocialIcon;
