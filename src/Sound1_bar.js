import React, { useState } from 'react';
import img1 from '../src/wave1.png'
import img2 from '../src/wave2.png'
import img3 from '../src/wave3.png'
// import img1_64 from '../src/bars 64/images/main_bar_01_01.png'
import Subbars from './Bars_component/Subbars';
import Bars64_api from './Bars_component/Bars64_api';
const Sound_bar = () => {

    // 
    const [name, setName] = useState(4);

    const handleInput = event => {
      setName(event.target.value);
    };
    const logValue = () => {
      console.log(name);
    };
 
    // 
    const [inputText, setInputText] = useState("")
    const [bar , setBar]=useState(4);

    const incrementbar =()=> {

             if(Number(bar)!==8){       
            setName(Number(bar)+bar);
             }

        if(bar<8){
      return  setBar(Number(bar)+bar);
        }
        else{
            return  setBar(8);
        }
    }
    
    const decrementbar =()=> {

        if(bar>1){
            setBar(bar/2);
            setName(bar/2);
        }else{
            alert('Sorry ! Zero Limit Reached')
        }

        
      }

      let handleChangebar = (e)=>{
        setBar(e.target.value);
       }

  return (
    <>
    <section className='sound_bar_section'>
    <div className='container'>
<div className='row'>
<div className="col-lg-3">
<div className='bar_counter'>
         <span className='minus' onClick={decrementbar}><svg width="10" height="10" fill="none" stroke="#3a3f3d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.75 12H5.25"></path>
</svg></span>
         {/* <span className='result'>4 bars</span> */}
         <input className='result' value={bar} onChange={handleInput} />
         <span className='plus' onClick={incrementbar} ><svg  width="10" height="10" fill="none" stroke="#3a3f3d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.25v13.5"></path>
    <path d="M18.75 12H5.25"></path>
</svg></span>

                  </div>
</div>
<div className="col-lg-6">
<div className="play_heading">
                        <h5 className='text-center'>Waveform</h5>
                    </div>
</div>



</div>
{/* <input placeholder="Enter name"/>
      <button onClick={logValue}>Log value</button> */}
<div className="row bars">
    {/* {(name==2)? ba} */}
    <div id="one" style={{display:(name==1) ? 'flex' : 'none'}}>
    {/* <Subbars img_link={img1} /> */}
    <div className='all-bars'>
    {Bars64_api.map((val) => {
        return(     <div className="bar_img">
                 <img src={val.img64} alt="" srcset="" />
             </div>)

                })}
        
        {/* <div className="bar_img">
            <img src={img1_64} alt="" srcset="" />
        </div> */}
    </div>
   </div>
   <div id="two" style={{display:(name==2) ? 'flex' : 'none'}}>
   <Subbars img_link={img1} />
   <Subbars img_link={img2} />
 
    </div>
    <div id="four" style={{display:(name==4) ? 'flex' : 'none'}}>
    <Subbars img_link={img1} />
    <Subbars img_link={img2} />
    <Subbars img_link={img3} />
    <Subbars img_link={img3} />
    </div>
    
    <div id="eight" style={{display:(name==8) ? 'flex' : 'none'}}>
       <div  className="col-lg-3" style={{width:'12.5%'}}>
    
    <div className='bar_img'>
    <button>
    <img src={img1} alt="" />
    </button>
    </div>
       </div>
       <div className="col-lg-3" style={{width:'12.5%'}}>
   
<div className='bar_img'>
<button >
<img src={img2} alt="" />
</button>
</div>

       </div>
       <div className="col-lg-3" style={{width:'12.5%'}}>
   
   <div className='bar_img'>
   <button>
   <img src={img3} alt="" />
   </button>
   </div>
   
       </div>
       <div className="col-lg-3" style={{width:'12.5%'}}>
   
   <div className='bar_img'>
   <button>
   <img src={img3} alt="" />
   </button>
   </div>
   
       </div>
       <div className="col-lg-3" style={{width:'12.5%'}}>
   
   <div className='bar_img'>
   <button>
   <img src={img3} alt="" />
   </button>
   </div>
   
       </div>
       <div className="col-lg-3" style={{width:'12.5%'}}>
   
   <div className='bar_img'>
   <button>
   <img src={img3} alt="" />
   </button>
   </div>
   
       </div>
       <div className="col-lg-3" style={{width:'12.5%'}}>
   
   <div className='bar_img'>
   <button>
   <img src={img3} alt="" />
   </button>
   </div>
   
       </div>
       <div className="col-lg-3" style={{width:'12.5%'}}>
   
   <div className='bar_img'>
   <button>
   <img src={img3} alt="" />
   </button>
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
  )
}

export default Sound_bar