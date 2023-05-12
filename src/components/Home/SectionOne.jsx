import { Link } from "react-router-dom";
import '../Css/SectionOne.css'

const SectionOne = () => {
  return (
    <div className="flex mb-20 mt-40 bgImg bg-cyan-500 rounded-xl p-10 text-white">
      <div className="w-[50%]">
        <Link to="/service">
          <button className="btn bg-white text-blue-700 border-none shadow-xl hover:btn-outline">
            Service
          </button>
        </Link>
        <h1 className="mt-3 text-4xl font-bold leading-[50px]">
          Modern Medicine with a Human Touch: Choose Our Doctors for Your Health
          Needs
        </h1>
      </div>
      <div className="w-[50%] flex items-center p-7 bg-black bg-opacity-30 rounded-lg">
        <p>
          Prioritize preventative care: Practice healthy habits and preventative
          care measures such as regular exercise, a balanced diet, adequate
          sleep, and avoiding risky behaviors such as smoking and excessive
          alcohol consumption. Keeping up with routine check-ups and health
          screenings can also help catch potential health issues early and
          improve overall health outcomes.
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
