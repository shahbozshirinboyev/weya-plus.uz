import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

function RootLayout() {
  const location = useLocation();
  const hideNavbarOn = ["/login", "/registration"];

  const shouldHideNavbar = hideNavbarOn.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Outlet />
    </>
  );
}

export default RootLayout;
