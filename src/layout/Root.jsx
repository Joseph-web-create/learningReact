import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <div className="bg-zinc-600 p-5">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
