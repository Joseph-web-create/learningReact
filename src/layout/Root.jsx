import { Outlet } from "react-router";
import NavBar from "../component/navBar";

const Root = () => {
  return (
    <>
      <div className="bg-zinc-600">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default Root;
