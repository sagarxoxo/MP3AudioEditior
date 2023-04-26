import React, { useState } from 'react';
import drum from '../src/drum.png'
import icon1 from '../src/icon1.png'
import icon2 from '../src/icon2.png'
import icon3 from '../src/icon3.png'
import icon4 from '../src/icon4.png'
const users = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"];
const Footer = () => {

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
    const [tempo , setTempo]=useState(1);

    const incrementempo =()=> {
      return  setTempo(Number(tempo)+1);
    }
    
    const decrementempo =()=> {

        if(tempo>0){
            setTempo(tempo-1);
           
        }else{
            alert('Sorry ! Zero Limit Reached')
        }

        
      }

      let handleChangetempo = (e)=>{
        setTempo(e.target.value);
       }


    

  return (
   <>
   <section className='footer_section'>
<div className="container">
<div className="row py-2">
    <div className="col-lg-6">
        <div className='left_footer' >
<span>
{/* <img src={drum} alt="" srcset="" style={{marginTop:'-7px'}} /> */}
<svg xmlns="http://www.w3.org/2000/svg" style={{marginTop:'-8px'}} width="20" height="20" fill='white' viewBox="0 0 512 512"><path d="M501.2 76.1c11.1-7.3 14.2-22.1 6.9-33.2s-22.1-14.2-33.2-6.9L370.2 104.5C335.8 98.7 297 96 256 96C114.6 96 0 128 0 208V368c0 31.3 27.4 58.8 72 78.7V344c0-13.3 10.7-24 24-24s24 10.7 24 24V463.4c33 8.9 71.1 14.5 112 16.1V376c0-13.3 10.7-24 24-24s24 10.7 24 24V479.5c40.9-1.6 79-7.2 112-16.1V344c0-13.3 10.7-24 24-24s24 10.7 24 24V446.7c44.6-19.9 72-47.4 72-78.7V208c0-41.1-30.2-69.5-78.8-87.4l67.9-44.5zM307.4 145.6l-64.6 42.3c-11.1 7.3-14.2 22.1-6.9 33.2s22.1 14.2 33.2 6.9l111.1-72.8c14.7 3.2 27.9 7 39.4 11.5C458.4 181.8 464 197.4 464 208c0 .8-2.7 17.2-46 35.9C379.1 260.7 322 272 256 272s-123.1-11.3-162-28.1C50.7 225.2 48 208.8 48 208c0-10.6 5.6-26.2 44.4-41.3C130.6 151.9 187.8 144 256 144c18 0 35.1 .5 51.4 1.6z"/></svg>
</span>
<span>
<select id="cars" name="carlist" form="carform">
  <option value="volvo">Standard Bap</option>
  <option value="volvo">Standard Bap</option>
  <option value="volvo">Standard Bap</option>
  <option value="volvo">Standard Bap</option>
</select>
</span>
        </div>
    </div>
    <div className='col-lg-6'>
<div className='right-footer text-end'>
<span><a ><img src={icon1} alt="" srcset="" /></a></span>
<span><a ><img src={icon2} alt="" srcset="" /></a></span>
<span><a ><img src={icon3} alt="" srcset="" /></a></span>
<span><a ><img src={icon4} alt="" srcset="" /></a></span>
</div>
    </div>
    <div className='col-12 py-2' style={{marginLeft:'38px'}}>
        <div className='footer_count_main'>
        <div className='footer_count' style={{position:'relative'}}>
         <span className='minus' onClick={decrementempo}><svg width="10" height="10" fill="none" stroke="#3a3f3d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.75 12H5.25"></path>
</svg></span>
         {/* <span className='result' contentEditable="true">x{tempo}</span> */}
         <span style={{color:'white',position:'absolute',left:'20px',top:'2px'}}>x</span><input style={{marginLeft:'6px'}} className='result' value={tempo} onChange={handleChangetempo}  />

         <span className='plus' onClick={incrementempo}><svg width="10" height="10" fill="none" stroke="#3a3f3d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.25v13.5"></path>
    <path d="M18.75 12H5.25"></path>
</svg></span>
<div >
                <p>Tempo</p>
            </div>
                  </div>   <div className='footer_count'>
         <span className='minus' onClick={handleAssigneeOnClick1}><svg width="10" height="10" fill="none" stroke="#3a3f3d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.75 12H5.25"></path>
</svg></span>
         {/* <span className='result' contentEditable="true" >{pitch}</span> */}
         <input className='result' value={users[selected]}  readOnly  />
         <span className='plus' onClick={handleAssigneeOnClick}><svg width="10" height="10" fill="none" stroke="#3a3f3d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.25v13.5"></path>
    <path d="M18.75 12H5.25"></path>
</svg></span>
<div >
                <p>Pitch</p>
            </div>
                  </div>
        </div>
 
    </div>
</div>
</div>
   </section>
   </>
  )
}

export default Footer