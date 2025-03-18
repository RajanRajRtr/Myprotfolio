// import React, { useState, useEffect } from 'react';
// import Typewriter from 'typewriter-effect';
// import Fade from 'react-reveal';
// import endpoints from '../constants/endpoints';
// import Social from './Social';
// import FallbackSpinner from './FallbackSpinner';

// const styles = {
//   nameStyle: {
//     fontSize: '5em',
//   },
//   inlineChild: {
//     display: 'inline-block',
//   },
//   mainContainer: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// };

// function Home() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(endpoints.home, {
//       method: 'GET',
//     })
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((err) => err);
//   }, []);

//   return data ? (
//     <Fade>
//       <div style={styles.mainContainer}>
//         <h1 style={styles.nameStyle}>{data?.name}</h1>
//         <div style={{ flexDirection: 'row' }}>
//           <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
//           <Typewriter
//             options={{
//               loop: true,
//               autoStart: true,
//               strings: data?.roles,
//             }}
//           />
//         </div>
//         <Social />
//       </div>
//     </Fade>
//   ) : <FallbackSpinner />;
// }

// export default Home;
// import React, { useState, useEffect } from "react";
// import Typewriter from "typewriter-effect";
// import Fade from "react-reveal";
// import endpoints from "../constants/endpoints";
// import Social from "./Social";
// import FallbackSpinner from "./FallbackSpinner";

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
//   },
// };

// function Home() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(endpoints.home, {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((err) => err);
//   }, []);

//   return data ? (
//     <Fade>
//       <div style={styles.mainContainer}>
//         <h1 style={styles.nameStyle}>{data?.name}</h1>
//         <div style={{ flexDirection: "row" }}>
//           <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
//           <Typewriter
//             options={{
//               loop: true,
//               autoStart: true,
//               strings: data?.roles,
//             }}
//           />
//         </div>
//         <Social />
//       </div>
//     </Fade>
//   ) : (
//     <FallbackSpinner />
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
      className="homeheader "
      style={{ overflowY: "hidden", height: "100vh" }}
    >
      <div class="animation01">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="animation02">
        <div></div>
        <div></div>
      </div>
      <div class="animation03">
        <div class="circle">
          <div class="circle_element01"></div>
        </div>
        <div class="circle">
          <div class="circle_element02"></div>
        </div>
        <div class="circle">
          <div class="circle_element03"></div>
        </div>
        <div class="animation04">
          <div class="line_wrapper line_wrapper01">
            <span class="line line01"></span>
          </div>
          <div class="rotate45">
            <div class="line_wrapper line_wrapper02">
              <span class="line line02"></span>
            </div>
          </div>
          <div class="line_wrapper line_wrapper03">
            <span class="line line03"></span>
          </div>
          <div class="rotate135">
            <div class="line_wrapper line_wrapper04">
              <span class="line line04"></span>
            </div>
          </div>
          <div class="line_wrapper line_wrapper05">
            <span class="line line05"></span>
          </div>
          <div class="rotate-135">
            <div class="line_wrapper line_wrapper06">
              <span class="line line06"></span>
            </div>
          </div>
          <div class="line_wrapper line_wrapper07">
            <span class="line line07"></span>
          </div>
          <div class="rotate-45">
            <div class="line_wrapper line_wrapper08">
              <span class="line line08"></span>
            </div>
          </div>
        </div>
        <div class="animation05">
          <div class="double_wrapper02 green02">
            <div class="double_wrapper01 green01">
              <div class="double_block green00"></div>
            </div>
          </div>
          <div class="double_wrapper02 navy02">
            <div class="double_wrapper01 navy01">
              <div class="double_block navy00"></div>
            </div>
          </div>
          <div class="double_wrapper02 yellow02">
            <div class="double_wrapper01 yellow01">
              <div class="double_block yellow00"></div>
            </div>
          </div>
          <div class="double_wrapper02 blue02">
            <div class="double_wrapper01 blue01">
              <div class="double_block blue00"></div>
            </div>
          </div>
          <div class="double_wrapper02 red02">
            <div class="double_wrapper01 red01">
              <div class="double_block red00"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="animation06">
        <div class="rhombus05">
          <div class="rhombus04">
            <div class="rhombus03">
              <div class="rhombus02">
                <div class="rhombus01"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="animation07">
        <div class="circle">
          <div class="circle_element01"></div>
        </div>
        <div class="line_wrapper line_wrapper01">
          <span class="line line01"></span>
        </div>
        <div class="rotate60">
          <div class="line_wrapper line_wrapper02">
            <span class="line line02"></span>
          </div>
        </div>
        <div class="rotate120">
          <div class="line_wrapper line_wrapper03">
            <span class="line line03"></span>
          </div>
        </div>
        <div class="line_wrapper line_wrapper04">
          <span class="line line04"></span>
        </div>
        <div class="rotate-120">
          <div class="line_wrapper line_wrapper05">
            <span class="line line05"></span>
          </div>
        </div>
        <div class="rotate-60">
          <div class="line_wrapper line_wrapper06">
            <span class="line line06"></span>
          </div>
        </div>
      </div>
      <div class="animation08">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="bird-container bird-container-one">
        <div class="bird bird-one"></div>
      </div>
      <div class="bird-container bird-container-two">
        <div class="bird bird-two"></div>
      </div>
      <div class="bird-container bird-container-three">
        <div class="bird bird-three"></div>
      </div>
      <div class="bird-container bird-container-four">
        <div class="bird bird-four"></div>
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
