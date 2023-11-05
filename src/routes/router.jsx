import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../error/Error";



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
      
      ]
    },
    
  ]);

   export default router