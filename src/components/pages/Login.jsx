import { Link } from "react-router-dom";
import google from "../../assets/google.png";
import github from "../../assets/github.png";
import facebook from "../../assets/facebook.png";
import render from "../../../public/login.json";
import Lottie from "lottie-react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full flex">
        {/* animation */}
        <div className="w-[50%] p-16">
          <Lottie animationData={render} loop={true} />
        </div>
        {/* animation end */}
        {/* register form start */}
        <div className="w-[50%] p-10 ">
          <h1 className="text-center mb-3 font-bold text-2xl">Login Please</h1>
          <form className="w-full">
            <div className="w-full">
              <label htmlFor="email">Email</label>
              <br />
              <input
                className="w-full rounded-full mt-1 h-12 py-2 px-4 focus:outline-none focus:border-b-2 focus:border-blue-500 bg-gray-200 mb-3"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                id=""
              />
            </div>

            <div className="w-full">
              <label htmlFor="name">Password</label>
              <br />
              <input
                className="w-full rounded-full mt-1 h-12 py-2 px-4 focus:outline-none focus:border-b-2 focus:border-blue-500 bg-gray-200 mb-3"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                id=""
              />
            </div>

            <input
              className="btn btn-block rounded-full btn-primary mt-5"
              type="submit"
              value="LOGIN"
            />
          </form>
          <div className="divider my-7">OR</div>
          <div className="flex mt-5 items-center justify-center w-full">
            <div className="mx-2 bg-gray-100 border border-gray-300 p-3 rounded-full">
              <img className="w-5" src={google} alt="" />
            </div>
            <div className="mx-2 bg-gray-100 border border-gray-300 p-3 rounded-full">
              <img className="w-5" src={github} alt="" />
            </div>
            <div className="mx-2 bg-gray-100 border border-gray-300 p-3 rounded-full">
              <img className="w-5" src={facebook} alt="" />
            </div>
          </div>
        </div>
        {/* register form end */}
      </div>
    </div>
  );
};

export default Login;
