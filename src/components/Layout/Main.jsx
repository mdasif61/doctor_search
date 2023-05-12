import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-100px)]'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;