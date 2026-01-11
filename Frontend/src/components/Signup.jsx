import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

function Signup() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log("Form Data:", data);
    // // Here you can add login logic, API call, etc.
     const userInfo = {
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4001/user/signup", userInfo)
    .then((res) => {
        console.log(res.data)
        if(res.data){
          alert("Signup Successfully")
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
    })
    .catch((err) => {
        if(err.response) {
          console.log(err);
          alert("Error: " + err.response.data.message);
        }
    })
    document.getElementById('login_modal').close();
  };
  return (
    <dialog id="signup_modal" className="modal">
      <div className="modal-box border p-6 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* Close button */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => document.getElementById('signup_modal').close()}>✕</button>
    

        <h3 className="font-bold text-2xl text-center">SignUp</h3>

        <div className="mt-4 space-y-2 text-xl ml-4 mb-5">
          <span>Fullname:</span>
          <br />
          <input
            type="text"
            placeholder="Enter your fullname"
            className="w-96 px-3 border rounded-md outline-none p-2"
            {...register("fullname", { required: "fullname is required" })}
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm">{errors.fullname.message}</p>
            )}
        </div>

        <div className="mt-4 space-y-2 text-xl ml-4">
          <span>Email:</span>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-96 px-3 border rounded-md outline-none p-2"
            {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
  
        </div>

        <div className="mt-4 space-y-2 text-xl ml-4">
          <span>Password:</span>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-96 px-3 border rounded-md outline-none p-2"
            {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
        </div>

        <div className="flex justify-around mt-10">
          <button className="bg-pink-500 text-white rounded-md px-4 p-1.5 hover:bg-pink-700 duration-300 ml-6">
            Signup
          </button>
          <p className="text-xl">
            Have an account?{' '}
            <button
              className="underline text-blue-500 cursor-pointer"
              onClick={() => {
                document.getElementById('signup_modal').close();
                document.getElementById('login_modal').showModal();
              }}
            >
              Login
            </button>
          </p>
        </div>
      </form>
      </div>
    </dialog>
  );
}

export default Signup;
