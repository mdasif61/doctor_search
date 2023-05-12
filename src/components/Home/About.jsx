import {
  faArrowCircleRight,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import aboutImg from "../../assets/aboutImg.jpg";
import subImg from "../../assets/subImg.jpg";
import "../Css/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <>
      <div className="flex gap-6 my-20">
        <div className="w-[40%] relative">
          <img className="w-5/6 rounded-lg" src={aboutImg} alt="" />
          <img
            className="absolute rounded-lg shadow-lg border-white border-8 w-2/4 top-1/2 right-0"
            src={subImg}
            alt=""
          />
        </div>
        <div className="w-[60%] pl-10">
          <h3 className="text-blue-500 mb-4 font-semibold text-xl">About Us</h3>
          <h1 className="text-5xl font-bold mb-6">About Search Doctor Care.</h1>
          <p className="text-gray-500 leading-7">
            When you choose our doctor service, you can expect personalized care
            that's tailored to your unique health needs. Our doctors are
            dedicated to helping you achieve your best possible health.
          </p>
          <div className="flex justify-between">
            <div className="liIcon">
              <ul>
                <li>
                  <span className="mr-3 text-blue-500">
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </span>
                  Physical therapy
                </li>
                <li>
                  {" "}
                  <span className="mr-3 text-blue-500">
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </span>{" "}
                  Psychotherapy
                </li>
                <li>
                  {" "}
                  <span className="mr-3 text-blue-500">
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </span>{" "}
                  Oncology treatment
                </li>
              </ul>
            </div>
            <div className="liIcon">
              <ul>
                <li>
                  {" "}
                  <span className="mr-3 text-blue-500">
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </span>{" "}
                  Dermatological treatment
                </li>
                <li>
                  {" "}
                  <span className="mr-3 text-blue-500">
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </span>{" "}
                  Cardiac care
                </li>
                <li>
                  {" "}
                  <span className="mr-3 text-blue-500">
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </span>{" "}
                  Pulmonary rehabilitation
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button className="btn btn-primary my-5">Read More</button>
            <div className="ml-10 flex items-center">
              <FontAwesomeIcon
                icon={faPhoneSquare}
                className="text-6xl mr-5 text-blue-800"
              />
              <div>
                <h1 className="text-black font-bold text-2xl">+(000) 123456789</h1>
                <p className="text-gray-500 text-lg mt-1 font-semibold">Call Us Anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
