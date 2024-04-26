import React from "react";
import { Link } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import { TbHistoryToggle } from "react-icons/tb";
import { BiLogOutCircle } from "react-icons/bi";
import { RiUserSearchLine } from "react-icons/ri";
const Sidebar = () => {


  const handleLogout = () => {
    // Perform logout actions here (e.g., clear localStorage, reset state, etc.)
    // After performing logout actions, navigate to the login page
    window.location.href = "/";
  };

  const side = [
    {
      id: "1",
      icon: <CgNotes size={20} />,
      title: <Link to="/admin">Draft a Notice</Link>,
    },
    {
      id: "2",
      icon: <TbHistoryToggle size={20} />,
      title: <Link to="/admin/history">History</Link>,
    },
    {
      id:"3",
      icon: <RiUserSearchLine  size={20} />,
      title:<Link to="/admin/users">Users</Link>
    },
    {
      id: "4",
      icon: <BiLogOutCircle size={20} />,
      title: (
        <button onClick={handleLogout} className="flex items-center">
          Logout
        </button>
      ),
    },

    // {
    //   id: "4",
    //   icon: <PiWrenchLight size={20} />,
    //   title: "Configuration",
    // },
  ];

  return (
    <div className="h-screen bg-white bg-opacity-70 backdrop-filter backdrop-blur-xl shadow-md p-3">
      <div>
        {side.map((item) => {
          return (
            <div
              key={item.id}
              className="p-2 rounded-md text-black/65 font-medium my-2 flex gap-3 hover:bg-black/5"
            >
              <div>{item.icon}</div>
              <div>{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
