import React from "react";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
// import { Outlet } from "react-router-dom";
import Main from '../components/Main';
import Academic from '../components/notices/Academic'
const Edit = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 sticky ">
        <div className=" col-span-2 hidden lg:block">
          <aside className="sticky top-[70px] x-[3]">
            <Sidebar />
          </aside>
        </div>
        {/* p-[100px] */}
        <div className=" col-span-12 lg:col-span-10  z-[-1]  mx-auto">
          <Academic/>
        </div>
      </div>
    </div>
  );
};

export default Edit;
