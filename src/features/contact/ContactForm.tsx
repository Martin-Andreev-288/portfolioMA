import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { CheckCircleIcon } from "lucide-react";
import { FiLoader } from "react-icons/fi";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_sqjqtkq", // EmailJS service ID
          "template_7h4lqaj", // EmailJS template ID
          formRef.current,
          "Itl9fv-A2qW1LWsWi" // EmailJS public key
        )
        .then(
          (result) => {
            console.log("EmailJS result:", result.text);
            setLoading(false);
            setSuccess(true);
            formRef.current?.reset();
          },
          (error) => {
            console.error("EmailJS error:", error.text);
            setLoading(false);
            setError("Failed to send message. Please try again later.");
          }
        );
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6"
    >
      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <FiLoader className="animate-spin w-5 h-5" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

      {success && (
        <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mt-4">
          <CheckCircleIcon className="w-5 h-5" />
          Message sent successfully!
        </div>
      )}

      {error && <p className="text-red-600 mt-4">{error}</p>}
    </form>
  );
}
