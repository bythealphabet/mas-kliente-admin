import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

function Home() {
  const homeStyles = css`
    border: solid 1px black;
    grid-column: 1 / -1;
    grid-row: 2;
  `;

  return <div css={homeStyles}>Home</div>;
}
export default Home;
