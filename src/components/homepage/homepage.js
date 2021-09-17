import React, { Component } from "react";
import { Link } from "react-router-dom";

// const url = '/rest/login'

class Homepage extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }
    
    render() {
     
     return (  
        <div style={{padding:20}}>
         Homepage
         <br/>
         <Link to="/recGenre">
            <i></i> Search by Genre!
        </Link>
        <br/>
        <Link to="/recQuiz">
            <i></i> Take a quiz!
        </Link>
        <br/>
        <Link to="/recSurpriseMe">
            <i></i> Surprise Me!
        </Link>
        <br/>
         <Link to="/searchdir">
            <i></i> Search Me!
        </Link>
        </div>
    );
    }
}

export default Homepage;