import { Button, Icon } from "semantic-ui-react";
import "semantic-ui-css/components/button.css";
import "semantic-ui-css/components/icon.css";

const Header = () => <div />;

const Footer = () => (
  <div className="footer">
    <p>
      {" "}
      This is just the beginning. Separate this by columns, login page will have
      SSO buttons at the bottom. | <Icon name="twitter"/> | <Icon name="facebook f"/> |
      <Icon name="google plus"/> |
    </p>
    <style jsx>{`
      p {
        color: white;
      }
      .footer {
        font: 15px Helvetica, Arial, sans-serif;
        background: black;
        padding: 10px;
        text-align: center;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 30px;
        transition: 100ms ease-in background;
        height: 10vh;
        box-shadow: 0px 0px 10px #000000;
      }
      .footer:hover {
        box-shadow: 0px 0px 10px yellow;
      }
    `}</style>
  </div>
);

export default () => (
  <div className="login">
    <div className="base">
      <h4 className="login-title">User Login</h4>
      <hr />
      <p className="hov">
        Username <br />{" "}
        <input
          id="uName"
          placeholder="Username"
          className="input"
          type="text"
        />
      </p>
      <p className="hov">
        Password <br />{" "}
        <input type="password" placeholder="Password" className="input" />
      </p>
      <Button primary>
        <Icon name="sign in" />
        Login
      </Button>

      <style jsx>{`

      .login-title {
        margin-bottom: 10px;
      }



      input[type="text"] {

      }
      .base {
        @import url('https://fonts.googleapis.com/css?family=Crimson+Text');
        font-family: 'Crimson Text', serif;
        width: 40%;
        margin-top:100px
        margin-left: auto;
        margin-right: auto;
        height: 100%;
        text-align: center;
        border: 1px rgb(76,45,48) solid;
        border-radius: 8px;
        background: rgba(179,179,179,0.3);
        padding: 8px 10px;
        box-shadow: 0px 0px 5px #000000;
        background-image: url("/static/uneven-texture.png");

      }
      h4 {
        text-align: center;
      }
      p {
        padding: 10px;
        margin-bottom: 2px;
        text-align: center;
        transition: 100ms ease-in background;
      }
      .hov:hover, input:focus {
        background: #ccc;
        box-shadow: 0px 0px 1px #000000;
      }

      .input {
        position:relative;
        color: black;
        display: inline-block;
        height: 20px;
        text-align: center;
        transition: 0.5s;
        border: 2px solid black;
        -webkit-transition:0.5s;
        border-radius: 4px;
      }
      .input:hover {
        border: 2px solid black;
        color: red;
      }

    `}</style>
    </div>
    <Footer />
  </div>
);
