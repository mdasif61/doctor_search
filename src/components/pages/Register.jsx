import { Link } from "react-router-dom";
import google from "../../assets/google.png";
import github from "../../assets/github.png";
import facebook from "../../assets/facebook.png";
import render from "../../../public/login.json";
import Lottie from "lottie-react";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full flex">
        {/* animation */}
        <div className="w-[50%] p-16">
          <Lottie animationData={render} loop={true} />
        </div>
        {/* animation end */}
        {/* register form start */}
        <div className="w-[50%] p-10 bg-gray-100 border-2 border-gray-300 rounded-xl">
          <h1 className="text-center mb-3 font-bold text-2xl">
            Register Please
          </h1>
          <form className="w-full">
            <div className="w-full">
              <label htmlFor="name">Name</label>
              <br />
              <input
                className="w-full mt-1 h-12 py-2 px-4 focus:outline-none focus:border-b-2 focus:border-blue-500 bg-gray-200 mb-3"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                id=""
              />
            </div>

            <div className="w-full">
              <label htmlFor="name">Email</label>
              <br />
              <input
                className="w-full mt-1 h-12 py-2 px-4 focus:outline-none focus:border-b-2 focus:border-blue-500 bg-gray-200 mb-3"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                id=""
              />
            </div>

            <div className="w-full">
              <label htmlFor="name">Password</label>
              <br />
              <input
                className="w-full mt-1 h-12 py-2 px-4 focus:outline-none focus:border-b-2 focus:border-blue-500 bg-gray-200 mb-3"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                id=""
              />
            </div>

            <div className="w-full my-4">
              <label htmlFor="gender">
                <span className="font-bold mr-3">Gender</span>
              </label>
              <input
                className="ml-4 mr-2"
                type="radio"
                name="gender"
                value="Male"
                id=""
              />
              <label htmlFor="male">
                <span className="text-gray-500">Male</span>
              </label>
              <input
                className="ml-4 mr-2"
                type="radio"
                name="gender"
                value="Female"
                id=""
              />
              <label htmlFor="female">
                <span className="text-gray-500">Female</span>
              </label>
            </div>
            <div className="w-full mt-4">
              <input type="checkbox" name="trems" id="" />
              <label htmlFor="trems">
                <span className="ml-1">
                  Accept{" "}
                  <Link className="text-blue-600 underline">
                    Trems & Conditions
                  </Link>
                </span>
              </label>
            </div>
            <input
              className="btn btn-block btn-primary mt-5"
              type="submit"
              value="REGISTER"
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

export default Register;
