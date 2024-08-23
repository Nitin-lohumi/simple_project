import { useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes,Link} from "react-router-dom";
import Page1 from "./Component/Page1";
import Page2 from "./Component/Page2";
import Page3 from "./Component/Page3";
import Page4 from "./Component/Page4";
import Data from './Component/Data.jsx';
export const object =[
  {
    name:"",
    course:"",
    dob:"",
    gander:""
  }
];
const App = () => {
  return (
    <>
    <BrowserRouter>
     <Routes>
    <Route path="/" element={<Page1/>}/>
    <Route path="/two" element={<Page2/>}/>
    <Route path="/three" element={<Page3/>}/>
    <Route path="/four" element={<Page4/>}/>
    <Route path='/display_data' element={<Data/>}/>
    </Routes> 
    </BrowserRouter>
    </>
  );
};
export default App;
