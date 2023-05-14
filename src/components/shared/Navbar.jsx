import { Link } from "react-router-dom";
import navlogo from "../../../public/images/navlogo.png";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import profile from '../../assets/profile.png'

const Navbar = () => {

  const { user,logOut } = useContext(AuthContext)
  const [manu, setManu] = useState(false);
  const [manus,setManus]=useState(false)

  const handleLogout=()=>{
    logOut()
    .then(result=>{
      console.log(result)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  const handleManu = () => {
    setManu(!manu)
  }
  const handleManus = () => {
    setManus(!manus)
  }

  return (
    <div className="navbar bg-base-100 flex justify-between sticky top-0 z-50">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-24" src={navlogo} alt="" />
          <h3 className="text-4xl font-bold">
            Search <span className="text-blue-500 text-2xl">Doctor</span>
          </h3>
        </div>
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/service">Service</Link>
          </li>
          <li className="mx-3">
            <Link to="/mybooking">My Booking</Link>
          </li>
          <li className="mx-3">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="mx-3">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <button className="btn btn-primary">Get Appoitment</button>
      </div>
      {
        user ? <><div onClick={handleManu} className="w-10 overflow-hidden relative h-10 rounded-full bg-blue-400">
          <img className="w-full rounded-full" src={user.photoURL} alt="" />
        </div>
        </> :

        <>
        <div onClick={handleManus} className="w-10 overflow-hidden relative h-10 rounded-full bg-blue-400">
          <img className="w-full rounded-full" src={profile} alt="" />
        </div>
        </>
      }
      {
        manu && user && <><div className='absolute flex flex-col right-0 top-20 bg-blue-900 rounded-box w-44 p-7 text-white'>
        <div className="w-20 overflow-hidden h-20  mb-3 rounded-full bg-blue-200">
          <img className="rounded-full border-8 border-gray-800" src={user.photoURL} alt="" />
        </div>
        <div className="mt-3">
          <h1 className="font-semibold text-sm">User : {user.displayName}</h1>
          <h2 className="font-semibold text-sm">ID :</h2>
          <button onClick={handleLogout} className="btn btn-warning mt-4">Log Out</button>
        </div>
      </div></>
      }
      {
        manus &&  <>
        <div className='absolute flex flex-col right-0 top-20 bg-blue-900 rounded-box w-44 p-7 text-white'>
            <div className="w-20 overflow-hidden h-20  mb-3 rounded-full bg-blue-200">
              <img className="rounded-full border-8 border-gray-800" src={profile} alt="" />
            </div>
            <div className="mt-3">
              <h1 className="font-semibold text-sm">User :</h1>
              <h2 className="font-semibold text-sm">ID :</h2>
              <Link to='/login'><button className="btn btn-warning mt-4">Login</button></Link>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default Navbar;
