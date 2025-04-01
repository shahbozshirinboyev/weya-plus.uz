import Navbar from "../components/Navbar"
import { NavLink, Outlet } from "react-router-dom"

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default RootLayout