import { Outlet } from "react-router";

function HomeLayout() {
  return (
    <>
      <header>header</header>
      <nav>navbar</nav>
      <Outlet />
    </>
  );
}

export default HomeLayout;
