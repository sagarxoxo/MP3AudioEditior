import React, { useState } from "react";
import img1 from "../src/wave1.png";
import img2 from "../src/wave2.png";
import img3 from "../src/wave3.png";
import bar1 from "../src/bars2/images/main_bar_2_01.png";
import bar2 from "../src/bars2/images/main_bar_2_02.png";
// import img1_64 from '../src/bars 64/images/main_bar_01_01.png'
import Subbars from "./Bars_component/Subbars";
import Bars64_api from "./Bars_component/Bars64_api";
import Bars32_api from "./Bars_component/Bars32_api";
import Bars16_api from "./Bars_component/Bars16_api";
import Bars8_api from "./Bars_component/Bars8_api";
import Bars4_api from "./Bars_component/Bars4_api";
const users = ["1 Beat", "2 Beats", "1 Bar", "2 Bars", "4 Bars", "8 Bar"];
const Sound_bar = () => {
  //
  const [name, setName] = useState("2 Bars");

  const handleInput = (event) => {
    setName(event.target.value);
  };
  const logValue = () => {
    console.log(name);
  };

  //
  const [inputText, setInputText] = useState("");

  const [selected, setSelected] = useState(4);

  const incrementbar = () => {
    setSelected((prev) => {
      if (prev === users.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const decrementbar = () => {
    setSelected((prev) => {
      if (prev < 1) {
        return 5;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <>
      <section className="sound_bar_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="bar_counter">
                <span className="minus" onClick={decrementbar}>
                  <svg
                    width="10"
                    height="10"
                    fill="none"
                    stroke="#3a3f3d"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.75 12H5.25"></path>
                  </svg>
                </span>
                {/* <span className='result'>4 bars</span> */}
                <input
                  className="result"
                  value={users[selected]}
                  style={{ width: "80px" }}
                />
                <span className="plus" onClick={incrementbar}>
                  <svg
                    width="10"
                    height="10"
                    fill="none"
                    stroke="#3a3f3d"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 5.25v13.5"></path>
                    <path d="M18.75 12H5.25"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="play_heading">
                <h5 className="text-center">Waveform </h5>
              </div>
            </div>
          </div>
          {/* <input placeholder="Enter name"/>
      <button onClick={logValue}>Log value</button> */}
          <div className="row bars">
            {/* {(name==2)? ba} */}
            <div id="one" style={{ display: selected == 0 ? "flex" : "none" }}>
              {/* <Subbars img_link={img1} /> */}
              <div className="all-bars all1">
                {Bars64_api.map((val, index) => {
                  return (
                    <div className={`bar_img bars64 ${index}`}>
                      <img src={val.img64} alt="" srcset="" />
                    </div>
                  );
                })}

                {/* <div className="bar_img">
            <img src={img1_64} alt="" srcset="" />
        </div> */}
              </div>
            </div>
            <div id="two" style={{ display: selected == 1 ? "flex" : "none" }}>
              {/* <Subbars img_link={img1} />
   <Subbars img_link={img2} /> */}
              <div className="all-bars all2">
                {Bars32_api.map((val, index) => {
                  return (
                    <div className={`bar_img bars32 ${index}`}>
                      <img src={val.img32} alt="" srcset="" />
                    </div>
                  );
                })}

                {/* <div className="bar_img">
            <img src={img1_64} alt="" srcset="" />
        </div> */}
              </div>
            </div>
            <div id="four" style={{ display: selected == 2 ? "flex" : "none" }}>
              {/* <Subbars img_link={img1} />
    <Subbars img_link={img2} />
    <Subbars img_link={img3} />
    <Subbars img_link={img3} /> */}
              <div className="all-bars all3">
                {Bars16_api.map((val, index) => {
                  return (
                    <div className={`bar_img bars16 ${index}`}>
                      <img src={val.img16} alt="" srcset="" />
                    </div>
                  );
                })}

                {/* <div className="bar_img">
            <img src={img1_64} alt="" srcset="" />
        </div> */}
              </div>
            </div>

            <div
              id="eight"
              style={{ display: selected == 3 ? "flex" : "none" }}
            >
              <div className="all-bars all4">
                {Bars8_api.map((val, index) => {
                  return (
                    <div className={`bar_img bars8 ${index}`}>
                      <img src={val.img8} alt="" srcset="" />
                    </div>
                  );
                })}

                {/* <div className="bar_img">
            <img src={img1_64} alt="" srcset="" />
        </div> */}
              </div>
            </div>

            <div
              id="eight"
              style={{ display: selected == 4 ? "flex" : "none" }}
            >
              <div className="all-bars all5">
                {Bars4_api.map((val, index) => {
                  return (
                    <div className={`bar_img bars4 ${index}`}>
                      <img src={val.img4} alt="" srcset="" />
                    </div>
                  );
                })}

                {/* <div className="bar_img">
            <img src={img1_64} alt="" srcset="" />
        </div> */}
              </div>
            </div>
            <div
              id="eight"
              style={{ display: selected == 5 ? "flex" : "none" }}
            >
              <div className="all-bars all6">
                <div className="bar_img">
                  <img src={bar1} alt="" srcset="" />
                </div>
                <div className="bar_img">
                  <img src={bar2} alt="" srcset="" />
                </div>
              </div>
            </div>

            {/* <div id="eight" style={{display:(name==8) ? 'flex' : 'none'}}>
       <div className="col-lg-3">
   
   <div className='bar_img'>
   <button>
   <img src={img3} alt="" />
   </button>
   </div>
   
       </div>
       <div className="col-lg-3">
   
   <div className='bar_img'>
   <button>
   <img src={img3} alt="" />
   </button>
   </div>
   
       </div>
       <div className="col-lg-3">
   
   <div className='bar_img'>
   <button>
   <img src={img3} alt="" />
   </button>
   </div>
   
       </div>
       <div className="col-lg-3">
   
   <div className='bar_img'>
   <button>
   <img src={img3} alt="" />
   </button>
   </div>
   
       </div>
    </div> */}
            {/* <div className="col-lg-3" style={{display:(name==1) ? 'block' : 'none'}}>
   
<div className='bar_img'>
<button>
<img src={img3} alt="" />
</button>
</div>

    </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sound_bar;
