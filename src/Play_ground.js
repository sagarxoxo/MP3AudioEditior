import React from "react";
import Draggable from "react-draggable";
const Play_ground = ({ playgroundBox }) => {
  return (
    <>
      <section className="play_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="play_heading">
                <h5 className="text-center">Playground</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="playground_main">
                {/* <Draggable> */}
                <button>
                  <div
                    id="drag1"
                    className="small_play_box_g box_Playground 0"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[0]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[0]?.img64}
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
                    className="small_play_box_g box_Playground 1"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[1]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[1]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 2"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[2]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[2]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 3"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[3]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[3]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button style={{ marginLeft: "5px" }}>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 4"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[4]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[4]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 5"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[5]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[5]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 6"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[6]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[6]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 7"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[7]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[7]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button style={{ marginLeft: "5px" }}>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 8"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[8]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[8]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 9"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[9]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[9]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 10"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[10]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[10]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 11"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[11]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[11]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button style={{ marginLeft: "5px" }}>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 12"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[12]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[12]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 13"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[13]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[13]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 14"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[14]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[14]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 15"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[15]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[15]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                {/* next */}
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 16"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[16]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[16]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 17"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[17]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[17]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 18"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[18]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[18]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 19"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[19]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[19]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button style={{ marginLeft: "5px" }}>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 20"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[20]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[20]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 21"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[21]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[21]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 22"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[22]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[22]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 23 text-end"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[23]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[23]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button style={{ marginLeft: "5px" }}>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 24"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[24]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[24]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 25"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[25]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[25]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 26"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[26]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[26]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 27"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[27]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[27]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button style={{ marginLeft: "5px" }}>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 28"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[28]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[28]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 29"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[29]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[29]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 30"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[30]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[30]?.img64}
                        alt=""
                        srcset=""
                      />
                    )}
                  </div>
                </button>
                <button>
                  <div
                    id="drag2"
                    className="small_play_box_g box_Playground 31"
                    ondragstart="drag(event)"
                  >
                    {playgroundBox[31]?.img64 && (
                      <img
                        className="timeline_Img"
                        src={playgroundBox[31]?.img64}
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

export default Play_ground;
