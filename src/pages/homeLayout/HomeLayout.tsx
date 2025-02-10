import { Outlet } from "react-router";
import { Navbar } from "../../components";

function HomeLayout() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-6xl px-8 py-20">
        <Outlet />
      </div>
    </>
  );
}

export default HomeLayout;
