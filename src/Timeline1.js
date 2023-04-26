import React, { useState } from "react";

const Timeline = () => {
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

          <div className="row main_timeline justify-content-center">
            <div className="col-3">
              <div className="timeline_big">
                <div className="row ">
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div
                        className="timeline_small_g"
                        id="div1"
                        ondrop="drop(event)"
                        ondragover="allowDrop(event)"
                      ></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div
                        className="timeline_small_g"
                        id="div2"
                        ondrop="drop(event)"
                        ondragover="allowDrop(event)"
                      ></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div
                        className="timeline_small_g"
                        id="div3"
                        ondrop="drop(event)"
                        ondragover="allowDrop(event)"
                      ></div>
                    </button>
                  </div>
                  <div className="col-3 p-1 mt-0 mb-0" style={{ margin: "0" }}>
                    <button>
                      <div
                        className="timeline_small_g text-end"
                        id="div4"
                        ondrop="drop(event)"
                        ondragover="allowDrop(event)"
                      >
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="timeline_big">
                <div className="row ">
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_g"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_g"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_g"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_g"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="timeline_big">
                <div className="row ">
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_g"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_g"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_g"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_g"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="timeline_big">
                <div className="row ">
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_g"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_g"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_g"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_g"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row main_timeline justify-content-center">
            <div className="col-3">
              <div className="timeline_big">
                <div className="row ">
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_uni"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_uni"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_uni"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_uni"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="timeline_big">
                <div className="row ">
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_o"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_o"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_o"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1 mt-0 mb-0" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_o text-end">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="timeline_big">
                <div className="row ">
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_uni"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_uni"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_uni"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_uni"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="timeline_big">
                <div className="row ">
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_uni"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_uni"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_uni"></div>
                    </button>
                  </div>
                  <div className="col-3 p-1" style={{ margin: "0" }}>
                    <button>
                      <div className="timeline_small_uni"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
