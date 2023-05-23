import { useLottie } from "lottie-react";
import serviceAnim from '../../../public/services.json'
import { useContext, useEffect, useState } from "react";
import '../Css/AddServices.css'
import { AuthContext } from "../shared/AuthProvider";

const AddService = () => {

    const {user}=useContext(AuthContext)
    const [hide,setHide]=useState(true)
    const [text,setText]=useState(' ')
    const [tag,setTag]=useState([])
    const options={
        animationData:serviceAnim,
        loop:true
    }
    const {View}=useLottie(options)

    const handleText=(event)=>{
        setText(event.target.value)
    }

    useEffect(()=>{
        if(tag.length>=5){
            setHide(false)
        }
    },[tag.length])

    const addTag=(event)=>{
        event.preventDefault()
        const newTag=[...tag,text]
        setTag(newTag)
        console.log(tag)
    }

    const handlePost=(event)=>{
        event.preventDefault();
        const form=event.target;
        const doctor_name=form.doctorName.value;
        const service_name=form.serviecName.value;
        const short_description=form.desc.value;
        const price=form.fee.value;
        const subtitle=form.title.value;
        const img=form.photo.value;
        const tags=tag;
        const providerEmail=form.providerEmail.value;
        const providerName=form.providerName.value
        const info={doctor_name,service_name,short_description,price,subtitle,img,tags,providerEmail,providerName}
        console.log(info)

        fetch('http://localhost:5000/addService',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        
    }

    return (
        <div>
            <h1 className="text-center text-2xl font-semibold my-5">ADD YOUR SERVICES</h1>
            <div className="flex">
                <div className="w-1/2 p-5 flex items-center justify-center">
                    {View}
                </div>
                <div className="w-1/2 p-10 rounded-xl flex items-center justify-center">
                <form onSubmit={handlePost}>
                    <div className="w-full relative grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="w-full">
                    <label htmlFor="doctorName"><span className="text-gray-500 font-bold">Doctor Name</span></label><br/>
                    <input className="w-full border-l-2 mt-2 h-12 py-2 px-4 bg-gray-100 focus:outline-none focus:border-2 border-blue-700" type="text" placeholder="Doctor Name" name="doctorName" id="" />
                    </div>

                    <div className="w-full">
                    <label htmlFor="subtitle"><span className="text-gray-500 font-bold">Sub-Title</span></label><br/>
                    <input className="w-full border-l-2 mt-2 h-12 py-2 px-4 bg-gray-100 focus:outline-none focus:border-2 border-blue-700" type="text" placeholder="Subtitle" name="title" id="" />
                    </div>

                    <div className="w-full">
                    <label htmlFor="serviceName"><span className="text-gray-500 font-bold">Service Name</span></label><br/>
                    <input className="w-full border-l-2 mt-2 h-12 py-2 px-4 bg-gray-100 focus:outline-none focus:border-2 border-blue-700" type="text" placeholder="Service Name" name="serviecName" id="" />
                    </div>

                    <div className="w-full">
                    <label htmlFor="fee"><span className="text-gray-500 font-bold">Service Fee</span></label><br/>
                    <input className="w-full border-l-2 mt-2 h-12 py-2 px-4 bg-gray-100 focus:outline-none focus:border-2 border-blue-700" type="text" placeholder="$$ Service Fee" name="fee" id="" />
                    </div>

                    <div className="w-full">
                    <label htmlFor="photo"><span className="text-gray-500 font-bold">PhotoURL</span></label><br/>
                    <input className="w-full border-l-2 mt-2 h-12 py-2 px-4 bg-gray-100 focus:outline-none focus:border-2 border-blue-700" type="url" placeholder="PhotoURL" name="photo" id="" />
                    </div>

                    <div className="w-full">

                    <div className="flex flex-wrap">{tag.map((t,i)=><p className="mx-1 font-semibold" key={t}>{i+1}. {t}</p>)}</div>

                    <label htmlFor="desc"><span className="text-gray-500 font-bold">Tags</span></label><br/>
                    <div className="flex">
                    <input className="w-full border-l-2 mt-2 h-12 py-2 px-4 bg-gray-100 focus:outline-none focus:border-2 border-blue-700" onChange={handleText} type="text" placeholder="Add More Tags" name="tags" id="" />
                    <button disabled={!hide} onClick={addTag} className={`bg-black text-white ${hide===false && 'bg-gray-200 hover:bg-gray-200'} py-2 rounded mt-2 hover:bg-gray-900 ml-2 px-4 h-12`}>Add</button>
                    </div>
                    </div>

                    <div className="w-full">
                    <label htmlFor="desc"><span className="text-gray-500 font-bold">Description</span></label><br/>
                    <textarea className='resize-none w-full focus:outline-none focus:border-2 border-blue-700 border-l-2 mt-2 py-2 px-4 h-12 focus:h-56 focus:absolute' name="desc" id="" placeholder="Description"></textarea>
                    </div>

                    <div className="w-full">
                    <label htmlFor="provider"><span className="text-gray-500 font-bold">Provider Name</span></label><br/>
                    <input className="w-full border-l-2 mt-2 h-12 py-2 px-4 bg-gray-100 focus:outline-none focus:border-2 border-blue-700" type="text" placeholder="Provider Name" name="providerName" id="" defaultValue={user?.displayName} />
                    </div>

                    <div className="w-full">
                    <label htmlFor="providerEmail"><span className="text-gray-500 font-bold">Provider Email</span></label><br/>
                    <input className="w-full border-l-2 mt-2 h-12 py-2 px-4 bg-gray-100 focus:outline-none focus:border-2 border-blue-700" type="email" placeholder="Provider Email" name="providerEmail" id="" defaultValue={user?.email} readOnly />
                    </div>

                    </div>
                    <input className="btn bt border-bn-warning btn-block mt-7" type="submit" value="ADD SERVICE" />
                </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;