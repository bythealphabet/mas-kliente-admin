import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import DevGirlSvg from "../../components/svgs/DevGirlSvg";
import WierdEllipseSvg from "../../components/svgs/WierdEllipseSvg";
import HomeBackgroundSvg from "../../components/svgs/HomeBackgroundSvg";
import Input from "../../components/Form/Input/Input";
import useFormData from "../../hooks/useFormData";

function Home() {
  const [inputData, inputHandler] = useFormData({
    name: "",
    email: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();
    onSubmit(create, inputData);
  }
  return (
    <div className="main-grid" css={homeStyles}>
      <HomeBackgroundSvg />
      <h1>Gana Mas Kliente Online</h1>
      {/* <div className="home-optin-box">
        <h1>Kuminsa ku bo negoshi online, i Gana Mas Kliente.</h1>

        <p>
          Si bo ta <span>interesa</span>, yena bo gegevensnan i nos lo tuma
          kontakto ku bo.
          <br /> Of bo por bel nos na <span>+5999 516 8764</span>
        </p>
        <form onSubmit={submit}>
          <Input
            label={"Nomber"}
            type="name"
            change={inputHandler("name")}
            value={inputData.name}
          />
          <Input
            label="Number di telefon"
            type="text"
            change={inputHandler("password")}
            value={inputData.password}
          />
          <Input
            label={"Email"}
            type="email"
            change={inputHandler("email")}
            value={inputData.email}
          />

          <button className="btn" onClick={submit}>
            Ban Pe
          </button>
        </form>
      </div> */}
      {/* <WierdEllipseSvg /> */}
      <DevGirlSvg />
    </div>
  );
}
export default Home;

var homeStyles = css`
  /* background-color: #56abdd; */
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: var(--headerHeight) 100px 1fr 1fr 1fr;

  @media (min-width: 900px) {
    grid-template-rows:
      var(--headerHeight) var(--headerHeight) calc(
        100vh - var(--headerHeight) * 2
      )
      var(--footerHeight);
  }
  /* grid-template-rows: repeat(2, calc((100vh - var(--headerHeight)) / 2)); */

  grid-column: 1 / -1;
  grid-row: 1 / -1;

  .home-background-svg {
    z-index: -1;
    grid-column: 1 / -1;
    grid-column 1 / -1;
  }
  .home-optin-box {
    z-index: 3;
    grid-column: 2 / span 4;
    grid-row: 3;

    h1 {
      margin-bottom: 0.5em;
      font-size: 1rem;
    }

    p {
      margin-bottom: 1em;
      font-size: 0.8rem;

      span {
        font-weight: bold;
      }
    }

    form {
      input {
        border-radius: 4px;
        padding: 0.3em;
      }
      .btn {
        padding: 0.3em;
        border-radius: 4px;
        background-color: #eb5757;
        font-size: 1rem;
        font-weight: 700;
        width: 100%;
      }
    }

    @media (min-width: 750px) {
      grid-column: 2 / span 3;
    }

    @media (min-width: 900px) {
      grid-column: 2 / span 3;
      grid-row: 3;

      h1 {
        margin-bottom: 0.5em;
        font-size: 2rem;
      }

      p {
        margin-bottom: 1em;
        font-size: 1.3rem;

        span {
          font-weight: bold;
        }
      }
      form {
        input {
          border-radius: 4px;
          padding: 1em;
        }
        .btn {
          font-size: 2rem;
        }
      }
    }
  }

  .wierd-ellipse {
    z-index: -1;
    grid-column: 1 / -1;
    grid-row: 1 / span 4;
    justify-self: center;
    transform: rotate(10deg);

    @media (min-width: 900px) {
      grid-column: 1 / -1;
      grid-row: 1 / -1;
      justify-self: stretch;
      transform: rotate(0deg);
    }
  }

  .dev-girl {
    grid-column: 1 / -1;
    grid-row: 2;
    justify-self: center;
    margin-top: 3em;

    @media (min-width: 900px) {
      grid-column: 5;
      grid-row: 3;
      margin-top: 0;
      align-self: center;
      justify-self: start;
    }
  }
`;
