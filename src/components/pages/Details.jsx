import { Link, useLoaderData } from "react-router-dom";
import "../Css/Details.css";
import "../../assets/detailsBanner.jpg";
import icon from "../../assets/treatment-icon.svg";

const Details = () => {
  const serviceSingle = useLoaderData();
  const {
    doctor_name,
    img,
    price,
    service_name,
    short_description,
    subtitle,
    tags,
    _id,
  } = serviceSingle;
  return (
    <>
      <div className="banner flex justify-between mt-12 p-20">
        <div className="w-[50%]"></div>
        <div className="flex relative">
          <div className="absolute rounded-xl p-5 bg-opacity-60 text-white border-2 w-96 bg-black price">
            <h1 className="font-bold text-xl absolute -top-7 bg-white text-black py-2 px-6 rounded-full">
              See Info
            </h1>
            <div className="relative">
              <p className="font-bold text-xl mt-4 mb-2">Fee : ${price}</p>
              <hr />
              <div>
                <h1 className="font-bold text-xl mt-2 mb-2">Tags</h1>
                <hr />
                <div className="mt-2">
                  {tags.map((tag) => (
                    <li key={_id}>{tag}</li>
                  ))}
                </div>
              </div>
              <Link to={`/booking/${_id}`}>
              <button className="btn btn-block mt-5 btn-primary">
                Booking Now
              </button>
              </Link>
            </div>
          </div>
          <div className="text-right">
            <div className="flex justify-end">
              <img
                className="w-32 m-5 animImg border-white border-4 shadow-xl rounded-full"
                src={img}
                alt=""
              />
            </div>
            <div className="text-white flex items-end flex-col">
              <h1 className="text-3xl font-bold border-b-2 pb-2 mb-2">
                {doctor_name}
              </h1>
              <p className="text-lg font-semibold mb-2 text-cyan-200">
                {subtitle}
              </p>
              <p className="w-2/5 mb-3">{short_description}</p>
              <div className="bg-[#b4f6ff] relative flex items-center text-black py-2 px-6 fong-bold my-10 rounded-full">
                <img className="w-10 mr-4" src={icon} alt="" />
                <p className="absolute font-bold bg-white py-2 px-4 -top-10 rounded-t-xl">
                  Treatment Type
                </p>
                <h2 className="font-bold text-xl">{service_name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
