import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./homepage.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


// const url = '/rest/login'

class Homepage extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }
    
    render() {
     
     return (  
        <div className="Main">

    <Carousel autoPlay interval="5000" transitionTime="4000" infinityloop className="slide">
       
        <div>
           <img src="./img/lib.png" alt="design purpose" width="200px" height="500px" />
        </div>
        
        <div>
           <img src="./img/books7.png" alt="design purpose" width="200px" height="500px" />      
        </div>
       
        <div>
            <img src="./img/books5.jpeg" alt="design purpose" width="200px" height="500px"/>
        </div>

        <div>
            <img src="./img/books8.jpeg" alt="design purpose" width="200px" height="500px"/>
        </div>

        <div>
            <img src="./img/books10.png"  alt="design purpose"width="200px" height="500px"/>
        </div>

        <div>
            <img src="./img/books11.png" alt="design purpose" width="200px" height="500px"/>
        </div>

        </Carousel>

            
        <div className="Home">
        <img className="Book" alt="book" src="./img/welcome3.png"/>
        <p className="sec-title">Welcome to Bookmarked!</p>
        <p className="des">A book recommendation website designed just for you.
        Hey, welcome to Bookmarked, a home for book lovers all across the globe. 
        If you’re itching for something to read but can’t figure out what, 
        come take a look around the site to see how we can help.
        </p>
        </div>

        <div className="Genre">
        <img className="G" alt="book" src="./img/genre.png"/>
        <p className="sec-title">Genre</p>
        <p className="des">
        In the mood for a certain genre but can’t figure out which book’s right? 
        Explore the top picks from our variety of genres. Whether you want to die of laughter, 
        sob over a heartbreak, or just take a relaxing break, we’ll have it for you.
        </p>
        <div>
        <Link className="Link3" to="/recGenre">
        <i></i> Search by genre!
        </Link>
        </div>
        </div>

        <div className="Quiz">
        <img className="Q" alt="survey logo" src="./img/survey.png"/>
        <p className="sec-title">Quiz</p>
        <p className="des">
        You are the most important, so why shouldn’t things be about you? 
        Complete our short quiz so we can narrow things down to your tastes, just the way you like it. 
        Don’t worry about being overwhelmed by too many options any longer; 
        we’ll find you that perfect fit.
        </p>
        <div>
        <Link className="Link" to="/recQuiz">
        <i></i> Take a quiz!
        </Link>
        </div>
        </div>

        <div className="Random">
        <img className="R" alt="random logo" src="./img/Random.png"/>
        <p className="sec-title">Random</p>
        <p className="des">
        Surprise! If you’re feeling open to anything and everything 
        or just want fate to decide things for you, get a random recommendation. 
        If you’re not satisfied by the outcome, just surprise yourself again.
        </p>
        <div>
        <Link className="Link1" to="/recSurpriseMe">
            <i></i> Surprise Me!
        </Link>
        </div>
        </div>
        
        <div className="Search">
        <img className="S" alt="search logo" src="./img/Search.png"/>
        <p className="sec-title">Search</p>
        <p className="des">
        Already have something in mind? That’s great, you can just look it up in our database. 
        You’ll see relevant information like author, publication date, and ratings so you can 
        decide if you really want to read that specific book.
        </p>
        <div>
        <Link className="Link1" to="/searchdir">
            <i></i> Search Me!
        </Link>
        </div>
        </div>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <div>
            <div style = {{left: 0}}>Bookmarked &#169; | 2021  </div>

            <div className="Footer">
                <img className="fb footerimg" alt="fb logo" src="./img/fb.png"/>
                <img className="tw footerimg" alt="twitter logo" src="./img/twitter.png"/>
                <img className="insta footerimg" alt="instagram logo" src="./img/Insta.png"/>
            </div>      

        </div>
       
       </div>
        
    );
    }
}

export default Homepage;
/*import React, { Component } from "react";
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

export default Homepage; */