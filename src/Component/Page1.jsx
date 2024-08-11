import { Link } from "react-router-dom";
import {  useState } from "react";
import { object } from "../App";
function Page1(){
  const[change,setChange]= useState();
   function setClick(){
     object.name = change;
   }
  return(
    <>
   <div className="h-screen flex items-center justify-center">
     <h1 className="p-2 text-yellow-700">Please Enter your name....</h1>
   <input className="pl-2 m-2 outline-dashed text-xl capitalize" type="text" placeholder="Please Enter your name"  onChange={e=>setChange(e.target.value)}/>
    <button onClick={setClick} className="pt-1 pb-1 pl-2 pr-2 border rounded-md bg-green-400">
    <Link to='/two'>Next</Link>
    </button>
   </div>
    </>
  )
}
export default Page1;