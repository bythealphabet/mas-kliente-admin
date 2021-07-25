import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export default css`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  .label {
    font-size: 0.8rem;
    font-weight: 600;
  }

  .input {
    font-family: inherit;
    line-height: inherit;
    text-align: inherit;
    margin-bottom: 0.5em;
    padding: 0.8em;
    border: 2px solid #485563;
    transform: scale(1);
    transition: transform 0.25s ease;
  }

  .input-shadow {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  }

  .input:focus {
    border-color: #222;
    transform: scale(1.01);
    outline: none;
  }
`;
