/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import css from "./Navbar.css"


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
            <div className="flex gap[0px]  items-center">
           <div className="grid  justify-center md:text-center md:ml-[-30px]">
           <img
              className="w-[100px] ml-[-15px] md:ml-0 h-[45px] md:w-[150px] md:h-[85px]  text-white"
              src="https://i.ibb.co/yFMpRY7/istockphoto-1398833336-612x612-removebg-preview-1.png"
            ></img>
            <small className="text-[10px] md:mt-[-10px] ">TC Marketplace</small>
           </div>
           <div>
           <h2 className="text-lg ml-[-10px] md:ml-0 md:text-2xl  text-[#ffeac2]">
          <span className="text-fuchsia-400 text-2xl md:text-4xl  font-bold">T</span>ech
              <span className="text-fuchsia-400 text-2xl font-bold md:text-4xl">c</span>anvas
            </h2>
           </div>
          </div>
            {/* Middle part (Menu) */}
            <div className="hidden lg:flex flex-1 justify-center">
              <ul className="menu menu-horizontal space-x-3 uppercase">
              {AllServices}
              </ul>
            </div>
            {/* Right part (User info and logout button) */}
         
         {user ? (
            <>
             <div className="grid justify-center  items-center mx-auto mx-4 md:mr-12">
             <div className="avatar online mx-auto">
  <div className="w-7 md:w-11  rounded-full ">
    <img src={user?.photoURL} />
  </div>
</div>
             <p className="text-xs md:text-base text-center">{user?.displayName}</p>
             </div>
              
              <button onClick={handleLogOut} className="btn rounded-lg md:rounded-full w-12 md:w-24 text-white  text-xs lowercase md:text-base bg-blue-950  border-white ">
                Sign Out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn rounded-lg text-xs md:text-base  md:rounded-full w-12 md:w-24 text-white bg-blue-950 border-white "
            >
              Login
            </Link>
          )}
         </div>
          </div>
        
        {/* Page content here */}
        
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 min-h-full bg-blue-950">
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
