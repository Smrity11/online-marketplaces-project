/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Link} from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
// import useAxiosSecure from "../hooks/useAxiosSecure";

const MyPostedJobs = () => {
    const { user } = useContext(AuthContext);
//   const lodedJobs = useLoaderData();

  const [jobs, setJobs] = useState([]);
  // console.log(jobs , user?.email);
  
//   const axiosSecure = useAxiosSecure();
    
  useEffect(() => {
      fetch(`http://localhost:5000/allpostJob?email=${user?.email}` ,{ credentials: 'include' })
      .then(res  => res.json())
      .then( data=> setJobs(data))
  }, []);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/postJob/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = jobs.filter((jobb) => jobb._id !== _id);
              setJobs(remaining);
            }
          });
      }
    });
  };


  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-24 my-24 px-9 md:px-24">
      {jobs.map((job) => (
        <div
          key={job._id}
          className="card  bg-neutral text-neutral-content shadow-black shadow-2xl"
        >
          <div className="card-body items-center text-center text-white">
            <h2 className="card-title text-2xl">{job?.category}</h2>
            <p className=" text-lg">{job?.title}</p>
            <div className=" border-t-2 space-y-3">
              <p className="mt-6">
                Minimum Price :{" "}
                <span className="text-white font-extrabold">
                  {job?.Minimumprice}
                </span>
              </p>
              <p>
                Maximum Price :{" "}
                <span className="text-white font-extrabold">
                  {job?.Maximumprice}
                </span>
              </p>
              <p className="mb-6">
                Deadline :
                <span className="text-white font-extrabold">
                  {job?.deadline}
                </span>{" "}
              </p>
            </div>
            <div className="w-[50px] mx-auto bg-white h-1"></div>
            <p className="my-3">{job?.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link to={`update/${job._id}`}>UPDATE</Link>
              </button>
              <button
                onClick={() => handleDelete(job._id)}
                className="btn btn-outline btn-error"
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPostedJobs;
