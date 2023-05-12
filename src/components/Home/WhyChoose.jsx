import { useEffect, useState } from "react";

const WhyChoose = () => {
  const [whyUs, setWhyUs] = useState([]);

  useEffect(() => {
    fetch("/public/WhyData.json")
      .then((res) => res.json())
      .then((data) => setWhyUs(data));
  }, []);

  return (
    <div className="my-20">
      <h1 className="text-center text-xl font-semibold pb-3 border-b-2 text-blue-500">
        OUR SPECIALITY
      </h1>
      <h1 className="text-center text-4xl font-bold mb-20 my-3">
        Why Choose Us
      </h1>
      <div className="grid grid-cols-4 mt-10 gap-10 justify-between items-center">
        {whyUs.map((why) => (
          <div
            key={why.id}
            className="flex items-start h-[350px] p-5 flex-col justify-between"
          >
            <div>
              <img className="h-24 mb-7" src={why.image} alt="" />
            </div>
            <div>
              <h1 className="text-xl font-bold mb-4">{why.title}</h1>
              <p className="text-gray-500">
                {why.description.slice(0, 150)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
