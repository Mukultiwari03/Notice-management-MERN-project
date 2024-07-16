import React, { createContext, useState } from "react";
import "./App.css";
import {BrowserRouter,Routes,Route,createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Adminlogin from "./pages/admin/Adminlogin";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";
import Acadwrapper from "./components/notices/Acadwrapper";
import UniquesTemp from "./components/notices/UniquesTemp";
import History from "./pages/admin/History";
import Student from "./pages/student/Student";
import Users from "./components/Users"
import AddUsers from "./pages/admin/Addusers";
function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleAdminLogin = (admin) => {
    setAdmin(admin);
    window.location.href = "/admin";
  };

  const Layout = () => {
    return (
      <div>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-2 hidden lg:block">
          <aside className="sticky top-[70px]">
            <Sidebar />
          </aside>
        </div>
    
        <div className="col-span-12 lg:col-span-10">
          <Outlet />
        </div>
      </div>
    </div>
    
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Adminlogin",
      element: <Adminlogin />,
    },
    {
      path:"/student",
      element:<Student/>
    },

    {
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/admin",
          element: <Cards />,
        },
        {
          path: '/admin/history',
          element: <History />,
        },
        {
          path: "/admin/Academic",
          element: <Acadwrapper />,
        },
        {
          path:"/admin/Uniques",
          element:<UniquesTemp/>
        },
        {
          path:"/admin/users",
          element:<Users/>
        },
        {
          path:"/admin/addusers",
          element:<AddUsers/>
        }
      ],
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <UserContext.Provider
      value={{ user, handleLogin, admin, handleAdminLogin }}
    >
      <RouterProvider router={router}></RouterProvider>
    </UserContext.Provider>
  );
}

export default App;
export const UserContext = createContext();
