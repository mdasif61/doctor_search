import { Link } from "react-router-dom";
import "../Css/SectionOne.css";
import { useEffect, useState } from "react";

const SectionOne = () => {
  const [treatments, setTreatments] = useState("");

  const category = [
    "Trust our expert doctors to provide your family with top-quality medical care. From routine check-ups to specialized treatments, were here for all your health needs.",
    "At our doctor service, we understand the importance of personalized care. That s why our doctors always put your well-being first, providing compassionate and attentive medical services",
    "Comprehensive medical care for all ages, from infants to seniors. Our experienced doctors offer a wide range of services to keep you healthy and happy.",
    "When you choose our doctor service, you can expect personalized care thats tailored to your unique health needs. Our doctors are dedicated to helping you achieve your best possible health.",
    "Innovation is at the heart of our doctor service. Our doctors use the latest medical technologies and techniques to provide you with the most effective healthcare solutions.", 'Your health is important, and were here to help you maintain it. Our doctors make it easy to stay healthy and happy with convenient medical services that fit your lifestyle.', 'You deserve the best medical care available, and thats what our doctors provide. From routine exams to complex treatments, we offer top-quality healthcare services to keep you at your best.'
  ];

  let count = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      count++;
      if(count>=category.length){
        count=0;
        setTreatments(category[count])
      }else{
        setTreatments(category[count]);
      }
    }, 1500);
  }, []);

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
          {/* Prioritize preventative care: Practice healthy habits and preventative
          care measures such as regular exercise, a balanced diet, adequate
          sleep, and avoiding risky behaviors such as smoking and excessive
          alcohol consumption. Keeping up with routine check-ups and health
          screenings can also help catch potential health issues early and
          improve overall health outcomes. */}
          {treatments}
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
