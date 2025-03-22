import react from "react";
import { useState } from "react";
import OtpInput from 'react-otp-input';


const Task2 =(props)=>{
  const [code, setcode] = useState(new Array(6).fill(""));
  

  const handleChange = (element, index) => {
    
    console.log(element.nextSibling,'sssssssssssssssssssssssssss')

    if (isNaN(element.value)) return false;
    setcode([code.map((d, indx) => (indx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };


return(

  <div className="bg-dark m-5 p-3">
    <h3 className="text-white m-5">Enter Your OTP Here</h3>
    <div className="text-center otpContainer"> 
    {code?.map((data, index) => {
          return (
            <input
              type="text"
              className="inputOtp p-3"
              name="otp"
              maxLength={1}
              key={index}
              value={data}
              onChange={(e) =>{
               handleChange(e.target, index)}}
              autoFocus={index === 0}
            />
          );
        })}
    </div>
  </div>

)
}
export default Task2;