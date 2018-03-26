import Header from './header'
import Meta from './meta';

export default ({ children }) => (
  <div className="main">
    <Meta />
    <Header />

    <div className="page">
      { children }
    </div>

    <style jsx>{`
      .main {
        margin: auto;
      }
      .page {
        // background: #d3d3d3;
        padding: 3px 10px;
      }
      @media (max-width: 750px) {
        .main {
          padding: 0;
          width: auto;
        }
      }
    `}</style>
  </div>
)
