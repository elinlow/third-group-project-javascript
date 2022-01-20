import React from 'react';
import { Link } from 'react-router-dom';

class LogIn extends React.Component {
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

      let myData = localStorage.getItem('Account');

      let result = this.state.value;
      let accountHistory = JSON.parse(localStorage.getItem("Account"));
      
      let trueFalse = myData.includes(result);
      console.log(trueFalse)
      trueFalseFunction();
      function trueFalseFunction(){
        if(trueFalse === true){
            alert("Welcome");
            localStorage.setItem("Account", JSON.stringify(accountHistory));
        }else{
             alert("Username is taken");
            
        }
    }

      console.log(result)
      console.log(myData)
    }
  
    render() {
      return (
        <form className='form-account' onSubmit={this.handleSubmit}>
          <label>
            <input className='input-field' placeholder='User Name' type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <Link to="/HomePage" className='Path' >
            <input className='Login-btn' type="submit" value="Login" />
          </Link>
        </form>
      );
    }
  }

  export default LogIn;
