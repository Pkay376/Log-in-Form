import React, { Component } from 'react'

class LoginForm extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name : '',
           email : '',
           password: '',
           error : '',

        }
      }
      handleChange = (field) => (event) => {
        this.setState({[field] : event.target.value});
      }
      handleSubmit = () => {
        const {name, email, password } = this.state;

        const correctName = 'your_username';
        const correctEmail = 'your_email@example.com';
        const correctPassword ='your_password';

        if(name === correctName && email === correctEmail && password ===correctPassword){
            this.setState({error: '', name: ''});
        } else {
            this.setState ({error : 'Invalid credentials'})
        }
      };
  render() {
    const { name, email, password, error} = this.state;
    return (
        <div>
            <h2>LoginForm</h2>
            <div>
            <input
            type = "text"
            placeholder = "Name"
            value = {name}
            onChange = {this.handleChange('name')}
            />
        </div>
        <div>
            <input
            type = "email"
            placeholder = "Email"
            value = {email}
            onChange = {this.handleChange('email')}
            />
            </div>
            <div>
            <input
            type = "password"
            placeholder = "Password"
            value = {password}
            onChange = {this.handleChange('password')}
            />
        </div>
        <button onClick={this.handleSubmit}>Login</button>
        {error && <p>{error}</p>}
        </div>
        );
    }
    }
    export default LoginForm;


