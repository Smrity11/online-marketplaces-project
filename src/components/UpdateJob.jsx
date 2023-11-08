/* eslint-disable react-hooks/exhaustive-deps */

// import { useContext } from "react";

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import { AuthContext } from "../provider/AuthProvider";


const UpdateJob = () => {
   
    // const { user } = useContext(AuthContext);
    const jobData =useLoaderData()
    console.log("update data", jobData);
    const{_id,email,title,deadline,description,Minimumprice,Maximumprice,category} = jobData
   
    
    const handleForm = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const title = form.title.value
        const deadline = form.deadline.value
        const Minimumprice = form.Minimumprice.value
        const description = form.description.value
        const Maximumprice = form.Maximumprice.value
        const category = form.category.value
        const Updatejob={email,title,deadline,description,Minimumprice,Maximumprice,category}
       

        // send data to the server
        fetch(`http://localhost:5000/postJob/${_id}` ,{
            method:"PUT",
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify(Updatejob)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
            if(data.insertedId){
              Swal.fire({
                tittle: "success",
                text: "Job updated successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
        })
    }
  
    return (
        <div className="p-4" style={{
            backgroundImage: 'url(https://img.freepik.com/premium-vector/network-connection-background-abstract-style_23-2148875738.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize:"100% 120vh"
           
            // Background color with opacity
        }}>
      <div className="md:py-16 md:px-56">
        <h2 className="text-3xl text-white mb-7 text-center uppercase">Update {category} Job</h2>
        <form onSubmit={handleForm}>
          <div className="flex gap-7 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white text-xl">Email</span>
              </label>
              <label className="input-group">
                
                <input
                defaultValue={email}
                name="email"
                  type="text"
                  readOnly
                  className="input input-bordered w-full inputbox"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-white text-xl">Category</span>
            </label>
            <label className="input-group">
              <input
              defaultValue={category}
              readOnly
                name="category"
                type="text"
               
                className="input input-bordered w-full inputbox"
              />
            </label>
          </div>
          </div>
          <div className="flex gap-7 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white text-xl">Title</span>
              </label>
              <label className="input-group">
                
                <input
                defaultValue={title}
                name="title"
                  type="text"
                 
                  className="input input-bordered w-full inputbox"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white text-xl">Deadline</span>
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
          </div>
        
          <div className="flex gap-7 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white text-xl">Minimum Price</span>
              </label>
              <label className="input-group">
                
                <input
                defaultValue={Minimumprice}
                name="Minimumprice"
                  type="text"
                  
                  className="input input-bordered w-full inputbox"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white text-xl">Maximum Price</span>
              </label>
              <label className="input-group">
               
                <input
                defaultValue={Maximumprice}
                  name="Maximumprice"
                  type="text"
                
                  className="input input-bordered w-full inputbox"
                />
              </label>
            </div>
          </div>
          <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text text-white text-xl">Description</span>
              </label>
              <label className="input-group">
               
                <input
                defaultValue={description}
                  name="description"
                  type="text"
                 
                  className="input input-bordered w-full inputbox"
                />
              </label>
            </div>
            <input type="submit" value='Update Job' className="btn btn-wide md:w-[500px] font-extrabold mx-auto grid justify-center"></input>
        </form>
      </div>
        </div>
      
    );
};

export default UpdateJob;