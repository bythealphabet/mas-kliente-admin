import { jsx, css, keyframes } from "@emotion/react"; /** @jsx jsx */

const Hamburger = ({ active, setActive, dark }) => {
  console.log("dark", dark);

  const burgerColor = {
    white: css`
      background-color: #ffff;
    `,
    black: css`
      background-color: var(--darkColor);
    `,
  };
  const hamburger = css`
    width: 30px;
    height: 20px;
    border: transparent;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    grid-column: 7 / span 1;
    grid-row: 1;
    justify-self: center;
    align-self: center;

    span {
      ${dark ? burgerColor.white : burgerColor.black}

      border-radius: 3px;
      display: block;
      height: 0.12em;
    }

    @media (min-width: 900px) {
      display: none;
    }
  `;
  const topBun = keyframes`
	  	0% {
			transform: translate(0, ${active ? 0 : 9}px) rotate(${active ? 0 : 45}deg);
		}
		60% {
			transform: translate(0, 9px);
		}

		100% {
			transform: translate(0, ${active ? 9 : 0}px) rotate(${active ? 45 : 0}deg);
		}
	`;

  const meat = css`
    opacity: ${active ? 0 : 1};
  `;

  const bottomBun = keyframes`
		0% {
			transform: translate(0, ${active ? 0 : -9}px) rotate(${active ? 0 : -45}deg);
		}
		60% {
			transform: translate(0, -9px);
		}

		100% {
			transform: translate(0, ${active ? -9 : 0}px) rotate(${active ? -45 : 0}deg);
		}
	`;

  return (
    <div
      css={css`
        ${hamburger}
      `}
      onClick={setActive}
    >
      <span
        css={css`
          animation: ${topBun} 0.2s ease forwards;
        `}
      ></span>
      <span css={meat}></span>
      <span
        css={css`
          animation: ${bottomBun} 0.2s ease forwards;
        `}
      ></span>
    </div>
  );
};

export default Hamburger;
