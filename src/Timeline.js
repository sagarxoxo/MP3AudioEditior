import React, { useState } from "react";

const Timeline = ({ timelineBox }) => {
  const [lock, setLock] = useState(true);
  const [lock1, setLock1] = useState(true);
  return (
    <>
      <section className="timeline_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <div className="play_heading">
                <h5 className="text-center">Timeline</h5>
              </div>
            </div>
            <div className="col-lg-3">
              {/* <div className='bar_counter text-end'>
         <span className='minus'><svg width="10" height="10" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.75 12H5.25"></path>
</svg></span>
         <span className='result'>8 bars</span>
         <span className='plus'><svg width="10" height="10" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.25v13.5"></path>
    <path d="M18.75 12H5.25"></path>
</svg></span>

                  </div> */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div
                className="playground_main"
                style={{ background: "transparent", height: "unset" }}
              >
                {/* <Draggable> */}
                <button>
                  <div
                    id="drag1"
                    className="small_play_box_g box_Timeline 0"
                    style={{ marginLeft: "3px", marginTop: "2px" }}
                    ondragstart="drag(event)"
                  >
                    {timelineBox[0]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[0]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                {/* </Draggable>
                    <Draggable> */}
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 1"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[1]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[1]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 2"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[2]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[2]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 3 text-end"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[3]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[3]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                    <span onClick={() => setLock(!lock)}>
                      {lock ? (
                        <svg
                          width="16"
                          style={{ marginRight: "5px" }}
                          height="16"
                          fill="#ffffff"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19.688 9H16.5V5.25a4.5 4.5 0 1 0-9 0V9H4.312a.563.563 0 0 0-.562.563v13.124a.562.562 0 0 0 .563.563h15.375a.562.562 0 0 0 .562-.563V9.563A.563.563 0 0 0 19.687 9Zm-4.97 0H9.282V5.215a2.719 2.719 0 1 1 5.438 0V9Z"></path>
                        </svg>
                      ) : (
                        <svg
                          width="16"
                          style={{ marginRight: "5px" }}
                          height="16"
                          fill="#ffffff"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19.688 9H9.28V5.215a2.723 2.723 0 0 1 4.644-1.925c.512.523.797 1.228.794 1.96H16.5a4.5 4.5 0 1 0-9 0V9H4.312a.563.563 0 0 0-.562.563v13.124a.562.562 0 0 0 .563.563h15.375a.562.562 0 0 0 .562-.563V9.563A.563.563 0 0 0 19.687 9Z"></path>
                        </svg>
                      )}
                    </span>
                  </div>
                </button>
                <button style={{ marginLeft: "5px" }}>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline  4"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[4]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[4]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline  5"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[5]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[5]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline  6"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[6]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[6]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline  7"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[7]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[7]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button style={{ marginLeft: "5px" }}>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline  8"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[8]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[8]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline  9"
                    ondragstart="drag(event)"
                  >
                    {timelineBox[9]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[9]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline  10"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[10]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[10]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline  11"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[11]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[11]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button style={{ marginLeft: "5px" }}>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 12"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[12]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[12]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline  13"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[13]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[13]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline  14"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[14]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[14]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline  15"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[15]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[15]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 16"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[16]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[16]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 17"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[17]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[17]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 18"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[18]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[18]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 19"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[19]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[19]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button style={{ marginLeft: "5px" }}>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 20"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[20]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[20]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 21"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[21]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[21]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 22"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[22]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[22]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 23 text-end"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[23]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[23]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                    <span onClick={() => setLock1(!lock1)}>
                      {lock1 ? (
                        <svg
                          width="16"
                          style={{ marginRight: "5px" }}
                          height="16"
                          fill="#ffffff"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19.688 9H16.5V5.25a4.5 4.5 0 1 0-9 0V9H4.312a.563.563 0 0 0-.562.563v13.124a.562.562 0 0 0 .563.563h15.375a.562.562 0 0 0 .562-.563V9.563A.563.563 0 0 0 19.687 9Zm-4.97 0H9.282V5.215a2.719 2.719 0 1 1 5.438 0V9Z"></path>
                        </svg>
                      ) : (
                        <svg
                          width="16"
                          style={{ marginRight: "5px" }}
                          height="16"
                          fill="#ffffff"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19.688 9H9.28V5.215a2.723 2.723 0 0 1 4.644-1.925c.512.523.797 1.228.794 1.96H16.5a4.5 4.5 0 1 0-9 0V9H4.312a.563.563 0 0 0-.562.563v13.124a.562.562 0 0 0 .563.563h15.375a.562.562 0 0 0 .562-.563V9.563A.563.563 0 0 0 19.687 9Z"></path>
                        </svg>
                      )}
                    </span>
                  </div>
                </button>
                <button style={{ marginLeft: "5px" }}>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 24"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[24]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[24]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 25"
                    ondragstart="drag(event)"
                  >
                    {timelineBox[25]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[25]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 26"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[26]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[26]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 27"
                    ondragstart="drag(event)"
                  >
                    {timelineBox[27]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[27]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button style={{ marginLeft: "5px" }}>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 28"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[28]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[28]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 29"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[29]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[29]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 30"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[30]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[30]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Timeline 31"
                    ondragstart="drag(event)"
                  >
                    {" "}
                    {timelineBox[31]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={timelineBox[31]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>

                {/* </Draggable> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
