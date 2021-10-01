import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Notfound from "./Notfound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage/homepage";
import { SearchPage } from "./components/searchPage/searchPage";
import GenreRecs from "./components/genre/genre";
import QuizRecs from "./components/quiz/quiz";
import SurpriseMeRecs from "./components/surpriseMe/surpriseMe";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    console.log("in handle login:  ");
    this.setState({
      isLoggedIn: true,
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Navbar />
            <div>
              <Route
                exact
                path={"/"}
                render={(props) => (
                  <Login
                    {...props}
                    isLoggedIn={this.state.isLoggedIn}
                    handleLogin={this.handleLogin}
                  />
                )}
              />
              <Route path="/home" component={Homepage} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/searchdir" component={SearchPage} />
              <Route path="/recGenre" component={GenreRecs} />
              <Route path="/recQuiz" component={QuizRecs} />
              <Route path="/recSurpriseMe" component={SurpriseMeRecs} />
              {/* <Route component={Notfound} /> */}
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;

// import './App.css';
// import { MainContainer } from './mainContainer';
// import Navbar from './components/navbar/navbar';

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <MainContainer/>
//     </div>
//   );
// }

// export default App;
