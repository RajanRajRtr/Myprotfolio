// import React, { useState, useEffect } from "react";
// import Typewriter from "typewriter-effect";
// import Fade from "react-reveal";
// import endpoints from "../constants/endpoints";
// import Social from "./Social";
// import FallbackSpinner from "./FallbackSpinner";
// import "../css/Home.css";

// const styles = {
//   nameStyle: {
//     fontSize: "5em",
//     color: "rebeccapurple",
//   },
//   inlineChild: {
//     display: "inline-block",
//   },
//   mainContainer: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: "10%",
//   },
// };
// function Home() {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.overflow = "auto"; // Reset scroll on unmount
//     };
//   }, []);
//   useEffect(() => {
//     fetch(endpoints.home, {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((err) => err);
//   }, []);

//   return (
//     <div
//       classNameName="homeheader "
//       style={{ overflowY: "hidden", height: "100vh" }}
//     >
//       <div className="animation01">
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//       <div className="animation02">
//         <div></div>
//         <div></div>
//       </div>
//       <div className="animation03">
//         <div className="circle">
//           <div className="circle_element01"></div>
//         </div>
//         <div className="circle">
//           <div className="circle_element02"></div>
//         </div>
//         <div className="circle">
//           <div className="circle_element03"></div>
//         </div>
//         <div className="animation04">
//           <div className="line_wrapper line_wrapper01">
//             <span className="line line01"></span>
//           </div>
//           <div className="rotate45">
//             <div className="line_wrapper line_wrapper02">
//               <span className="line line02"></span>
//             </div>
//           </div>
//           <div className="line_wrapper line_wrapper03">
//             <span className="line line03"></span>
//           </div>
//           <div className="rotate135">
//             <div className="line_wrapper line_wrapper04">
//               <span className="line line04"></span>
//             </div>
//           </div>
//           <div className="line_wrapper line_wrapper05">
//             <span className="line line05"></span>
//           </div>
//           <div className="rotate-135">
//             <div className="line_wrapper line_wrapper06">
//               <span className="line line06"></span>
//             </div>
//           </div>
//           <div className="line_wrapper line_wrapper07">
//             <span className="line line07"></span>
//           </div>
//           <div className="rotate-45">
//             <div className="line_wrapper line_wrapper08">
//               <span className="line line08"></span>
//             </div>
//           </div>
//         </div>
//         <div className="animation05">
//           <div className="double_wrapper02 green02">
//             <div className="double_wrapper01 green01">
//               <div className="double_block green00"></div>
//             </div>
//           </div>
//           <div className="double_wrapper02 navy02">
//             <div className="double_wrapper01 navy01">
//               <div className="double_block navy00"></div>
//             </div>
//           </div>
//           <div className="double_wrapper02 yellow02">
//             <div className="double_wrapper01 yellow01">
//               <div className="double_block yellow00"></div>
//             </div>
//           </div>
//           <div className="double_wrapper02 blue02">
//             <div className="double_wrapper01 blue01">
//               <div className="double_block blue00"></div>
//             </div>
//           </div>
//           <div className="double_wrapper02 red02">
//             <div className="double_wrapper01 red01">
//               <div className="double_block red00"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="animation06">
//         <div className="rhombus05">
//           <div className="rhombus04">
//             <div className="rhombus03">
//               <div className="rhombus02">
//                 <div className="rhombus01"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="animation07">
//         <div className="circle">
//           <div className="circle_element01"></div>
//         </div>
//         <div className="line_wrapper line_wrapper01">
//           <span className="line line01"></span>
//         </div>
//         <div className="rotate60">
//           <div className="line_wrapper line_wrapper02">
//             <span className="line line02"></span>
//           </div>
//         </div>
//         <div className="rotate120">
//           <div className="line_wrapper line_wrapper03">
//             <span className="line line03"></span>
//           </div>
//         </div>
//         <div className="line_wrapper line_wrapper04">
//           <span className="line line04"></span>
//         </div>
//         <div className="rotate-120">
//           <div className="line_wrapper line_wrapper05">
//             <span className="line line05"></span>
//           </div>
//         </div>
//         <div className="rotate-60">
//           <div className="line_wrapper line_wrapper06">
//             <span className="line line06"></span>
//           </div>
//         </div>
//       </div>
//       <div className="animation08">
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//       <div className="bird-container bird-container-one">
//         <div className="bird bird-one"></div>
//       </div>
//       <div className="bird-container bird-container-two">
//         <div className="bird bird-two"></div>
//       </div>
//       <div className="bird-container bird-container-three">
//         <div className="bird bird-three"></div>
//       </div>
//       <div className="bird-container bird-container-four">
//         <div className="bird bird-four"></div>
//       </div>
//       <>
//         {data ? (
//           <Fade>
//             <div style={styles.mainContainer}>
//               <h1 style={styles.nameStyle}>{data?.name}</h1>
//               <div style={{ flexDirection: "row" }}>
//                 <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
//                 <Typewriter
//                   options={{
//                     loop: true,
//                     autoStart: true,
//                     strings: data?.roles,
//                   }}
//                 />
//               </div>
//               <Social />
//             </div>
//           </Fade>
//         ) : (
//           <FallbackSpinner />
//         )}
//       </>
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal";
import endpoints from "../constants/endpoints";
import Social from "./Social";
import FallbackSpinner from "./FallbackSpinner";
import "../css/Home.css";

const styles = {
  nameStyle: {
    fontSize: "5em",
    color: "rebeccapurple",
  },
  inlineChild: {
    display: "inline-block",
  },
  mainContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
};

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto"; // Reset scroll on unmount
    };
  }, []);

  useEffect(() => {
    fetch(endpoints.home, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div
      classNameName="homeheader"
      style={{ overflowY: "hidden", height: "100vh" }}
    >
      <div className="animation01">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="animation02">
        <div></div>
        <div></div>
      </div>
      <div className="animation03">
        <div className="circle">
          <div className="circle_element01"></div>
        </div>
        <div className="circle">
          <div className="circle_element02"></div>
        </div>
        <div className="circle">
          <div className="circle_element03"></div>
        </div>
        <div className="animation04">
          <div className="line_wrapper line_wrapper01">
            <span className="line line01"></span>
          </div>
          <div className="rotate45">
            <div className="line_wrapper line_wrapper02">
              <span className="line line02"></span>
            </div>
          </div>
          <div className="line_wrapper line_wrapper03">
            <span className="line line03"></span>
          </div>
          <div className="rotate135">
            <div className="line_wrapper line_wrapper04">
              <span className="line line04"></span>
            </div>
          </div>
          <div className="line_wrapper line_wrapper05">
            <span className="line line05"></span>
          </div>
          <div className="rotate-135">
            <div className="line_wrapper line_wrapper06">
              <span className="line line06"></span>
            </div>
          </div>
          <div className="line_wrapper line_wrapper07">
            <span className="line line07"></span>
          </div>
          <div className="rotate-45">
            <div className="line_wrapper line_wrapper08">
              <span className="line line08"></span>
            </div>
          </div>
        </div>
        <div className="animation05">
          <div className="double_wrapper02 green02">
            <div className="double_wrapper01 green01">
              <div className="double_block green00"></div>
            </div>
          </div>
          <div className="double_wrapper02 navy02">
            <div className="double_wrapper01 navy01">
              <div className="double_block navy00"></div>
            </div>
          </div>
          <div className="double_wrapper02 yellow02">
            <div className="double_wrapper01 yellow01">
              <div className="double_block yellow00"></div>
            </div>
          </div>
          <div className="double_wrapper02 blue02">
            <div className="double_wrapper01 blue01">
              <div className="double_block blue00"></div>
            </div>
          </div>
          <div className="double_wrapper02 red02">
            <div className="double_wrapper01 red01">
              <div className="double_block red00"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="animation06">
        <div className="rhombus05">
          <div className="rhombus04">
            <div className="rhombus03">
              <div className="rhombus02">
                <div className="rhombus01"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="animation07">
        <div className="circle">
          <div className="circle_element01"></div>
        </div>
        <div className="line_wrapper line_wrapper01">
          <span className="line line01"></span>
        </div>
        <div className="rotate60">
          <div className="line_wrapper line_wrapper02">
            <span className="line line02"></span>
          </div>
        </div>
        <div className="rotate120">
          <div className="line_wrapper line_wrapper03">
            <span className="line line03"></span>
          </div>
        </div>
        <div className="line_wrapper line_wrapper04">
          <span className="line line04"></span>
        </div>
        <div className="rotate-120">
          <div className="line_wrapper line_wrapper05">
            <span className="line line05"></span>
          </div>
        </div>
        <div className="rotate-60">
          <div className="line_wrapper line_wrapper06">
            <span className="line line06"></span>
          </div>
        </div>
      </div>
      <div className="animation08">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="bird-container bird-container-one">
        <div className="bird bird-one"></div>
      </div>
      <div className="bird-container bird-container-two">
        <div className="bird bird-two"></div>
      </div>
      <div className="bird-container bird-container-three">
        <div className="bird bird-three"></div>
      </div>
      <div className="bird-container bird-container-four">
        <div className="bird bird-four"></div>
      </div>
      <>
        {data ? (
          <Fade>
            <div style={styles.mainContainer}>
              <h1 style={styles.nameStyle}>{data?.name}</h1>
              <div style={{ flexDirection: "row" }}>
                <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
                <Typewriter
                  options={{
                    loop: true,
                    autoStart: true,
                    strings: data?.roles,
                  }}
                />
              </div>
              <Social />
            </div>
          </Fade>
        ) : (
          <FallbackSpinner />
        )}
      </>
    </div>
  );
}

export default Home;
