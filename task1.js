import react from "react";
import { useState } from "react";
import axios from 'axios';
import idGenerator from 'react-id-generator';


const Task1 =(props)=>{


const[phNum,setPhNum]=useState("");

const generateOtp = () => {
   let createOtp = '';
   const otpNum ='0123456789';
   if(phNum != ""){
    for (let i = 0; i < 6; i++) {
      createOtp += otpNum.charAt(Math.floor(Math.random() * otpNum.length));
    }}
    
  props.setOtp(createOtp);
};

return(

<div class="mt-5">
  <div className="bg-dark inputBox ">
    <h3 className="text-white pt-5">Enter Your Phone Number</h3>
    <form>
    <input
      required
      className="mt-5 inputPhNum"
      type="number"
      value={phNum}
      onChange={(e)=>{
        setPhNum(e.target.value);
      }}
    />
    <div className="mt-3">
    <button type="submit" className="btn bg-light" onClick={generateOtp}>Submit</button>
    </div>
    </form>
    </div>
</div>

)
}
export default Task1;