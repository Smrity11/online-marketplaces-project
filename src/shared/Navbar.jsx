

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut();
  };
  const AllServices = (
    <>

    
      <li className="text-lg">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline active"
              : ""
          }
        >
          {" "}
          Home
        </NavLink>
      </li>

      <li className="text-lg">
        <NavLink
          to="/addjob"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline active"
              : ""
          }
        >
          {" "}
          Add job
        </NavLink>
      </li>

      <li className="text-lg">
        <NavLink
          to="/mypostedjobs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline active"
              : ""
          }
        >
          {" "}
          My posted jobs
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          to="/bidrequest"
          className={({ isActive }) =>
             isActive
              ? "underline"
              : ""
          }
        >
          {" "}
          Bid
Requests
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          to="/mybids"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline active"
              : ""
          }
        >
          {" "}
          My Bids
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
    
    <div className="bg-blue-950 text-white">
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar ">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
          <div className="flex-1 px-2 mx-2 flex items-center justify-center">
            {/* Left part (Logo) */}
            <div className="flex-none">
              <img src="path_to_your_logo_image" alt="Logo" className="h-8 w-auto" />
            </div>
            {/* Middle part (Menu) */}
            <div className="hidden lg:flex flex-1 justify-center">
              <ul className="menu menu-horizontal space-x-4">
              {AllServices}
              </ul>
            </div>
            {/* Right part (User info and logout button) */}
            {user ? (
            <>
             <div className="grid justify-center items-center mx-auto ">
             <div className="avatar online mx-auto">
  <div className="w-7 md:w-11  rounded-full">
    <img src={user?.photoURL} />
  </div>
</div>
             <p className="text-xs md:text-base text-center">{user?.displayName}</p>
             </div>
              
              <button onClick={handleLogOut} className="btn rounded-lg md:rounded-full w-12 md:w-24 text-[#ffd485]  text-xs lowercase md:text-base   border-[#ffd485] bg-black">
                Sign Out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn rounded-lg text-xs md:text-base  md:rounded-full w-12 md:w-24 text-[#ffd485] bg-black border-[#ffd485] "
            >
              Login
            </Link>
          )}
          </div>
        </div>
        {/* Page content here */}
        Content
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {AllServices}
        </ul>
      </div>
    </div>
  </div>
  
    </div>
  );
};

export default Navbar;
