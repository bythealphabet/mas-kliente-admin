import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

const wierdEllipseStyles = css`
  width: 200%;
  height: 200%;
  /* max-width: 375px;
  max-height: 812px; */

  @media (min-width: 900px) {
    width: 100%;
    height: 100%;
    max-width: 1920px;
    max-height: 1080px;
  }

  @media (min-width: 900px) {
    /* width: 2259px;
    height: 1242px; */
  }
`;

function WierdEllipseSvg() {
  return (
    <svg
      className="wierd-ellipse"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={wierdEllipseStyles}
    >
      <path
        id="Ellipse 1"
        d="M1858.15 1208.45C1243.35 1879.32 1464.68 1477.84 946.977 1003.41C429.273 528.984 -711.108 669.428 -96.3146 -1.44362C218.626 -258.042 517.856 5.38312 1035.56 479.812C1553.26 954.242 2472.94 537.579 1858.15 1208.45Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="1568.42"
          y1="1307.69"
          x2="184.363"
          y2="279.625"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3F499C" />
          <stop
            offset="0.755208"
            stop-color="#0090FF"
            stop-opacity="0.371101"
          />
          <stop offset="1" stop-color="#56ABDD" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default WierdEllipseSvg;
