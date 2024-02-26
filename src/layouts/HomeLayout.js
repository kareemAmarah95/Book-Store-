import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
function HomeLayout() {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
}

export default HomeLayout;
