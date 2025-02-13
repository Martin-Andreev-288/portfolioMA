import { Outlet } from "react-router";
import { Navbar } from "../../components";

function HomeLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center pb-20">
        {" "}
        <div className="mx-auto max-w-6xl px-8 w-full">
          <div className="h-full flex items-center justify-center">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
