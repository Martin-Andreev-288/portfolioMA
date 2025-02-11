import Logo from "../logo/Logo";
import { LinksDropdown, ModeToggle, NavLinks } from "..";

function Navbar() {
  return (
    <nav className="bg-muted py-4 shadow-md">
      <div className="mx-auto max-w-6xl px-8 flex justify-between items-center">
        <Logo />
        <LinksDropdown />
        <NavLinks />
        <div className="flex justify-center items-center gap-x-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
