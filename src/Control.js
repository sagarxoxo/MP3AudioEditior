// import React from 'react'
import React, { useState } from 'react';
import upload from '../src/upload.png'
import { Slider } from '@mui/joy';

const users = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
const Control = () => {

// 
const [selected, setSelected] = useState(0);
  
const handleAssigneeOnClick = () => {
  setSelected(prev => {
    if (prev === users.length - 1) {
      return 0;
    } else {
      return prev + 1;
    }
  });
};
const handleAssigneeOnClick1 = () => {
    setSelected(prev => {
      if (prev < 1) {
        return 11;
      } else {
        return prev - 1;
      }
    });
  };
// 

    
    const [count , setCount]=useState(100);

    const increment =()=> {
      return  setCount(Number(count)+1);
    }
    
    const decrement =()=> {

        if(count>0){
            setCount(count-1);
           
        }else{
            alert('Sorry ! Zero Limit Reached')
        }

        
      }

      let handleChange = (e)=>{
        setCount(e.target.value);
       }


      const [shiftcount , setshiftCount]=useState(50);

      const incrementshift =()=> {
        return  setshiftCount(Number(shiftcount)+1);
      }
      
      const decrementshift =()=> {
  
          if(shiftcount>0){
              setshiftCount(shiftcount-1);
             
          }else{
              alert('Sorry ! Zero Limit Reached')
          }
  
          
        }
       
      let handleChangeshift = (e)=>{
        setshiftCount(e.target.value);
       }

    const [colorval1,setColorval1]=useState(true);
    const [colorval2,setColorval2]=useState(true);
    const [colorval3,setColorval3]=useState(true);
    const [play,setPlay]=useState(true);
    
  return (
    <>
    <div className='container'>
        <div className="row">
        <div className="col-lg-3 col-12">
            <div className="left_btn_outer">
                <div>
                    <p style={{textAlign:'center',color:'white',fontSize:'11px',margin:'0px',paddingBottom:'10px'}}>Filter</p>
                </div>
            <div className='left_btn_div'>
               
<div className='btn_1'>
<button onClick={() => setColorval1(!colorval1)} style={{background:colorval1 ? '#0ea86a' : 'transparent ' }}>
<svg style={{margin:'auto'}} width="14" height="14" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.719 5.063A8.973 8.973 0 0 1 21 12c0 4.969-4.031 9-9 9s-9-4.031-9-9a9 9 0 0 1 3.234-6.938"></path>
    <path d="M12 3v9"></path>
</svg>
</button>
<p>Low</p>
</div>
<div className='btn_1'>
<button onClick={() => setColorval2(!colorval2)} style={{background:colorval2 ? 'transparent ' : '#0ea86a' }}>
<svg style={{margin:'auto'}} width="14" height="14" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.719 5.063A8.973 8.973 0 0 1 21 12c0 4.969-4.031 9-9 9s-9-4.031-9-9a9 9 0 0 1 3.234-6.938"></path>
    <path d="M12 3v9"></path>
</svg>
</button>
<p>Mid</p>
</div>
<div className='btn_1'>
<button onClick={() => setColorval3(!colorval3)} style={{background:colorval3 ? '#0ea86a' : 'transparent ' }}>
<svg style={{margin:'auto'}} width="14" height="14" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.719 5.063A8.973 8.973 0 0 1 21 12c0 4.969-4.031 9-9 9s-9-4.031-9-9a9 9 0 0 1 3.234-6.938"></path>
    <path d="M12 3v9"></path>
</svg>
</button>
<p>High</p>
</div>
            </div>
        </div>
        </div>

        <div className="col-lg-6 col-12">
            <div className="media_outer">

            <div className="media_player">
                  <div className='cont_1'>
         <span className='minus'  onClick={decrement}><svg width="10" height="10" fill="none" stroke="#3a3f3d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.75 12H5.25"></path>
</svg></span>
         <input className='result' value={count} onChange={handleChange}  />
         <span className='plus' onClick={increment} ><svg width="10" height="10" fill="none" stroke="#3a3f3d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.25v13.5"></path>
    <path d="M18.75 12H5.25"></path>
</svg></span>
<div >
                <p>Tempo</p>
            </div>
                  </div>


                  <div className='cont_2' style={{width:'80px',textAlign:'center'}}>
         <span className='minus' onClick={handleAssigneeOnClick1}><svg width="10" height="10" fill="none" stroke="#3a3f3d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.75 12H5.25"></path>
</svg></span>
  <input className='result' value={users[selected]}  readOnly />
         <span className='plus'  onClick={handleAssigneeOnClick}><svg width="10" height="10" fill="none" stroke="#3a3f3d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.25v13.5"></path>
    <path d="M18.75 12H5.25"></path>
</svg></span>
<div >
                <p>Pitch</p>
            </div>
                  </div>
                  <div className="cont_3">
                    <div className="play_btn">
                        <button onClick={() => setPlay(!play)}  >
                       { play ?  <svg width="39" height="39" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 4.5h-.75v15H9v-15Z"></path>
    <path d="M15.75 4.5H15v15h.75v-15Z"></path>
</svg> : <svg style={{marginLeft:'5px'}} width="39" height="39" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="m4.5 21 15-9-15-9v18Z"></path>
</svg> }
                       
                        </button>
                    </div>
                  </div>
                  <div className='cont_4'>
         <span className='minus' onClick={decrementshift}><svg width="10" height="10" fill="none" stroke="#3a3f3d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.375 5.25 8.625 12l6.75 6.75"></path>
</svg></span>
         {/* <span className='result' contentEditable="true">{shiftcount}</span> */}
         <input className='result' value={shiftcount} onChange={handleChangeshift}  />
         <span className='plus' onClick={incrementshift}><svg width="10" height="10" fill="none" stroke="#3a3f3d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="m8.625 5.25 6.75 6.75-6.75 6.75"></path>
</svg></span>
            <div className='extra_small'>
                <span>ms</span>
            </div>
<div >
                <p style={{padding:'0px'}}>Shift</p>
            </div>
                  </div>
                  <div className="cont_5">
                    <div className="vol_part">
                      <span style={{    display: 'flex',justifyContent:'space-between'}}>
                        <span className='vol'><svg width="22" style={{marginTop:'6px',marginRight:'8px'}} height="22" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.39 9H4.125a.375.375 0 0 0-.375.375v5.25a.375.375 0 0 0 .375.375H7.39a.75.75 0 0 1 .475.17l4.288 3.516a.376.376 0 0 0 .597-.303V5.617a.375.375 0 0 0-.597-.302L7.865 8.831A.75.75 0 0 1 7.39 9Z"></path>
    <path d="M16.5 15c.457-.91.75-1.913.75-3 0-1.102-.281-2.081-.75-3"></path>
    <path d="M18.75 17.25c.913-1.594 1.5-3 1.5-5.25s-.563-3.642-1.5-5.25"></path>
</svg></span>
<span className='range'>
  {/* <input type="range" /> */}
  <Slider
  color="#0ea86a"
  disabled={false}
  marks={false}
  orientation="horizontal"
  size="sm"
  valueLabelDisplay="off"
  variant="solid"
  style={{width:'75%',padding:'0px',paddingLeft:'10px'}}
  
/>
</span>
</span>
<div >
                <p>Volume</p>
            </div>
                    </div>
             
                  </div>
            </div>
        
        </div>
        </div>

        <div className="col-lg-3 col-12" style={{margin:'auto'}}>
        {/* <div class="drop-zone">
    <span class="drop-zone__prompt">Upload Audio File</span>
    <input type="file" name="myFile" class="drop-zone__input" />
  </div> */}

<div class="upload-btn-wrapper">
  <button class="btn1"><img src={upload} alt="" srcset="" /> <span > Upload audio file </span></button>
  <input type="file" name="myfile" />
</div>

        </div>
        </div>
      
    </div>
    </>
  )
}

export default Control