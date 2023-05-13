import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import bannerImg from "../../assets/doctorbg.jpg";
import Lottie from "lottie-react";
import render from "../../../public/animation.json";
import "../Css/Booking.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Booking = () => {
  const [booked, setBooked] = useState({});
  const { id } = useParams();
  const {img,service_name,price}=booked;
  
  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => setBooked(data));
  }, [id]);

  const handleBooking=event=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const address=form.address.value;
    const phone=form.phone.value;
    
    const booking={
        customerName:name,
        email,
        address,
        phone,
        img,
        service:service_name,
        price
    };

    fetch('http://localhost:5000/bookings',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })

  }

  return (
    <div className="mt-5">
      <div className="bookingBanner relative">
        <div className="w-[50%] p-20">
          <Lottie height={200} width={200} animationData={render} loop={true} />
        </div>
        <a href="#info">
          <h1 className="text-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold ml-7 bg-black bg-opacity-50 py-3 px-8 rounded-full cursor-pointer hover:bg-opacity-100 duration-500">
            Enter Your Info <FontAwesomeIcon icon={faArrowDown} />
          </h1>
        </a>
      </div>
      <div className="my-20">
        <h1 className="text-center mb-10 text-2xl font-bold">
          Buy Our Services
        </h1>
        <div>
          <form onSubmit={handleBooking} id="info">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name">Your Name</label>
                <br />
                <input
                  className="bg-gray-200 focus:outline-none focus:border-b-2 focus:border-blue-500 focus:bg-transparent h-12 w-full rounded-sm py-2 px-4"
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  id=""
                />
              </div>

              <div>
                <label htmlFor="email">Your Email</label>
                <br />
                <input
                  className="bg-gray-200 focus:outline-none focus:border-b-2 focus:border-blue-500 focus:bg-transparent h-12 w-full rounded-sm py-2 px-4"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  id=""
                />
              </div>

              <div>
                <label htmlFor="phone">Your Phone</label>
                <br />
                <input
                  className="bg-gray-200 focus:outline-none focus:border-b-2 focus:border-blue-500 focus:bg-transparent h-12 w-full rounded-sm py-2 px-4"
                  type="phone"
                  name="phone"
                  placeholder="Enter Your Phone"
                  id=""
                />
              </div>

              <div>
                <label htmlFor="address">Your Address</label>
                <br />
                <input
                  className="bg-gray-200 focus:outline-none focus:border-b-2 focus:border-blue-500 focus:bg-transparent h-12 w-full rounded-sm py-2 px-4"
                  type="text"
                  name="address"
                  placeholder="Enter Your Address"
                  id=""
                />
              </div>
            </div>
            <button className="btn btn-primary btn-block my-5">Booking</button>
          </form>
        </div>
      </div>
      <h1 className="text-center text-blue-500 font-semibold">
        <Link to="/service">Back To All Service</Link>
      </h1>
    </div>
  );
};

export default Booking;
