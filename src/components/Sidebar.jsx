import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import { TbHistoryToggle } from "react-icons/tb";
import { BiLogOutCircle } from "react-icons/bi";
import { RiUserSearchLine } from "react-icons/ri";
import { IoPersonAddOutline } from "react-icons/io5";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  const handleLogout = () => {
    // Perform logout actions here (e.g., clear localStorage, reset state, etc.)
    // After performing logout actions, navigate to the login page
    window.location.href = "/";
  };

  const side = [
    {
      id: "1",
      icon: <CgNotes size={20} />,
      title: <Link to="/admin">Dashboard</Link>,
    },
    {
      id: "2",
      icon: <TbHistoryToggle size={20} />,
      title: <Link to="/admin/history">History</Link>,
    },
    {
      id: "3",
      icon: <RiUserSearchLine size={20} />,
      title: <Link to="/admin/users">Users</Link>,
    },
    {
      id: "4",
      icon: <IoPersonAddOutline size={20} />,
      title: <Link to="/admin/addusers">Add Users</Link>,
    },
    {
      id: "5",
      icon: <BiLogOutCircle size={20} />,
      title: (
        <button onClick={handleLogout} className="flex items-center">
          Logout
        </button>
      ),
    },
  ];

  return (
    <div className="h-screen bg-gray-800  text-white shadow-md p-3">
      <div>
        {side.map((item) => {
          return (
            <div
              key={item.id}
              className={`p-2 rounded-md font-medium my-2 flex gap-3 ${
                activeItem === item.id ? "bg-gray-700" : ""
              }`}
              onClick={() => handleItemClick(item.id)}
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
