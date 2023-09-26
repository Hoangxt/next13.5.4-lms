import NavbarRoutes from "@/components/navbar-routes";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <div className="flex h-full p-4 border-b items-center bg-white shadow-sm">
      {/* Navbar */}
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
