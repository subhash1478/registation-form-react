import React, { Component } from 'react';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit(event) {
        console.log( this.state)
        event.preventDefault();
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
            <br/><br/>
            <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} />
            <br/><br/>
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
            <br/><br/>
            <input type="submit"  value="save"/>
            </form>
            </div>
        );
    }
}
export default Register;