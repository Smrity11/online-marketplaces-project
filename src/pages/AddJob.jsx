/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import css from "./AddJob.css"

const AddJob = () => {
    const { user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    // const email = form.email.value;
    const  title = form.title.value;
    const deadline = form.deadline.value;
    const description = form.description.value;
    const Minimumprice = form.Minimumprice.value;
    const Maximumprice = form.Maximumprice.value;
    const category = form.category.value
    const newJobs = {
    //    email,
       category,
  title,
  deadline,
      description,
      Minimumprice,
      Maximumprice,
      
    };
   

    // send data to the server
    fetch("http://localhost:5000/postjob", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJobs),
    })
      .then((res) => res.json())
      .then((data) => {
    
        if (data.insertedId) {
          Swal.fire({
            tittle: "success",
            text: "job added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  const categories = ["web development" , "digital marketing" , "graphics design."];
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
   <div className="p-4" style={{
    backgroundImage: 'url(https://img.freepik.com/premium-vector/network-connection-background-abstract-style_23-2148875738.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize:"100% 120vh"
   
    // Background color with opacity
}}>
     <div className=" md:py-16 md:px-56">
      <h2 className="text-3xl text-white mb-7 text-center uppercase">Add a Job</h2>
      <form onSubmit={handleForm}>
        <div className="flex gap-7 mb-6 ">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <label className="input-group">
              <input
                name="email"
                type="text"
                placeholder={user?.email}
                readOnly
                className="input input-bordered w-full inputbox"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
          <div className="container mx-auto mt-3">
      <label className="block text-white text-sm font-bold " htmlFor="category">
        Select a job category:
      </label>
      <select
        id="category"
        name="category"
        className="border rounded px-4 py-2 w-full"
        onChange={handleCategoryChange}
        value={selectedCategory}
        required
      >
        <option className="text-gray-700" value="" disabled>Select a category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      {selectedCategory && <p className="mt-2 text-green-500">You selected: {selectedCategory}</p>}
    </div>
          </div>
        </div>
        <div className="flex gap-7 mb-6">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text text-white">Tittle</span>
            </label>
            <label className="input-group">
              <input
                name="title"
                type="text"
                placeholder="enter title"
                className="input input-bordered w-full inputbox"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-white">Deadline</span>
            </label>
            <label className="input-group">
              <input
                name="deadline"
                type="text"
                placeholder="enter deadline"
                className="input input-bordered w-full inputbox"
              />
            </label>
          </div>
        </div>

        <div className="flex gap-7 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-white">Minimum Price</span>
            </label>
            <label className="input-group">
              <input
                name="Minimumprice"
                type="text"
                placeholder="enter Minimumprice"
                className="input input-bordered w-full inputbox"
              />
            </label>
          </div>
          
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-white">Maximum Price</span>
            </label>
            <label className="input-group">
              <input
                name="Maximumprice"
                type="text"
                placeholder="Maximum price"
                className="input input-bordered w-full inputbox"
              />
            </label>
          </div>
        </div>
        <div className="form-control w-full mb-6">
          <label className="label">
            <span className="label-text text-white">Description</span>
          </label>
          <label className="input-group">
            <input
              name="description"
              type="text"
              placeholder="description"
              className="input input-bordered w-full inputbox"
            />
          </label>
        </div>
        <input
          type="submit"
          value="Add Job"
          className="btn btn-wide md:w-[500px] font-extrabold mx-auto grid justify-center"
        ></input>
      </form>
    </div>
   </div>
  );
};

export default AddJob;
