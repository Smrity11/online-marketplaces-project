import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";



const BidDetails = () => {
    const { user } = useContext(AuthContext);


    const jobData =useLoaderData()
    console.log("update data", jobData);
    const{_id,email,deadline ,title} = jobData
    console.log('jobdata id' , _id);
  

   
    const handleForm = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const buyerEmail = form.buyeremail.value
        const deadline = form.deadline.value
        const price = form.price.value
      


        if (user?.email ===! email) {
          // Show alert if user's email matches the job's email
          Swal.fire({
              title: "Error",
              text: "You cannot bid on your own project!",
              icon: "error",
              confirmButtonText: "OK",
          });
      } else {
          const bookingjob = {
              deadline,
              price,
              buyerEmail,
              email,
              title,
          }

        // send data to the server
        fetch('https://online-marketplaces-server-red.vercel.app/bookingjob', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(bookingjob)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    tittle: "success",
                    text: "Bid successfully",
                    icon: "success",
                    confirmButtonText: "Cool",
                  });
            }
        })
    }
    
  }

    return (
        <div>
             <div className="p-4" style={{
            backgroundImage: 'url(https://img.freepik.com/premium-vector/network-connection-background-abstract-style_23-2148875738.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize:"100% 120vh"
           
            // Background color with opacity
        }}>
      <div className="md:py-16 md:px-56">
        <h2 className="text-3xl text-white mb-7 text-center uppercase">Bid on the job</h2>
        <form onSubmit={handleForm}>
          <div className="flex gap-7 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <label className="input-group">
                
                <input
                defaultValue={user?.email}
                readOnly
                name="email"
                  type="text"
                 
                  className="input input-bordered w-full inputbox"
                />
              </label>
            </div>
          </div>
          
          <div className="flex gap-7 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <label className="input-group">
                <input
                name="price"
                  type="text"
                  
                  className="input input-bordered w-full inputbox"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Buyer Email</span>
              </label>
              <label className="input-group">
               
                <input
                defaultValue={email}
                  name="buyeremail"
                  type="text"
                readOnly
                  className="input input-bordered w-full inputbox"
                />
              </label>
            </div>
          </div>
          <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text text-white">Deadline</span>
              </label>
              <label className="input-group">
               
                <input
                defaultValue={deadline}
                  name="deadline"
                  type="text"
                 
                  className="input input-bordered w-full inputbox"
                />
              </label>
            </div>
        <div>
          
            <input type="submit" value='Bid on the project' className="btn btn-wide md:w-[500px] font-extrabold mx-auto grid justify-center"></input>

         
        </div>

        </form>
      </div>
        </div>
        </div>
    );
}

export default BidDetails