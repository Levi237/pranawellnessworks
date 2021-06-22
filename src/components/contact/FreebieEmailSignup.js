import React, { Component } from 'react';
import styled from 'styled-components';
 
export default class FreebieEmailSignup extends Component { 
    state = {
      emailValue: '',
      fNameValue: '',
      lNameValue: '',
    };
    render(){

const { emailValue, fNameValue, lNameValue } = this.state
    return (
        <Form 
            action={`https:/${process.env.REACT_APP_MAILCHIMP_SRC}/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`}
            method="POST" 
            id="mc-embedded-subscribe-form" 
            name="mc-embedded-subscribe-form" 
            className="validate" 
            target="_blank" 
            novalidate 
        >
            <p>
                No matter your schedule, or location, experience wellness{" "}
                for the working mind with our signature virtual packages{" "}
                including yoga, meditation, and breathwork.
                <br/><br/>
                Sign up now for a free guided meditation.
            </p>
            <input 
                type="text" 
                name="FNAME" 
                id="MERGE1" 
                value={fNameValue}
                placeholder="First Name" 
                onChange={(e)=>{this.setState({fNameValue: e.target.value});}}
                required
            />
            <input 
                type="text" 
                name="LNAME" 
                id="MERGE2" 
                value={lNameValue}
                placeholder="Last Name" 
                onChange={(e)=>{this.setState({lNameValue: e.target.value});}}
            />
            <input 
                type="email" 
                name="EMAIL" 
                id="MERGE0"
                value={emailValue}
                placeholder="Email" 
                onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                autoCapitalize="off" 
                autoCorrect="off"
                required
            /> 
            <input 
                type="hidden" 
                name="SERVICES" 
                id="SERVICES" 
                value="Free Meditation"
            />    
            <AuthFilter aria-hidden="true"><input type="text" name="b_0e3bf36f8cbe7c4f0019bd050_fe06177933" tabindex="-1" value=""/></AuthFilter>
            <div className="clear">
                <input type="submit" value="submit" name="Subscribe" id="mc-embedded-subscribe" className="button"/>
            </div>
        </Form> 
    );
  }

}

const Form = styled.form`
p {
    width: 80%;
    max-width: 350px;
    margin: 0 auto;
}
    input {
        display: block;
        width: 70%;
        max-width: 260px;
        padding: 0 5%;
    }
`;
const AuthFilter = styled.div`
    position: absolute; left: -5000px;
`;