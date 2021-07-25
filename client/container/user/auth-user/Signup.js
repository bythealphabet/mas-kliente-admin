import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import mainContentLayout from "../../../styles/mainContentStyles";
import Input from "../../../components/Form/Input/Input";
import authStyles from "./authStyles";

function Signup() {
  const signupStyles = css`
    ${mainContentLayout}
    ${authStyles}
  `;

  function submit(e) {
    e.preventDefault();
    console.log("Submit submit SUBMIT");
  }
  return (
    <section className="main-grid" css={signupStyles}>
      <p>Sign Up</p>
      <form onSubmit={submit}>
        <Input
          label={"Name"}
          type="name"
          // change={inputHandler("name")}
          // value={inputData.name}
        />

        <Input
          label={"Email"}
          type="email"
          // change={inputHandler("email")}
          // value={inputData.email}
        />
        <Input
          label="Password"
          type="password"
          // change={inputHandler("password")}
          // value={inputData.password}
        />
        <button className="btn" onClick={submit}>
          Submit
        </button>
      </form>
    </section>
  );
}
export default Signup;
