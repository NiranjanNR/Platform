import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import './Hmm.css';

const Hmm = (authorized) => {

  function updateScroll() {
    var element = document.getElementById("chat-box");
    element.scrollTop = element.scrollHeight;
  }
  useEffect(() => {
    updateScroll();
  }, []);

  const [flagChat, setFlagChat] = useState(0);
  const [value, setValue] = useState("");
  const [texts, setTexts] = useState([
    {
      name: "Niranjan",
      text: "Hey",
    },
    {
      name: "Levi",
      text: "So hows the whole titan killing business ...heard u killed the Attack Titan pretty good ",
    },
    {
      name: "Niranjan",
      text: "Yes, this is Niranjan. What is it that you want?",
    },
    {
      name: "Levi",
      text: "So hows the whole titan killing business ...heard u killed the Attack Titan pretty good ",
    },
    {
      name: "Niranjan",
      text: "Yes, this is Niranjan. What is it that you want?",
    },
    {
      name: "Levi",
      text: "So hows the whole titan killing business ...heard u killed the Attack Titan pretty good ",
    },
    {
      name: "Niranjan",
      text: "Yes, this is Niranjan. What is it that you want?",
    },
  ]);
  const [texts1, setTexts1] = useState([
    {
      name: "Naruto",
      text: "OLa",
    },
    {
      name: "Levi",
      text: "So hows the whole titan killing business ...heard u killed the Attack Titan pretty good ",
    },
    {
      name: "Naruto",
      text: "Yes, this is Naruto. What is it that you want?",
    },
  ]);
  const handleInputChange = (e) => {
    updateScroll();
    setValue(e.target.value);
    if (e.key === "Enter" && value !== "") {
      setTexts([...texts, { name: "Niranjan", text: value }]);
      setValue("");
    }
    
  }

  const handleSend = () => {
    if (value !== "") {
      setTexts([...texts, { name: "Niranjan", text: value }]);
      setValue("");
    }
  }

  if (!authorized.authorized) {
    return <Redirect to="/Login" />;
  }
  return (
    <div className="flex justify-center bg-neutral-800 text-white bg-chat">
      <div className="brightness drop-shadow-2xl  m-16 rounded-3xl sm:flex  cunt00" >
        <div className="bg-sky-200/25 backdrop-blur-xl text-center sm:text-left rounded-l-3xl cunt11" >
          <div className="pt-10 sm:py-1 tracking-normal lg:text-2xl text-left text-semibold px-6 sm:mt-5 ml-2 mr-3 border-b-2 border-sky-100/25">Chat Room</div>
          {!flagChat ?
            <div className="pl-4 rounded-l-lg bg-sky-200/25 mt-8 ml-2 ">
              <button className=" py-2 light text-start tracking-normal text-xl rounded-lg " onClick={() => { setFlagChat(0); }}>Room 1</button><br />
            </div>
            :
            <div className="pl-4  mt-8 ml-2 ">
              <button className=" py-2 light text-start tracking-normal text-xl rounded-lg " onClick={() => { setFlagChat(0); }}>Room 1</button><br />
            </div>
          }
          {!flagChat ?
            <div className="pl-4 mt-2 ml-2 ">
            <button className="py-2 light text-start tracking-normal text-xl rounded-lg " onClick={() => { setFlagChat(1) }}>Room 2</button>
          </div>
            :
            <div className="pl-4 rounded-l-lg bg-sky-200/25 mt-2 ml-2 ">
            <button className="py-2 light text-start tracking-normal text-xl rounded-lg " onClick={() => { setFlagChat(1) }}>Room 2</button>
          </div>
          }
          

        </div>
        <div className="cunt22  bg-sky-200/50 backdrop-blur-xl rounded-r-3xl sm:pr-5">
          <p className=" mt-3 ml-5 pl-4 sm:text-left text-4xl pb-2 text-center border-b-2 border-sky-100/25">Room</p>
          <div className="">
            <div className="ml-4">
              {!flagChat
                ?
                <div id="chat-box" className="overflow-y-auto p-4 chat-box">
                  <p>
                    {
                      texts.map((iterate, index) => <div>
                        {iterate.name === "Niranjan"
                          ?
                          <div className="py-2 mb-2">
                            <p className='text-right mb-2 '>{iterate.name}:</p>
                            {iterate.text.length > 90 ? <p className='text-right '><div className='text-left py-2 pr-2 pl-2 rounded-lg text-black bg-slate-300'>{iterate.text}</div></p> :
                              <p className='text-right '><span className='py-2 pr-2 pl-2 rounded-lg text-black bg-slate-300'>{iterate.text}</span></p>}
                          </div>
                          :
                          <div className="py-2 mb-3">
                            <p className='text-left mb-2'>{iterate.name}:</p>
                            {iterate.text.length > 90 ?
                              <div className='text-left py-2 pl-2 pr-2 text-black bg-slate-300 rounded-lg'>{iterate.text}</div>
                              :
                              <span className='text-left py-2 pl-2 pr-2 text-black bg-slate-300 rounded-lg'>{iterate.text}</span>}
                          </div>}
                      </div>
                      )}
                  </p>
                </div>
                :
                <div id="chat-box" className="overflow-y-auto p-4 chat-box">
                  <p>
                    {
                      texts1.map((iterate, index) => <div>
                        {iterate.name === "Naruto"
                          ?
                          <div className="py-2 mb-2">
                            <p className='text-right mb-2 '>{iterate.name}:</p>
                            {iterate.text.length > 90 ? <p className='text-right '><div className='text-left py-2 pr-2 pl-2 rounded-lg text-black bg-slate-300'>{iterate.text}</div></p> :
                              <p className='text-right '><span className='py-2 pr-2 pl-2 rounded-lg text-black bg-slate-300'>{iterate.text}</span></p>}
                          </div>
                          :
                          <div className="py-2 mb-3">
                            <p className='text-left mb-2'>{iterate.name}:</p>
                            {iterate.text.length > 90 ?
                              <div className='text-left py-2 pl-2 pr-2 text-black bg-slate-300 rounded-lg'>{iterate.text}</div>
                              :
                              <span className='text-left py-2 pl-2 pr-2 text-black bg-slate-300 rounded-lg'>{iterate.text}</span>}
                          </div>}
                      </div>
                      )}
                  </p>
                </div>}
              <div className='flex'>
                <input value={value} className="msg-box px-3 text-black py-2 rounded-lg" placeholder="Enter your message..." onKeyDown={(e) => { handleInputChange(e) }} onChange={(e) => { handleInputChange(e) }} />
                <button className="ml-auto px-3 placeholder:text-neutral/100 bg-slate-300/75 hover:bg-neutral-400/25  py-2 rounded-lg" onClick={handleSend}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Hmm;