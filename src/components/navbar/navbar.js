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
       <div>
        <Link className="link-item" to="/home">
        <img className="book-logo"
           alt="logo of a book"
           src="/img/icon.png"
          />
          <h1 className="navbar-logo">
            <i className="fas-fa-newspaper"></i>
          </h1>
        </Link>
        </div>
       
        <div>
        <Link className="link-item-right" to="/home">
          <Button className="bu">Home</Button>&nbsp;
        </Link>
        <Link className="link-item-second-right" to="/signup">
          <Button className="bu">Sign-up</Button>&nbsp;
        </Link>
        <Link className="link-item-right" to="/login">
          <Button className="bu">Log-in</Button>&nbsp;
        </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
/*import React, { Component } from "react";
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

export default Navbar;*/