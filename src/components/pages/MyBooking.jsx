import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../shared/AuthProvider";
import {faTrash, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyBooking = () => {
    const {user}=useContext(AuthContext);
    const [booked,setBooked]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setBooked(data))

    },[user.email])

    const handleDelete=(id)=>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                const remain=booked.filter(book=>book._id!==id);
                setBooked(remain)
            }
        })
    }

    return (
        <div>
            <h1 className="text-xl font-bold text-center my-7">Total Bookings : {booked.length}</h1>

            <div className="w-10/12 mx-auto my-10">
                <table className="w-full table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Buyer Info</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booked.map(book=><tr
                            key={book._id}
                            >
                                <td><img className="w-16 rounded-full" src={book.img} alt="" /></td>
                                <td><h1 className="text-lg font-semibold">{book.service}</h1></td>
                                <td className="font-bold">${book.price}</td>
                                <td>
                                    <div className="text-gray-500">
                                        <h1>{book.customerName}</h1>
                                        <h1>{book.phone}</h1>
                                        <h1>{book.email}</h1>
                                        <h1>{book.address}</h1>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <button onClick={()=>handleDelete(book._id)} className="btn mx-2 btn-circle bg-red-200 border-none hover:bg-red-200"><FontAwesomeIcon className="text-red-600 text-lg" icon={faTrash}/></button>

                                    <button className="btn mx-2 bg-blue-200 border-none hover:bg-blue-200"><FontAwesomeIcon className="text-blue-600 text-lg" icon={faPenToSquare}/></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;