import { Outlet } from "react-router-dom";
import Home from "../Home/Home";

export default function Layout() {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
}
