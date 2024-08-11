import { Link } from "react-router-dom";
import { useState } from "react";
import { object } from "../App";
function Page4(){
    const[male,setmale]= useState(null);
    const [female,setFemale] = useState(null);
    function setClick(){
      object.gender = male?male:(female?female:"no gender choose");
    }
   
 return (
    <>
    <div className="h-screen flex items-center justify-center">
     <h1 className="p-2 text-yellow-700">Select your course</h1>
    <label htmlFor="male" className="pl-2 m-2 outline-double  text-xl capitalize rounded">
    Male : <input type="radio" id="male" name="gender" value="male" className="pl-2 m-2" 
    onChange={e=>setmale(e.target.value)}/>
    </label>
  
     <label htmlFor="female" className="pl-2 m-2 outline-double text-xl capitalize rounded">
    Fe-Male :<input type="radio" id="female" name="gender" value="female" className="pl-2 m-2"
    onChange={e=>setFemale(e.target.value)}/> 
     </label>
    <button onClick={setClick} className="pt-1 pb-1 pl-2 pr-2 border rounded-md bg-green-400">
    <Link to='/display_data'>Submit</Link>
    </button>
   </div>
   {male?male:(female?female:"no mail")}
    </>
 )
}
export default Page4;