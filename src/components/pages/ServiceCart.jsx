import { Link } from "react-router-dom";
import "../Css/ServiceCart.css";
const ServiceCart = ({ service }) => {
  const {
    doctor_name,
    img,
    price,
    service_name,
    short_description,
    subtitle,
    tags,
    _id,
  } = service;
  return (
    <>
    <div className="bg-gray-100 border p-7 flex items-center relative">
      <span className="blueBg "></span>
      <div className="bg-white shadow-xl z-30 p-1 w-32 rounded-full">
        <img className="w-36 rounded-full" src={img} alt="" />
      </div>
      <div className="mt-5 pl-5 flex-1">
        <h1 className="text-2xl font-bold mb-2">{doctor_name}</h1>
        <p className="text-gray-500">{short_description}</p>
        <h3 className="bg-white text-blue-900 shadow-xl py-1 px-3 mt-7 font-bold text-lg rounded-lg">
          Treatement Type : {service_name}
        </h3>
        <div className="mt-7">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-accent">Details</button>
          </Link>
          <Link to={`/booking/${_id}`}>
            <button className="btn btn-primary ml-3">Booking Service</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceCart;
