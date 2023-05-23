import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../shared/AuthProvider";

const MyServices = () => {

    const {user,loading}=useContext(AuthContext)
    const [myServices,setMyServices]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/myServices?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyServices(data)
        })
    },[user.email])

    return (
        <div>
            <div className="myServices">
                <div>
                    545
                </div>
                <div>
                    54545
                </div>
            </div>
        </div>
    );
};

export default MyServices;