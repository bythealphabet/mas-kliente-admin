import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import mainContentLayout from "../../../styles/mainContentStyles";
import Input from "../../../components/Form/Input/Input";
import authStyles from "./authStyles";
import useFormData from "../../../hooks/useFormData";
import { usePost } from "../../../hooks/useFetch";
import { create } from "../../../api/api-user";

function Signup() {
  const [inputData, inputHandler] = useFormData({
    name: "",
    email: "",
    password: "",
  });

  const [data, onSubmit, message, success, error] = usePost();

  const signupStyles = css`
    ${mainContentLayout}
    ${authStyles}
  `;

  function submit(e) {
    e.preventDefault();
    console.log("sumi");
    onSubmit(create, inputData);
  }

  return (
    <section className="main-grid" css={signupStyles}>
      {success ? (
        <p>{message}</p>
      ) : (
        <>
          <p>Sign Up</p>
          <form onSubmit={submit}>
            <Input
              label={"Name"}
              type="name"
              change={inputHandler("name")}
              value={inputData.name}
            />
            <Input
              label={"Email"}
              type="email"
              change={inputHandler("email")}
              value={inputData.email}
            />
            <Input
              label="Password"
              type="password"
              change={inputHandler("password")}
              value={inputData.password}
            />
            <button className="btn" onClick={submit}>
              Submit
            </button>
          </form>
        </>
      )}
    </section>
  );
}
export default Signup;
