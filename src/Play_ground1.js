import React from 'react'
import Draggable from "react-draggable";
const Play_ground = () => {
  return (
      <>
      <section className='play_section'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="play_heading">
                        <h5 className='text-center'>Playground</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='col-lg-12 p-0'>
                   <div className="playground_main">
                    {/* <Draggable> */}
                     <button>
                    <div id="drag1" className="small_play_box_o"  ondragstart="drag(event)">

                    </div>
                    </button>
                    {/* </Draggable>
                    <Draggable> */}
                    <button>
                    <div id="drag2" className="small_play_box_g"  ondragstart="drag(event)">

                     </div>
                     </button>
                    <button>
                    <div id="drag2" className="small_play_box_g"  ondragstart="drag(event)">

                     </div>
                     </button>
                    <button>
                    <div id="drag2" className="small_play_box_g"  ondragstart="drag(event)">

                     </div>
                     </button>
                    <button>
                    <div id="drag2" className="small_play_box_g" style={{marginLeft:'7px'}}  ondragstart="drag(event)">

                     </div>
                     </button>
                    <button>
                    <div id="drag2" className="small_play_box_g"  ondragstart="drag(event)">

                     </div>
                     </button>
                    <button>
                    <div id="drag2" className="small_play_box_g"  ondragstart="drag(event)">

                     </div>
                     </button>
                    <button>
                    <div id="drag2" className="small_play_box_g"  ondragstart="drag(event)">

                     </div>
                     </button>
                    <button>
                    <div id="drag2" className="small_play_box_g"  style={{marginLeft:'7px'}} ondragstart="drag(event)">

                     </div>
                     </button>
                    <button>
                    <div id="drag2" className="small_play_box_g"  ondragstart="drag(event)">

                     </div>
                     </button>
                    <button>
                    <div id="drag2" className="small_play_box_g"  ondragstart="drag(event)">

                     </div>
                     </button>
                    <button>
                    <div id="drag2" className="small_play_box_g"  ondragstart="drag(event)">

                     </div>
                     </button>
                    <button>
                    <div id="drag2" className="small_play_box_g" style={{marginLeft:'7px'}}  ondragstart="drag(event)">

                     </div>
                     </button>
                    <button>
                    <div id="drag2" className="small_play_box_g"  ondragstart="drag(event)">

                     </div>
                     </button>
                    <button>
                    <div id="drag2" className="small_play_box_g"  ondragstart="drag(event)">

                     </div>
                     </button>
                     <button>
                    <div id="drag2" className="small_play_box_g"  ondragstart="drag(event)">

                     </div>
                     </button>

                     {/* </Draggable> */}
                   </div>
                </div>
            </div>
        </div>
      </section>
      </>
  )
}

export default Play_ground