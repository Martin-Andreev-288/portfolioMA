import { links } from "@/utils";
import { NavLink } from "react-router";

function NavLinks() {
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4">
      {links.map((link) => {
        return (
          <NavLink
            to={link.href}
            key={link.label}
            className={({ isActive }) => {
              return `capitalize text-muted-foreground hover:text-primary transition-colors font-medium tracking-wide relative group ${
                isActive ? "text-primary" : ""
              }`;
            }}
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </NavLink>
        );
      })}
    </div>
  );
}

export default NavLinks;
