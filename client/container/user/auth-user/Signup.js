import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import signupStyles from "../../../styles/mainContentStyles";
import Input from "../../../components/Form/Input/Input";

function Signup() {
  return (
    <section css={signupStyles}>
      <p>Sign Up</p>
      <form>
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
      </form>
    </section>
  );
}
export default Signup;
