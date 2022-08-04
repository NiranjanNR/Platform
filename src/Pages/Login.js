import React, { useState } from "react";
import './Login.css';
import { BrowserRouter as Router, useHistory, Route, Switch } from 'react-router-dom';

function Login() {

  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if(username==="Niranjan" && password==="pass"){
      history.push("/Hmm");
    }
    else{
      alert("ID or Password Wrong!");
    }
  }
  return (
    <Router>
      <div className="flex justify-center bg-blue-300/50">
        <div className="brightness-125 m-16 rounded-3xl sm:flex bg-white backdrop-blur-lg cunt" >
          <div className="bg-indigo-700 m-4 sm:mr-16 text-center sm:text-left text-white rounded-xl cunt1" >
            <div className="pt-10 sm:py-1 tracking-normal lg:text-4xl text-3xl text-semibold px-6 sm:mt-32 "><p className="">Welcome<br /> to our chatting<br /> community</p></div>
            <p className="light tracking-normal px-6 mt-10 invisible sm:visible">Chat with your friends and family<br /> for hours for free no matter<br /> how far they are!</p>
            <div className="bg-blue-900/75 mx-5 sm:mt-7 md:mt-5 lg:mt-20 sm:p-3 md:p-6 lg:p-10 rounded-xl invisible sm:visible">
              <p className="light tracking-normal ">Recognized as India's<br /> best chatting platform<br />and used by millions!</p>
            </div>
          </div>
          <div className="cunt2 m-3 mr-2 rounded-xl sm:pr-5">
            <p className="sm:mt-24 mt-8 sm:text-left fb text-center" style={{ color: "#000" }}>Login</p>
            <p className="sm:mt-12 mt-8 text-xl font-semibold text-neutral-600 text-center sm:text-left" >Chat ID</p>
            <div className="flex justify-center sm:justify-start"><input className="border-2 rounded-lg p-2 pr-32 lg:pr-56 border-neutral-600/50 mt-6 text-xl font-semibold text-neutral-900 text-left sm:text-left inp1" type="text" onChange={(e) => { setUsername(e.target.value) }} /></div>
            <p className="mt-8 text-xl font-semibold text-neutral-600 text-center sm:text-left" >Password</p>
            <div className="flex justify-center sm:justify-start"><input className="border-2 rounded-lg p-2 pr-32 lg:pr-56 border-neutral-600/50 mt-6 text-xl font-semibold text-neutral-900 text-left sm:text-left inp1" type="password" onChange={(e) => { setPassword(e.target.value) }}/></div>
            <div className="flex sm:justify-start justify-center">
              <button className=" border-2 rounded-lg py-3 px-16 hover:bg-indigo-800 bg-indigo-700 mt-16 text-xl fb2 tracking-wide text-white" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Login;
