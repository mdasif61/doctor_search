import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative h-full w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-xl flex items-center text-white top-0 left-0 p-10">
          <div>
            <h1 className="text-4xl font-bold leading-[45px]">
              Expert Medical Care for Your Family:
              <br />
              Trust Our Doctors to Keep
              <br />
              You Healthy
            </h1>
            <p className="w-2/4 my-4">
              Trust our expert doctors to provide your family with top-quality
              medical care. From routine check-ups to specialized treatments,
              we're here for all your health needs.
            </p>
            <button className="btn btn-primary mt-3">Learn More</button>
            <button className="btn btn-outline btn-secondary mt-3 ml-4">
              About Us
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform right-5 bottom-10">
          <a
            href="#slide4"
            className="btn btn-circle bg-blue-500 border-none shadow-md ml-3"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-blue-500 border-none shadow-md ml-3"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-xl flex items-center text-white top-0 left-0 p-10">
          <div>
            <h1 className="text-4xl font-bold leading-[45px]">
              Compassionate Care for Your Well-Being:
              <br />
              Our Doctors Put You First
            </h1>
            <p className="w-2/4 my-4">
              At our doctor service, we understand the importance of
              personalized care. That's why our doctors always put your
              well-being first, providing compassionate and attentive medical
              services.
            </p>
            <button className="btn btn-primary mt-3">Learn More</button>
            <button className="btn btn-outline btn-secondary mt-3 ml-4">
              About Us
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform bottom-10 right-5">
          <a
            href="#slide1"
            className="btn btn-circle bg-blue-500 border-none shadow-md ml-3"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-blue-500 border-none shadow-md ml-3"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-xl flex items-center text-white top-0 left-0 p-10">
          <div>
            <h1 className="text-4xl font-bold leading-[45px]">
              Your Health is Our Priority:
              <br />
              Comprehensive Medical Services
              <br />
              for All Ages
            </h1>
            <p className="w-2/4 my-4">
              Comprehensive medical care for all ages, from infants to seniors.
              Our experienced doctors offer a wide range of services to keep you
              healthy and happy.
            </p>
            <button className="btn btn-primary mt-3">Learn More</button>
            <button className="btn btn-outline btn-secondary mt-3 ml-4">
              About Us
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform right-5 bottom-10">
          <a
            href="#slide2"
            className="btn btn-circle bg-blue-500 border-none shadow-md ml-3"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-blue-500 border-none shadow-md ml-3"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full rounded-xl flex items-center text-white top-0 left-0 p-10">
          <div>
            <h1 className="text-4xl font-bold leading-[45px]">
              Personalized Care from Experienced Doctors:
              <br />
              Your Health, Our Commitment
            </h1>
            <p className="w-2/4 my-4">
              When you choose our doctor service, you can expect personalized
              care that's tailored to your unique health needs. Our doctors are
              dedicated to helping you achieve your best possible health.
            </p>
            <button className="btn btn-primary mt-3">Learn More</button>
            <button className="btn btn-outline btn-secondary mt-3 ml-4">
              About Us
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform right-5 bottom-10">
          <a
            href="#slide3"
            className="btn btn-circle bg-blue-500 border-none shadow-md ml-3"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-blue-500 border-none shadow-md ml-3"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
