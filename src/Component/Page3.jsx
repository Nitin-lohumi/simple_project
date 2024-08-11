import { Link } from "react-router-dom";
import {useState} from "react";
import { object } from "../App";
function Page3(){
     const[change,setChange]= useState();
     function setClick(){
      object.dob = change;
     }
   return(
    <>
    <div className="h-screen flex items-center justify-center">
     <h1 className="p-2 text-yellow-700">Select your course</h1>
     <input type="date"  onChange={e=>setChange(e.target.value)} className="pl-2 m-2 outline-dashed text-xl capitalize" />

    <button onClick={setClick} className="pt-1 pb-1 pl-2 pr-2 border rounded-md bg-green-400">
    <Link to='/four'>Next</Link>
    </button>
    <h1>{change}</h1>
   </div>
    </>
   )
}
export default Page3;