import Logo from "../logo/Logo";

function Navbar() {
  return (
    <nav className="bg-red-600 py-4 shadow-md">
      <div className="mx-auto max-w-6xl px-8 flex justify-between items-center">
        <Logo />
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Portfolio</h2>
        <h2>Resume</h2>
        <h2>Q&A</h2>
        <h2>Contact</h2>
      </div>
    </nav>
  );
}

export default Navbar;
