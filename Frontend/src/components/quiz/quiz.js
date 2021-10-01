import React, { Component } from "react";

class QuizRecs extends Component {
  userSubmit(event){
    event.preventDefault();
    let userName = this.refs.name.value.trim();
    this.setState({userName}, function(){
      console.log(this.state)
    });
  }

  answerSelected(event){

    let answers = this.state.answers
    if(event.target.name === "answer1"){
      answers.answer1 = event.target.value
      //console.log(answers.answer1)
    }else if(event.target.name === "answer2"){
      answers.answer2 = event.target.value
      //console.log(answers.answer2)
    }
    this.setState({answers: answers}, function(){
      console.log(this.state);
    })
  }

//   questionsSubmit(event){
//     event.preventDefault();
//     this.setState({submitted: true});
//     if(this.state.answers.answer2 === "no"){
//         userName: this.state.userName,
//         answer1: this.state.answers.answer1,
//         answer2: this.state.answers.answer2,
//       })
//     }
//   }

  constructor(props){
    super(props);

    this.state = {
      answers: {
        answer1: "",
        answer2: ""
      },
      submitted: false,

      
    };
    // this.userSubmit = this.userSubmit.bind(this);
    // this.answerSelected = this.answerSelected.bind(this);
    // this.questionsSubmit = this.questionsSubmit.bind(this);
   ;
  }

  render(){

    let userName;
    let questions;

    if (this.state.userName !== "" && this.state.submitted === false) {
      userName = <h2>Quiz {this.state.userName}!</h2>;
        questions = <div>
          <form onSubmit={this.questionsSubmit}>
            <div>
              <label>Pick which genre you would like to explore?</label>
              <br />
              <br />
              <input type="radio" name="answer1" value="Romance" onChange={this.answerSelected}/>Romance
              <br />
              <input type="radio" name="answer1" value="Horror" onChange={this.answerSelected}/>Horror/Thriller
              <br />
              <input type="radio" name="answer1" value="Mystery" onChange={this.answerSelected}/>Mystery/Crime Fiction
              <br />
              <input type="radio" name="answer1" value="History" onChange={this.answerSelected}/>Non Fiction/History
            </div>
            <br />
            <div>
              <label>Age Categories?</label>
              <br />
              <br />
              <input type="radio" name="answer1" value="Child" onChange={this.answerSelected}/>Child
              <br />
              <input type="radio" name="answer1" value="YA" onChange={this.answerSelected}/>Young Adult
              <br />
              <input type="radio" name="answer1" value="Adult" onChange={this.answerSelected}/>Adult
              <br />
              <input type="radio" name="answer1" value="All" onChange={this.answerSelected}/>All
            </div>
            <br />
            <div>
              <label>Page Range?</label>
              <br />
              <br />
              <input type="radio" name="answer1" value="50" onChange={this.answerSelected}/>50
              <br />
              <input type="radio" name="answer1" value="100" onChange={this.answerSelected}/>100
              <br />
              <input type="radio" name="answer1" value="200" onChange={this.answerSelected}/>200
              <br />
              <input type="radio" name="answer1" value="400+" onChange={this.answerSelected}/>400+
            </div>
            <br />
            <div>
              <label>Publication Date?</label>
              <br />
              <br />
              <input type="radio" name="answer1" value="1700" onChange={this.answerSelected}/>18 CE
              <br />
              <input type="radio" name="answer1" value="1800" onChange={this.answerSelected}/>19 CE
              <br />
              <input type="radio" name="answer1" value="1900" onChange={this.answerSelected}/>20 CE
              <br />
              <input type="radio" name="answer1" value="2000" onChange={this.answerSelected}/>21 CE
            </div>
            <br />
            <div>
              <label>Trigger Warnings?</label>
              <br />
              <br />
              <input type="radio" name="answer1" value="Violence" onChange={this.answerSelected}/>Violence
              <br />
              <input type="radio" name="answer1" value="War" onChange={this.answerSelected}/>War
              <br />
              <input type="radio" name="answer1" value="Drugs" onChange={this.answerSelected}/>Drugs
              <br />
              <input type="radio" name="answer1" value="Crime" onChange={this.answerSelected}/>Crime
              <br />
              <input type="radio" name="answer1" value="Suicide" onChange={this.answerSelected}/>Suicide
              <br />
              <input type="radio" name="answer1" value="Abuse" onChange={this.answerSelected}/>Abuse
              <br />
            </div>
            <input type="submit" value="submit" className="submitBtn"/>
          </form>
        </div>
    } 
        console.log(this.state.userName)
    return(
      <div>
        {userName}
        <br />
        {questions}
      </div>
    );
  }
}

export default QuizRecs;


/*
class QuizRecs extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }
    
    render() {
     
     return (  
        <div>
         Take a quiz
         <Quiz quiz={quiz}/>
        </div>
    );
    }
}

export default QuizRecs; */