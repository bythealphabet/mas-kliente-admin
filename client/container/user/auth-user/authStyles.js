import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export default css`
  display: grid;
  grid-template-rows: 100px 1fr;

  p {
    grid-column: 2 / -2;
    grid-row: 1;
    align-self: center;
    font-size: 1.5rem;
    @media (min-width: 900px) {
      grid-column: 1 / span 5;
    }
  }

  form {
    grid-column: 2 / -2;
    @media (min-width: 900px) {
      grid-column: 1 / span 5;
      grid-row: 2;
    }
  }
`;
