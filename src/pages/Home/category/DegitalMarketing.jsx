/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const DegitalMarketing = () => {
    const [webDatas , setWebData] = useState([])
    console.log(webDatas);
    const [isLoading, setIsLoading] = useState(true);
    let [color, setColor] = useState("#FF0000");

    useEffect(()=>{
      setIsLoading(true)
      setTimeout(()=>{
        setIsLoading(false)
      },1500)
    },[])

    useEffect(() => {
        fetch('https://online-marketplaces-server-red.vercel.app/postJob' , {credentials:'include'})
            .then(res => res.json())
            .then(data => {
                setWebData(data);
                setIsLoading(false); 
            })
            .catch(error => console.log(error.message));

    }, []);


    const filteredcategory = webDatas.filter(webData => webData.category === "digital marketing");

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-7">
            {isLoading ? (
                
              <ClipLoader
        color={color}
        loading={isLoading}
       
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
            ) : (
               
                filteredcategory.map(web => (
                    <div key={web._id}>
                    <div className="card  bg-neutral text-neutral-content shadow-black shadow-2xl"
        >
          <div className="card-body items-center text-center text-white">
            <h2 className="card-title text-2xl">{web?.category}</h2>
            <p className=" text-lg">{web?.title}</p>
            <div className=" border-t-2 space-y-3">
              <p className="mt-6">
                Minimum Price :{" "}
                <span className="text-white font-extrabold">
                  {web?.Minimumprice}
                </span>
              </p>
              <p>
                Maximum Price :{" "}
                <span className="text-white font-extrabold">
                  {web?.Maximumprice}
                </span>
              </p>
              <p className="mb-6">
                Deadline :
                <span className="text-white font-extrabold">
                  {web?.deadline}
                </span>{" "}
              </p>
            </div>
            <div className="w-[50px] mx-auto bg-white h-1"></div>
            <p className="my-3">{web?.description}</p>
            <div className="card-actions justify-end">
            <Link
             to={`/jobs/${web._id}`}>
             <button className=" bg-blue-950 p-2 rounded font-semibold w-[150px] text-white"
              > BID NOW
              </button>
             </Link>
            </div>
          </div>
        </div>
                    </div>
                ))
            )}
           
           
           
           
        </div>
    );
};

export default DegitalMarketing;