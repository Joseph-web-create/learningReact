import { Outlet } from "react-router";
import NavBar from "../component/navBar";

const Root = () => {
  return (
    <>
      <div>
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default Root;
