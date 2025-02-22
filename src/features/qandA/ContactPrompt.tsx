import { NavLink } from "react-router";

export function ContactPrompt() {
  return (
    <div className="mt-12 text-center animate-in fade-in-50 slide-in-from-bottom-3 duration-500">
      <p className="text-xl font-medium text-gray-600 dark:text-gray-200 mb-4">
        Thank you for your attention! If you have different questions or just
        want to share something,
      </p>
      <NavLink
        to="/contact"
        className="text-primary dark:text-gray-300 font-semibold hover:underline text-lg"
      >
        → you can find all contact options here
      </NavLink>
    </div>
  );
}

export default ContactPrompt;
