import { useLoaderData } from "react-router-dom";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const services = useLoaderData();
  console.log(services);

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
