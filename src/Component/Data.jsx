import { Link } from "react-router-dom";
import '../App.css';
import { object } from "../App";
function Data(){
 return(
    <>
    <div className="data_box">
   <div className="data_info">
   <div>
      <li>name</li>
      <li>course</li>
      <li>dob</li>
      <li>gender</li>
    </div>
    <div>
      <span>{object.name}</span>
      <span>{object.course}</span>
      <span>{object.dob}</span>
      <span>{object.gender}</span>
    </div>
   </div>
   <div className="btnThanks">
   <h2>Thanksss for tour</h2>
    <button className="button">
    <Link to='/'>click to home button</Link>
    </button>
   </div>
    </div>
    </>
 )
}
export default Data;