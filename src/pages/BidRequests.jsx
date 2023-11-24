/* eslint-disable react-hooks/exhaustive-deps */

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
// import Swal from "sweetalert2";
import BidRequestsRow from "../components/BidRelated/BidRequestsRow";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const BidRequests = () => {
  const { user } = useContext(AuthContext);
  const dataload = useLoaderData()
  const [bids, setBids] = useState([]);


 const filtereddata = dataload.filter(webData => webData.buyerEmail === user?.email);
 console.log(filtereddata);

  //   const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetch(`https://online-marketplaces-server-red.vercel.app/allbookingjob?email=${user?.email}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setBids(data));
  }, []);


  const handleBookingCancel = id => {
    fetch(`https://online-marketplaces-server-red.vercel.app/bookingjob/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ status: 'cancel' })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                // update state
                const remaining = bids.filter(booking => booking._id !== id);
                const updated = bids.find(booking => booking._id === id);
                updated.status = 'cancel'
                const newBookings = [updated, ...remaining];
                setBids(newBookings);
                Swal.fire({
                  tittle: "success",
                  text: "job cancel successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
            }
        })
}


  const handleBookingConfirm = id => {
    fetch(`https://online-marketplaces-server-red.vercel.app/bookingjob/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ status: 'confirm' })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
           
                // update state
                const remaining = bids.filter(booking => booking._id !== id);
                const updated = bids.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setBids(newBookings);
                Swal.fire({
                  tittle: "success",
                  text: "job Confirm successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
            }
        })
}

  return (
    <div className="h-[120vh] md:h-[100vh] px-7">
      <h2 className="text-3xl text-center uppercase py-10 font-bold"> Bid Requests</h2>
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
          {
            filtereddata ? <tbody>
          {
            filtereddata.map(bid => <BidRequestsRow
                                key={bid._id}
                                booking={bid}
                                handleBookingCancel={handleBookingCancel}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BidRequestsRow>)
                        }
             
          </tbody> : <p className=" text-base mt-10 font-bold ">No Job Requests</p>
          }
        </table>
      </div>
    </div>
  );
};

export default BidRequests;
