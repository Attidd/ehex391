export default () => (
  <div className="base">
    <h4>Login</h4>
    <hr />
    <p>
      username: <input type="text" />
    </p>
    <p>
      password: <input type="password" />
    </p>
    <button className="draw">Login</button>

    <style jsx>{`

      button {
        background: none;
        border: 0;
        box-sizing: border-box;
        margin: 1em;
        padding: 1em 2em;
        box-shadow: inset 0 0 0 2px #f45e61;
        color: #f45e61;
        font-size: inherit;
        font-weight: 700;
      }
      .base {
        @import url('https://fonts.googleapis.com/css?family=Crimson+Text');

        font-family: 'Crimson Text', serif;
        width: 50%;
        margin-top:100px
        margin-left: auto;
        margin-right: auto;
        height: 80vh;
        text-align: center;
      }
      h4 {
        text-align: center;
      }
      p {
        background: #eee;
        padding: 10px;
        margin-bottom: 2px;
        text-align: center;
        transition: 100ms ease-in background;
      }
      p:hover {
        background: #ccc;
        box-shadow: 0px 0px 1px #000000;
      }
    `}</style>
  </div>
);
