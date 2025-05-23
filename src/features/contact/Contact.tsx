import { FiGithub } from "react-icons/fi";
import { FaLinkedin, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { SocialIcon } from "@/components";
import { ContactForm } from "@/features";

function Contact() {
  return (
    <section>
      <div className="py-12">
        <h1 className="text-center text-5xl font-bold mb-8 border-b-4 border-primary pb-4 w-full dark:border-primary-foreground">
          Contact Me
        </h1>
        <ContactForm />
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-xl font-medium mb-6 text-gray-600 dark:text-gray-400">
          Direct Connections:
        </h3>
        <div className="flex gap-6 justify-center">
          <SocialIcon
            href="https://github.com/Martin-Andreev-288/"
            icon={<FiGithub />}
          />
          <SocialIcon
            href="https://www.linkedin.com/in/martin-andreev-078b02366"
            icon={<FaLinkedin />}
          />
          <SocialIcon
            href="https://www.facebook.com/martin.kasovitz"
            icon={<FaFacebook />}
          />
          <SocialIcon
            href="https://www.instagram.com/sehnsucht1995/"
            icon={<FaInstagramSquare />}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
