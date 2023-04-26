import React from 'react'

const Orangebar = (props) => {
  return (
         <> 
                <div  className="col-lg-3" wid={props.wid}>
    
    <div className='bar_img'>
    <button>
    <img src={props.img_link}  alt="" />
    </button>
    </div>
    
           </div>
         </>
  )
}

export default Orangebar