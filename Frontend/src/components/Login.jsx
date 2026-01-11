import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";   // ✅ Import axios

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submit
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios.post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("Login Successfully");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          alert("Error: " + err.response.data.message);
        }
      });
    document.getElementById('login_modal').close();
  };

  return (
    // ✅ Added z-50 so modal stays on top
    <dialog id="login_modal" className="modal z-50">
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close button */}
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById('login_modal').close()}
          >
            ✕
          </button>

          <h3 className="font-bold text-2xl text-center">Login</h3>

          {/* Email */}
          <div className="mt-4 space-y-2 text-xl ml-10">
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

          {/* Password */}
          <div className="mt-4 space-y-2 text-xl ml-10">
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

          {/* Actions */}
          <div className="flex justify-around mt-8">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md hover:bg-pink-700 duration-300 ml-6 p-1.5 px-4"
            >
              Login
            </button>
            <p className="text-xl">
              Not registered?{" "}
              <button
                type="button"
                className="underline text-blue-500 cursor-pointer"
                onClick={() => {
                  document.getElementById('login_modal').close();
                  document.getElementById('signup_modal').showModal();
                }}
              >
                Signup
              </button>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
