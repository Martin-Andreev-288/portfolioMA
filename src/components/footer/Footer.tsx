import { FiGithub } from "react-icons/fi";
import { FaLinkedin, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { SocialIcon } from "@/components";

function Footer() {
  return (
    <footer className="border-t dark:border-gray-700 py-6">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <p className="text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Marto
        </p>
        <div className="flex gap-4">
          <SocialIcon
            href="https://github.com/Martin-Andreev-288/"
            icon={<FiGithub />}
          />
          <SocialIcon href="linkedin-url" icon={<FaLinkedin />} />
          <SocialIcon
            href="https://www.facebook.com/martin.kasovitz"
            icon={<FaFacebook />}
          />
          <SocialIcon href="linkedin-url" icon={<FaInstagramSquare />} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
