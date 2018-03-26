import Link from 'next/link'
// Add pop-overs to each link explaining more.
export default () => (
  <ul>
    <Item href="/">Home</Item>
    <Item href="/news">News</Item>
    <Item href="/classes">classes</Item>
    <Item href="/forum">Forum</Item>
    <Item href="/weapons">Weapons</Item>
    <Item href="/skills">Skills</Item>
    <Item href="">Docs</Item>
    <Item href="/about">about</Item>
    <Item href="/support">support</Item>
    <Item href="https://github.com/Attidd/ehex391">Contribute</Item>
    <style jsx>{`
      ul {
        list-style-type: none;
      }
    `}</style>
  </ul>
)

const Item = ({ href, children }) => (
  <li>
    <Link prefetch href={href}>
      <a>{ children }</a>
    </Link>

    <style jsx>{`
      li {
        display: inline-block;
      }
      li:after {
        content: " ⋮";
        color: red;
      }
      li:last-child:after { content: ""; }

      a {
        display: inline-block;
        padding: 10px;
        font-size: 11px;
        text-transform: uppercase;
        text-decoration: none;
        color:  #D4AF37;
        transition: all 0.3s
      }
      a:hover  {
        color: black;
        background: white;
      }
    `}</style>
  </li>
)
