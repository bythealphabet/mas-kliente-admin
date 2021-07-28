import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();

  const footerStyles = css`
    border: solid 1px black;
    grid-column: 1 / -1;
    grid-row: 3;
    background-color: #fff;

    @media (min-width: 900px) {
      ${pathname === "/" ? `background-color: transparent` : null}
    }
  `;
  return <div css={footerStyles}>Footer</div>;
}
export default Footer;
Footer;
