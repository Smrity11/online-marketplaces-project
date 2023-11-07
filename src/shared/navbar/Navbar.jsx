// /* eslint-disable no-unused-vars */



import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


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
          to="/bidsrequest"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline active"
              : ""
          }
        >
          {" "}
          Bid Requests
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

      <div className="navbar bg-blue-950 text-white py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" bg-[#292B2B] menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 hover:text-[#ffd485]"
            >
              {AllServices}
            </ul>
          </div>
          <div className="flex gap[0px] md:gap-3 items-center">
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
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{AllServices}</ul>
        </div>
        <div className="navbar-end">
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
              
              <button onClick={handleLogOut} className="btn rounded-lg md:rounded-full w-12 md:w-24 text-white bg-blue-950  text-xs lowercase md:text-base   border-white">
                Sign Out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn rounded-lg text-xs md:text-base  md:rounded-full w-12 md:w-24 text-white bg-blue-950 border-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;












