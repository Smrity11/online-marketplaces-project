import { Link, useLoaderData } from "react-router-dom";


const MyPostedJobs = () => {
    const jobs = useLoaderData()
    return (
        <div className=" grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-24 my-24 px-9 md:px-24">
           {
            jobs.map(job => 
                <div key={job._id} className="card  bg-neutral text-neutral-content shadow-black shadow-2xl">
  <div className="card-body items-center text-center text-white">
    <h2 className="card-title text-2xl">{job?.category}</h2>
    <p className=" text-lg">{job?.title}</p>
    <div className=" border-t-2 space-y-3">
  
    <p className="mt-6">Minimum Price : <span className="text-white font-extrabold">{job?.Minimumprice}</span></p>
    <p>Maximum Price : <span className="text-white font-extrabold">{job?.Maximumprice}</span></p>
    <p className="mb-6">Deadline :<span className="text-white font-extrabold">{job?.deadline}</span> </p>
    </div>
    <div className="w-[50px] mx-auto bg-white h-1"></div>
    <p className="my-3">{job?.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link to={`update/${job._id}`}>UPDATE</Link></button>
      <button className="btn btn-outline btn-error">DELETE</button>
    </div>
  </div>
</div>
            )
           }
        </div>
    );
};

export default MyPostedJobs;