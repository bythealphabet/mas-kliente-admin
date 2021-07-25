import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Hamburger from "./Hamburger";

function Header() {
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActive(false);
  }, [location]);

  const hamburgerHandler = () => {
    setActive((prev) => !prev);
  };

  const headerStyles = css`
    /* border: solid 1px black; */
    grid-column: 1 / -1;
    grid-row: 1;

    display: grid;
    grid-template-rows: 1fr;

    @media (min-width: 900px) {
      grid-column: 2 / -2;
      grid-row: 1;
    }

    .logo {
      grid-column: 1 / span 3;
      align-self: center;
    }
  `;

  console.log("active", active);
  return (
    <div className="main-grid" css={headerStyles}>
      <Link to="/" className="logo">
        <div>LOGO HERE</div>
      </Link>
      <Nav active={active} />
      <Hamburger active={active} setActive={hamburgerHandler} />
      <div className="hamburger"></div>
    </div>
  );
}
export default Header;
