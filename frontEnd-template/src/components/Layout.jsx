import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Outlet /> {/* This will load the selected page inside Layout */}
      </div>
    </>
  );
}

export default Layout;
    