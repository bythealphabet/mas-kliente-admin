import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Link } from "react-router-dom";

function Nav({ active }) {
  const showMobileNav = css`
    transform: translateX(0);
  `;

  const hideMobileNav = css`
    transform: translateX(100%);
  `;

  const navStyles = css`
    background-color: salmon;
    position: absolute;
    top: var(--headerHeight);
    left: 0;
    right: 0;
    bottom: 0;
    ${active ? showMobileNav : hideMobileNav}
    transition: transform 0.225s ease-in-out;

    align-self: center;
    grid-column: 4 / -2;
    font-size: 2rem;

    @media (min-width: 900px) {
      position: initial;
      background-color: transparent;
      grid-column: 10 / -1;
      justify-self: center;
      font-size: 1.2rem;
      width: 100%;
      transform: translateX(0);
    }
    ul {
      height: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      @media (min-width: 900px) {
        flex-direction: row;
        justify-content: flex-end;
      }

      li {
        @media (min-width: 900px) {
          margin-left: 1em;
        }
      }
    }
  `;

  return (
    <nav className="header-nav" css={navStyles}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
