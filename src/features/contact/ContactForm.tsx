import { useRef, useState } from "react";
import emailjs from "emailjs-com";

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
        <label className="block mb-2 font-medium dark:text-gray-200">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="w-full p-3 rounded-lg border dark:border-gray-600 dark:bg-gray-800"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium dark:text-gray-200">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="w-full p-3 rounded-lg border dark:border-gray-600 dark:bg-gray-800"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium dark:text-gray-200">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          className="w-full p-3 rounded-lg border dark:border-gray-600 dark:bg-gray-800"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="text-green-600 mt-4">Message sent successfully!</p>
      )}

      {error && <p className="text-red-600 mt-4">{error}</p>}
    </form>
  );
}
