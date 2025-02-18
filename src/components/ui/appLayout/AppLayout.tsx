import { Outlet } from "react-router";
import { Navbar } from "../..";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900">
      <Navbar />
      <div className="flex-1 pb-8">
        {" "}
        <div className="mx-auto max-w-6xl px-4 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
