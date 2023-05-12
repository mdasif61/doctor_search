import About from "./About";
import Banner from "./Banner";
import SectionOne from "./SectionOne";
import WhyChoose from "./WhyChoose";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChoose></WhyChoose>
            <About></About>
            <SectionOne></SectionOne>
        </div>
    );
};

export default Home;