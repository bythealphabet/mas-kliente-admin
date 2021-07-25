import React from "react";
import { jsx, css, Global } from "@emotion/react"; /** @jsx jsx */

function GlobalStyles() {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --headerHeight: 80px;
          --footerHeight: 100px;
        }

        html,
        body {
          font-family: "Roboto", sans-serif;
          color: #333333;
          font-size: 16px;
        }

        a {
          text-decoration: none;
          color: #333333;
        }

        ul {
          list-style: none;
        }

        .btn {
          border: none;
          display: inline-block;
          padding: 0.7em 1.3em;
          background: #11375f;
          color: #fff;
          font-weight: bold;
          text-align: center;
          text-transform: capitalize;
          cursor: pointer;
          letter-spacing: 1.2px;
        }

        .main-grid {
          display: grid;

          grid-template-columns:
            minmax(1em, 1fr) repeat(6, minmax(30px, 125px))
            minmax(1em, 1fr);
          @media (min-width: 900px) {
            grid-template-columns:
              minmax(5em, 1fr) repeat(12, minmax(50px, 125px))
              minmax(5em, 1fr);
          }
        }

        .main-router-row-grid {
          grid-template-rows:
            var(--headerHeight) minmax(calc(100vh - var(--headerHeight)), auto)
            var(--footerHeight);
        }
      `}
    />
  );
}
export default GlobalStyles;
