import { Link } from "react-router-dom";
import { useState } from "react";
import { object } from "../App";
function Page2(){
    const[change,setChange]= useState();
   function setClick(){
   object.course=change;
   }
return(
    <>
    <div className="h-screen flex items-center justify-center">
     <h1 className="p-2 text-yellow-700">Select your course</h1>
     <select name="select" id="select" className="pl-2 m-2 outline-dashed text-xl capitalize"
     onChange={e=>setChange(e.target.value)}>
        <option value="School">School</option>
        <option value="uG">Under graduate</option>
        <option value="PG">post graduate</option>
     </select>
     <button onClick={setClick} className="pt-1 pb-1 pl-2 pr-2 border rounded-md bg-green-400">
    <Link to='/three'>Next</Link>
     </button>
     </div>
    </>
)
}
export default Page2;