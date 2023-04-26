import logo from "./logo.svg";
import "./App.css";
import Control from "./Control";
import Sound_bar from "./Sound_bar";
import Play_ground from "./Play_ground";
import Timeline from "./Timeline";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Bars4_api from "./Bars_component/Bars4_api";
import Bars64_api from "./Bars_component/Bars64_api";

function App() {
  const [timelineBox, setTimelineBox] = useState([...Array(32)]);
  const [playgroundBox, setPlaygroundBox] = useState([...Array(32)]);

  useEffect(() => {
    const draggables = document.querySelectorAll(".bar_img");
    const containersPlayground = document.querySelectorAll(".box_Playground");
    const containersTimeline = document.querySelectorAll(".box_Timeline");

    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
        draggable.classList.add("img_size_fit");
      });

      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
      });
    });

    // containersPlayground.forEach((container) => {
    //   container.addEventListener("dragover", (e) => {
    //     e.preventDefault();
    //     const afterElement = getDragAfterElement(container, e.clientY);
    //     const checkIfHasImg = container.querySelector(".img_size_fit");
    //     // console.log(
    //     //   "ch",
    //     //   checkIfHasImg,
    //     //   checkIfHasImg && checkIfHasImg.classList.contains("img_size_fit")
    //     // );
    //     const checkAttribute =
    //       checkIfHasImg && checkIfHasImg.classList.contains("img_size_fit");
    //     const draggable = document.querySelector(".dragging");
    //     if (!checkAttribute) {
    //       if (afterElement === null) {
    //         container.appendChild(draggable);
    //       } else {
    //         container.insertBefore(draggable, afterElement);
    //       }
    //     }
    //   });
    // }, []);

    const showCaseofBits = (container, setFun) => {
      container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector(".dragging");
        const checkHasBars4 = draggable.classList.contains("bars4");
        const checkHasBars8 = draggable.classList.contains("bars8");
        const checkHasBars16 = draggable.classList.contains("bars16");
        const checkHasBars32 = draggable.classList.contains("bars32");
        const checkHasBars64 = draggable.classList.contains("bars64");

        const indexOfBar = Number(draggable.className.split(" ")[2]);
        const positionOfBox = Number(container.className.split(" ")[2]);

        let positionBoxFix;
        if (positionOfBox < 4) {
          positionBoxFix = checkHasBars8 ? 0 : 0;
        } else if (positionOfBox < 8) {
          positionBoxFix = checkHasBars8 ? 0 : 4;
        } else if (positionOfBox < 12) {
          positionBoxFix = checkHasBars8 ? 8 : 8;
        } else if (positionOfBox < 16) {
          positionBoxFix = checkHasBars8 ? 8 : 12;
        } else if (positionOfBox < 20) {
          positionBoxFix = checkHasBars8 ? 16 : 16;
        } else if (positionOfBox < 24) {
          positionBoxFix = checkHasBars8 ? 16 : 20;
        } else if (positionOfBox < 28) {
          positionBoxFix = checkHasBars8 ? 24 : 24;
        } else if (positionOfBox < 32) {
          positionBoxFix = checkHasBars8 ? 24 : 28;
        }
        console.log(positionBoxFix);
        if (afterElement == null) {
          if (checkHasBars4) {
            for (let i = 0; i < 4; i++) {
              indexOfBar === i &&
                setFun((prevData) =>
                  positionOfBox
                    ? [
                        ...prevData.slice(0, positionBoxFix),
                        ...Bars64_api.slice(16 * i, 16 * (i + 1)),
                      ]
                    : []
                );
            }
          } else if (checkHasBars8) {
            for (let i = 0; i < 8; i++) {
              indexOfBar === i &&
                setFun((prevData) =>
                  positionOfBox
                    ? [
                        ...prevData.slice(0, positionBoxFix),
                        ...Bars64_api.slice(8 * i, 8 * (i + 1)),
                      ]
                    : []
                );
            }
          } else if (checkHasBars16) {
            for (let i = 0; i < 16; i++) {
              indexOfBar === i &&
                setFun((prevData) =>
                  positionOfBox
                    ? [
                        ...prevData.slice(0, positionBoxFix),
                        ...Bars64_api.slice(4 * i, 4 * (i + 1)),
                      ]
                    : []
                );
            }
          } else if (checkHasBars32) {
            for (let i = 0; i < 32; i++) {
              indexOfBar === i &&
                setFun((prevData) =>
                  positionOfBox
                    ? [
                        ...prevData.slice(0, positionBoxFix),
                        ...Bars64_api.slice(2 * i, 2 * (i + 1)),
                      ]
                    : []
                );
            }
          } else if (checkHasBars64) {
            for (let i = 0; i < 64; i++) {
              indexOfBar === i &&
                setFun((prevData) =>
                  positionOfBox
                    ? [
                        ...prevData.slice(0, positionBoxFix),
                        ...Bars64_api.slice(1 * i, 1 * (i + 1)),
                      ]
                    : []
                );
            }
          }
        }
      });
    };

    containersTimeline.forEach((containerT) => {
      showCaseofBits(containerT, setTimelineBox);
    }, []);
    containersPlayground.forEach((containerP) => {
      showCaseofBits(containerP, setPlaygroundBox);
    }, []);

    function getDragAfterElement(container, y) {
      const draggableElements = [
        ...container.querySelectorAll(".draggable:not(.dragging)"),
      ];

      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
          } else {
            return closest;
          }
        },
        { offset: Number.NEGATIVE_INFINITY }
      ).element;
    }
  }, []);

  console.log("timelineBox", playgroundBox);

  return (
    <div>
      <Control />
      <Sound_bar />
      <Play_ground playgroundBox={playgroundBox} />
      <Timeline timelineBox={timelineBox} />
      <Footer />
    </div>
  );
}

export default App;

// setFun((prevData) =>
//   positionOfBox
//     ? [
//         ...prevData.slice(0, positionBoxFix),
//         ...Bars64_api.slice(16 * i, 16 * (i + 1)),
//       ]
//     : []
// );
