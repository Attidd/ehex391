import Page from '../components/page';
import Login from './login';
export default () => (
  <div>
      <Page> <Login /> </Page>
  <div className='hello'>
    <p>This is just the beginning.</p>
    <style jsx>{`
      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        background: #eee;
        padding: 10px;
        text-align: center;
        transition: 100ms ease-in background;
      }
      .hello:hover {
        background: #ccc;
        box-shadow: 0px 0px 1px #000000;

      }
    `}</style>
  </div>
  </div>
)
