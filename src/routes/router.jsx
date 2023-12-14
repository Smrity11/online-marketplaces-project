import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../error/Error";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";
import Login from "../pages/Home/login/Login";
import Register from "../pages/Home/register/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateJob from "../components/UpdateJob";
import Home from "../pages/Home/Home";
import BidDetails from "../components/BidRelated/BidDetails";
import Blog from "../pages/blog/Blog";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
     errorElement:<Error></Error> ,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        },
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
            element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
        },
        {
            path: "blog",
            element: <Blog></Blog>,
        },
        {
            path: "mypostedjobs",
            element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
           
        },
        {
            path: "mypostedjobs/update/:id",
            element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
            loader: ({params}) => fetch(`https://online-marketplaces-server-red.vercel.app/postJob/${params.id}`)
        },

        {
            path: "jobs/:id",
            element: <BidDetails></BidDetails>,
            loader: ({params}) => fetch(`https://online-marketplaces-server-red.vercel.app/postJob/${params.id}`)
        },
        {
            path: "mybids",
            element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
        },
        {
            path: "bidsrequest",
            element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>,
            loader:() => fetch('https://online-marketplaces-server-red.vercel.app/bookingjob')
        },
      
      ]
    },
    
  ]);

   export default router