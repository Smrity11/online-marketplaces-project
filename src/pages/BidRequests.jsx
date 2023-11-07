/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import BidRequestsRow from "../components/BidRelated/BidRequestsRow";


const BidRequests = () => {
  const { user } = useContext(AuthContext);

  const [bids, setBids] = useState([]);

  //   const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetch(`http://localhost:5000/allbookingjob?email=${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setBids(data));
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
        fetch(`http://localhost:5000/bookingjob/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = bids.filter((jobb) => jobb._id !== _id);
              setBids(remaining);
            }
          });
      }
    });
  };


  return (
    <div className="h-[120vh] md:h-[100vh] px-7">
      <h2 className="text-3xl text-center uppercase py-10 font-bold"> Bid Requests: {bids.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-[23px]">
              
              <th>Email</th>
              <th>Job Title</th>
              <th>Price</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {
            bids.map(bid => <BidRequestsRow
                                key={bid._id}
                                booking={bid}
                                handleDelete={handleDelete}
                            ></BidRequestsRow>)
                        }
             
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidRequests;
