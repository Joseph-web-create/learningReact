import logo from "../assets/react.svg";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <>
      <nav className="py-6 px-4 fixed w-full z-50 top-0">
        <div className="flex justify-between items-center">
          <img src={logo} />
          <div className="flex gap-8">
            <NavLink t0="/login">Login</NavLink>
            <NavLink t0="/register">Register</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
