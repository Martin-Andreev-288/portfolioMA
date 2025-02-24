import { FiGithub } from "react-icons/fi";
import { FaLinkedin, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { SocialIcon } from "@/components";

function Footer() {
  return (
    <footer className="border-t dark:bg-slate-700 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 dark:text-gray-400  order-2 sm:order-1 text-sm">
          © {new Date().getFullYear()} Marto
        </p>
        <div className="flex gap-5 order-1 sm:order-2">
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
