import { Logo, LinksDropdown, ModeToggle, NavLinks } from "..";

function Navbar() {
  return (
    <nav className="bg-muted dark:bg-slate-700 py-4 shadow-md sticky top-0 z-50">
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
