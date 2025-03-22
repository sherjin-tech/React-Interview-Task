import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Task1 from "./components/task1";
import 'bootstrap/dist/css/bootstrap.css';
import Task2 from './components/task2';

function App() {

  
const [otp,setOtp] = useState('');

console.log(otp)
  return (
    <div className="App container-fluid">
     {otp == "" ? <Task1 setOtp={setOtp}/> :
     <Task2 otp={otp}/>}
    </div>
  );
}

export default App;
