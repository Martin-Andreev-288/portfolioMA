import { Link } from "react-router";
import MA from "../../assets/MA.png";

function Logo() {
  return (
    <Link
      to="/"
      className="hidden lg:flex justify-center items-center transition-transform duration-300 hover:rotate-[15deg] hover:opacity-90"
    >
      <img src={MA} alt="M.A. logo" className="w-12 h-12" />
    </Link>
  );
}

export default Logo;
