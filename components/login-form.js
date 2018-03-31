

const Header = () => (
 <div></div>
  );


const Footer = () => (
    <div className='hello'>
    <p> This is just the beginning. Separate this by columns, login page will have SSO buttons at the bottom.</p>
    <style jsx>{`
      p {
        color: white;
      }
      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        background: black;
        padding: 10px;
        text-align: center;
        position:fixed;bottom:0;left:0;right:0;height:30px;
        transition: 100ms ease-in background;
        height: 10vh;
        box-shadow: 0px 0px 10px #000000;

      }
      .hello:hover {
        box-shadow: 0px 0px 10px #000000;

      }
    `}</style>
  </div>
  );

export default () => (
  <div className="login">
  <div className="base">
    <h4 className="login-title">User Login</h4>
    <hr />
    <p>
       Username <br/> <input id="uName" placeholder="Username" className="box curmudgeon" type="text" />
    </p>
    <p>
      Password <br/> <input type="password" placeholder="Password" className="box passwd" />
    </p>
    <p><input type="checkbox"/>  Remember me</p>
   <button>Login</button>

    <style jsx>{`

      .login-title {
        margin-bottom: 10px;
      }
      button {
        background: none;
        border: 0;
        box-sizing: border-box;
        margin: 1em;
        padding: 1em 2em;
        box-shadow: inset 0 0 0 2px #f45e61;
        font-weight: 700;
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
      p:hover, input:focus {
        background: #ccc;
        box-shadow: 0px 0px 1px #000000;
      }

.box {
  position:relative;
  color: black;
  display: inline-block;
  height: 20px;
  text-align: center;
  transition: 0.5s;
  border: 2px solid black;
  -webkit-transition:0.5s;
}
.box:hover {
  border: 2px solid black;
  color: red;
}


    `}</style>
  </div>
  <Footer/>
  </div>
);

