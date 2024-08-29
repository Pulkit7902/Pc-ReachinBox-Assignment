import React, { useState } from 'react';
import AppBar from '../components/AppBar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { signupUser } from '../firebase';
import { toast } from 'react-toastify';
import google from "../assets/google.svg";

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { success, error } = await signupUser(formData.email, formData.password);
      if (!success) {
        toast.error(error);
        return;
      }
      toast.success('Signed up successfully!');
      navigate("/");
    } catch (error) {
      toast.error('An error occurred during sign-up.');
    }
  };

  const handleGoogleLogin = () => {
    // Handle Google login here
    window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/onebox";
  };

  return (
    <div>
      <AppBar />
      <div className=''>
        <form onSubmit={handleSubmit} className="">
          <div className="bg-black w-screen h-screen flex flex-col justify-center items-center">
            <div className="bg-[#111214] text-center space-y-10 px-16 rounded-2xl border border-[#343A40]">
              <div className="-mb-8">
                <div className="text-xl text-white font-semibold mt-6 mb-6">
                  Create a new account
                </div>
                <div className=' justify-center align-center '>
                <div className="mb-4 flex items-center justify-center text-md gap-2 min-w-[320px]">
                  <label htmlFor="name" className="w-12 block relative right-10 text-gray-300 font-bold mb-2 mr-auto">
                    Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-blue-500  text-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4 flex items-center justify-center text-md gap-2 min-w-[320px]">
                  <label htmlFor="email" className="w-12 block relative right-10 text-gray-300 font-bold mb-2 mr-auto">
                    Email:
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full  bg-transparent border-blue-500  text-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4 flex items-center justify-center text-md gap-2  ">
                  <label htmlFor="w-14 password" className="w-12 border-blue-500  block relative right-10 text-slate-200 font-bold mb-2">
                    Password:
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full  bg-transparent text-white border-blue-500 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                </div>
              </div>
              <div className="">
                <button
                
                  type="submit"
                  className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] mx-16 mt-5 px-6 text-sm py-3 rounded-md cursor-pointer mb-3"
                >
                  Create an Account
                </button>
                <div>
                  <p className="text-white">Or</p>
                  <div
                    className="mt-2 border-white/40 border px-20 py-2 text-sm flex items-center text-[#CCCCCC] rounded-lg cursor-pointer"
                    onClick={handleGoogleLogin}
                  >
                    <img src={google} alt="Google" className="w-4 mr-3" />
                    Sign Up with Google
                  </div>
                </div>
                <div className="my-8 mb-10 text-[#909296]">
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#C1C2C5]">
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;

