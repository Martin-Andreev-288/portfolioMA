import Logo from "../logo/Logo";
import { LinksDropdown, NavLinks } from "..";

function Navbar() {
  return (
    <nav className="bg-muted py-4 shadow-md">
      <div className="mx-auto max-w-6xl px-8 flex justify-between items-center">
        <Logo />
        <LinksDropdown />
        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar;
