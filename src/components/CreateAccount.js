import React from 'react';
import {Link, link } from "react-router-dom";
import LogIn from "./LogIn";
import App from '../App.css';



class CreateAccountFormFields extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();

      let result = this.state.value;
      let accountHistory = JSON.parse(localStorage.getItem("Account")) || [];
      localStorage.setItem("Account", JSON.stringify(accountHistory));

     
      let myData = localStorage.getItem('Account');
      
      let trueFalse = myData.includes(result);
      console.log(trueFalse)
      trueFalseFunction();
      function trueFalseFunction(){
        if(trueFalse === true){
            return alert("Username is Taken");
        }else{
            accountHistory.push(result);
            localStorage.setItem("Account", JSON.stringify(accountHistory));  
        }
    }

      console.log(result)
      console.log(myData)
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            User Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default CreateAccountFormFields
