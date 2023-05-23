import { useLoaderData } from "react-router-dom";
import ServiceCart from "./ServiceCart";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../shared/AuthProvider";

const Services = () => {
  const {user}=useContext(AuthContext)
  const [services,setServices]=useState([]);
  const [currentPage,setCurrentPage]=useState(0);
  const [itemPerPage,setItemPerPage]=useState(2);
  const {total}=useLoaderData();

  const totalService=Math.ceil(total/itemPerPage);

  const totalPage=[...Array(totalService).keys()];

  useEffect(()=>{
    async function fetchData(){
       const res=await fetch(`http://localhost:5000/service?page=${currentPage}&limit=${itemPerPage}`)
       const data=await res.json();
       setServices(data)
    }
    fetchData()
  },[currentPage,itemPerPage,user])

  const options=[2,3,4,5,6];
  const handleChangeValue=event=>{
    setItemPerPage(parseInt(event.target.value));
    setCurrentPage(0)
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        {services.map((service) => (
          <ServiceCart
          key={service._id}
          service={service}
          totalPage={totalPage}
          ></ServiceCart>
        ))}
      </div>
      <div className="text-center my-10">
     <div className="border-t-2 py-3 border-blue-500">
     {
        totalPage.map(page=><button onClick={()=>setCurrentPage(page)} className="btn btn-circle bg-transparent text-black border-blue-500 hover:bg-blue-200 hover:border-blue-500 mx-2" key={page}>{page}</button>)
      }
       <select className="bg-white border-2 px-2 py-1 rounded-full focus:outline-none w-16" name="" id="" onChange={handleChangeValue}>
        {options.map(option=><option value={option} key={option}>{option}</option>)}
      </select>
     </div>
      </div>
    </div>
  );
};

export default Services;
