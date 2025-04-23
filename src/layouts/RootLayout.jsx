import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

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
