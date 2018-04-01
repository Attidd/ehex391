import Logo from "../logo";
import Link from "next/link";
import { Button, Icon, Modal, Header } from "semantic-ui-react";
const inlineStyle = {
  modal : {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    color: "#eee",
    background: "black",
    textAlign: "center",
  },
  actions: {
    background: '#595959'
  }
};
export default () => (
  <header>
    <div className="left">
      <Link prefetch href="/">
        <a>
          <span className="logo">
            <Logo />
          </span>
          <span className="title">Home</span>
        </a>
      </Link>
    </div>
    <div className="right">
      <Modal style={inlineStyle.modal} trigger={<a className="login">Support Modal</a>}>
        <Modal.Header style={inlineStyle.header}>Testing Support Modal</Modal.Header>
        <Modal.Content image>
          <div className="image">
            <Icon name="right arrow" />
          </div>

      <Modal.Description>
        <p>Preferably, I will want a description to go with a list of text, and a nested modal.</p>
        <p>The nested modal should have a form for people to fill out information with questions</p>
      </Modal.Description>
        </Modal.Content>
         <Modal.Actions style={inlineStyle.actions}>
        <Button primary icon>Press Escape or click outside modal for now <Icon name='right cross' /></Button>
        </Modal.Actions>
      </Modal>
    </div>

    <style jsx>{`
      header {
        background: linear-gradient(#1e1e1e, #1a1a1a);
        display: flex;
        font-size: 14px;
      }
.ui.page.modals.transition.visible {
    display: flex !important;
}
      .logo {
        margin: 4px 5px 2px 4px;
        display: inline-block;
      }
      .left {
        flex: 9;
      }
      .right {
        flex: 1;
        text-align: right;
      }
      .title {
        font-weight: bold;
        display: inline-block;
        font-size: 14px;
        text-decoration: none;
        padding: 8px 10px 8px 4px;
        vertical-align: top;
        transition: all 0.3s;
      }

      a {
        display: inline-block;
        padding: 10px;
        font-size: 11px;
        text-transform: uppercase;
        text-decoration: none;
        color: #0b7;
        transition: all 1.3s;
      }
      a .title:hover {
        color: white;
      }
      a.login {
        padding: 10px;
        display: inline-block;
        font-size: 11px;
        text-transform: uppercase;
        text-decoration: none;
        color: #eee;
        margin-top: 10px;
      }
      .login:hover {
        color: #0b7;
        cursor: pointer;
      }
      .nav {
        display: inline-block;
        vertical-align: top;
      }
      @media (max-width: 750px) {
        .title {
          font-size: 16px;
          padding-bottom: 0;
        }
        a.login {
          padding: 24px 10px 23px;
        }
        .nav {
          display: block;
        }
      }
    `}</style>
  </header>
);
