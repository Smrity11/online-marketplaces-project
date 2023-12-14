import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/Footer";



const Main = () => {
    

    
    
    return (
        <div>
       
      
     <div>
        <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        
       
         
        </div>
    );
};

export default Main;