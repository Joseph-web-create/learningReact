import logo from "../assets/react.svg";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <>
      <nav className="py-6 px-4 fixed w-full">
        <div className="flex justify-between items-center">
          <img src={logo} />
          <div>
            <NavLink t0="/login">Login</NavLink>
            <NavLink t0="/register">Login</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
