import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Link } from "react-router-dom";

function Header() {
  const headerStyles = css`
    border: solid 1px black;
    grid-column: 1 / -1;
    grid-row: 1;

    .logo {
      grid-column: 2 / span 2;
      align-self: center;
    }

    nav {
      grid-column: 5 / -2;

      align-self: center;
    }

    ul {
      display: flex;
      justify-content: space-between;
    }
  `;
  return (
    <div className="main-grid" css={headerStyles}>
      <div className="logo">Mas Kliente Admin</div>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Sign In</Link>
          </li>
        </ul>
      </nav>
      <div className="hamburger"></div>
    </div>
  );
}
export default Header;
