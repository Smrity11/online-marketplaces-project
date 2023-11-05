import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../error/Error";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";
import Login from "../pages/Home/login/Login";
import Register from "../pages/Home/register/Register";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
     errorElement:<Error></Error> ,
      children:[
        {
            path: "login",
            element: <Login></Login>,
        },
        {
            path: "register",
            element: <Register></Register>,
        },
        {
            path: "addjob",
            element: <AddJob></AddJob>,
        },
        {
            path: "mypostedjobs",
            element: <MyPostedJobs></MyPostedJobs>,
        },
        {
            path: "mybids",
            element: <MyBids></MyBids>,
        },
        {
            path: "/bidrequest ",
            element: <BidRequests></BidRequests>,
        },
      
      ]
    },
    
  ]);

   export default router