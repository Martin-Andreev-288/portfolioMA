import Logo from "../logo/Logo";
import { LinksDropdown } from "..";

function Navbar() {
  return (
    <nav className="bg-muted py-4 shadow-md">
      <div className="mx-auto max-w-6xl px-8 flex justify-between items-center">
        <Logo />
        <LinksDropdown />
      </div>
    </nav>
  );
}

export default Navbar;
