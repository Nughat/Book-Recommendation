// import React, { Component } from "react";

// // const url = '/rest/login'

// class Signup extends Component {
//     constructor() {
//         super();
//         this.state = {
           
//         }
//     }
    

//     render() {
     
//      return (  
//         <div>
//          Signup
//         </div>
//     );
//     }
// }

// export default Signup;

import React, { Component } from "react";

// const url = '/rest/signup'

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            signupEmail: "",
            signupPassword: "",
            account: {},
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmitSignup = (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('name', this.state.signupName);
        formData.append('email', this.state.signupEmail);
        formData.append('password', this.state.signupPassword);

        const requestOptions = {
            method: 'POST',
            body: formData
        };

        fetch('/rest/signup', requestOptions)
            .then(response => {
                console.log(response.status);
                console.log(response.data);
                this.setState({account: response.data});
                return response.json();
            })
            .catch(function(error) {
                console.log('Request failed', error)
            });
        alert("Succesfully Signup Up!");
    }

    render() {
     const signupName = this.state.signupName;
     const signupEmail = this.state.signupEmail;
     const signupPassword = this.state.signupPassword;
     return (  
        <div>
            <b>Create an Account</b>
            <br/>
            <b>Join our community</b>
            <br/>
            <br/>
            <form onSubmit={this.handleSubmitSignup}>
                <table border="0">
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input type="name" name="signupName" size="20" autocorrect="off" spellcheck="false"
                                       autocapitalize="off" value={signupName} onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Username:</td>
                            <td>
                                <input type="email" name="signupEmail" size="20" autocorrect="off" spellcheck="false"
                                       autocapitalize="off" value={signupEmail} onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td>
                                <input type="password" name="signupPassword" size="20"
                                       required value={signupPassword} onChange={this.handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <input type="submit" value="Submit"/>
                <div>
                Already have an account? 
                    <a href="/login"> Log in Here!</a>
                </div>
            </form>
        </div>
        );
    }
}

export default Signup;