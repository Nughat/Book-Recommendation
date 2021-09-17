import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Button from '@material-ui/core/Button';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <Link className="link-item" to="/home">
          <h1 className="navbar-logo">
            <i className="fas fa-newspaper"></i> BookRecs
          </h1>
        </Link>
        <Link className="link-item-right" to="/home">
          <Button>Home</Button>&nbsp;
        </Link>
        <Link className="link-item-second-right" to="/signup">
          <Button>Sign-up</Button>&nbsp;
        </Link>
        <Link className="link-item-right" to="/login">
          <Button>Log-in</Button>&nbsp;
        </Link>
        
      </nav>
    );
  }
}

export default Navbar;