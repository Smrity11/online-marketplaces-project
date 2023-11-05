/* eslint-disable no-unused-vars */

import { Link, Navigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import css from "./Register.css"
import swal from 'sweetalert';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
    
        const email = form.email.value;
    
        const password = form.password.value;
        const photo = form.photo.value;
    
          const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        const isPasswordValid = passwordRegex.test(password);
        if (isPasswordValid) {
          console.log("Invalid password. Please check the requirements.");
          
        }
    
        createUser(email, password)
          .then((result) => {
            const createdUser = result.user;
            profileUpdate(name, photo, createdUser);
            Navigate("/");
            if (createdUser) {
              swal("Welcome", "Registration successfully", "success");
            }
          })
          .catch((error) => {
            if (error) {
              swal("Failed", " Please fill out all field ", "error");
            }
          });
      };

      const profileUpdate = (name, photo, createdUser) => {
        updateProfile(createdUser, {
          displayName: name,
          photoURL: photo,
        })
          .then((result) => {
            const createdUser = result.user;
            console.log(createdUser);
          })
          .catch((error) => {
            console.log(error);
          });
      };


    return (
        <div style={{
            backgroundImage: 'url(https://img.freepik.com/premium-vector/network-connection-background-abstract-style_23-2148875738.jpg)',
            backgroundRepeat: 'no-repeat',
           
            // Background color with opacity
        }} className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src="" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl  text-white">
                    <div className="card-body text-white">
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="inputbox input input-bordered" />
                            </div>
                            <div className="form-control ">
                <label className="label">
                  <span className="label-text text-white">Photo</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Enter Your Photo URL"
                  className="input input-bordered inputbox"
                />
              </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="inputbox input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Confirm Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="inputbox input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="flex justify-between items-center">
              <div>
              <input required type="checkbox" /> <span>Accept Term & Conditions</span>
              </div>
              </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already Have an Account? <Link className='text-purple-400 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;