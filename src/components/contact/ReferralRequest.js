import React, { Component } from 'react';
import styled from 'styled-components';


export default class ReferralRequest extends Component {
    state = {
        emailValue: '',
        fNameValue: '',
        lNameValue: '',
        referralName: '',
        referralEmail: '',
        locationValue: '',
        subjectValue: '',
        messageValue: '',
        addServices: ''
    }
    render(){

        const { emailValue, fNameValue, lNameValue, locationValue, subjectValue, messageValue, addServices, referralEmail, referralName } = this.state
        return(
                <Form 
                    action={`https:/${process.env.REACT_APP_MAILCHIMP_SRC}/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`}
                    method="POST" 
                    id="mc-embedded-subscribe-form" 
                    name="mc-embedded-subscribe-form" 
                    className="validate" 
                    target="_blank" 
                    novalidate 
                >
                <label htmlFor='MERGE1'>
                    <input 
                        type="text" 
                        name="FNAME" 
                        id="MERGE1" 
                        placeholder="Your First Name" 
                        value={fNameValue}
                        onChange={(e)=>{this.setState({
                            fNameValue: e.target.value, 
                            addServices: 'Referral Name: ' +this.state.referralName + ', Referral Email:  ' + this.state.referralEmail
                        })}}
                        required
                    />
                </label>
                <label htmlFor='MERGE2'>
                    <input 
                        type="text" 
                        name="LNAME" 
                        id="MERGE2" 
                        placeholder="Your Last Name" 
                        value={lNameValue}
                        onChange={(e)=>{this.setState({lNameValue: e.target.value});}}
                    />
                </label>
                <label htmlFor='MERGE0'>
                    <input 
                        type="email" 
                        autoCapitalize="off" 
                        autoCorrect="off"
                        name="EMAIL" 
                        id="MERGE0"
                        placeholder="Your Email" 
                        value={emailValue}
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                        required
                     /> 
                </label>
                <label htmlFor='LOCATION'>
                    <input 
                        type="text" 
                        name="LOCATION" 
                        id="LOCATION" 
                        placeholder="Referral Location" 
                        value={locationValue}
                        onChange={(e)=>{this.setState({locationValue: e.target.value});}}
                    />
                </label>
                <label htmlFor='SERVICES'>
                    <input 
                        type="text" 
                        autoCapitalize="off" 
                        autoCorrect="off"
                        placeholder="Referral Name" 
                        value={referralName}
                        onChange={(e)=>{this.setState({
                            referralName: e.target.value,
                            addServices: 'referral name: ' +this.state.referralName + ', referral email:  ' + this.state.referralEmail
                        });}}
                        required
                     /> 
                </label>
                <label htmlFor='SERVICES'>
                    <input 
                        type="email" 
                        autoCapitalize="off" 
                        autoCorrect="off"
                        placeholder="Referral Email" 
                        value={referralEmail} 
                        onChange={(e)=>{this.setState({
                            referralEmail: e.target.value,
                            addServices: 'referral name: ' +this.state.referralName + ', referral email:  ' + this.state.referralEmail
                        });}}
                        required
                     /> 
                    <input 
                        type="hidden" 
                        name="SERVICES" 
                        id="SERVICES" 
                        value={addServices}
                    />
                </label>
                
                <label htmlFor='SUBJECT'>
                    <input 
                        type="text" 
                        name="SUBJECT" 
                        id="SUBJECT" 
                        value={subjectValue}
                        placeholder="Subject" 
                        onChange={(e)=>{this.setState({subjectValue: e.target.value});}}
                    />
                </label>
                <label htmlFor='MESSAGE'>
                    <textarea 
                        type="text" 
                        maxlength="255"
                        name="MESSAGE" 
                        id="MESSAGE" 
                        value={messageValue}
                        placeholder="Message" 
                        onChange={(e)=>{this.setState({messageValue: e.target.value});}}
                    />
                </label>
                <section aria-hidden="true"><input type="text" name="b_0e3bf36f8cbe7c4f0019bd050_fe06177933" tabindex="-1" value=""/></section>
                <div className="clear">
                    <input type="submit" value="submit" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                </div>
              </Form> 
        );
    };
};

const Form = styled.form`
    h3 {
        margin: 0;
        text-transform: capitalize;
    }
    section {
        position: absolute; left: -5000px;
    }
    label {
        display: inline-block;

        &:nth-of-type(7){
            width: 100%;
            input {
                width: 86%;
                padding: 5px 2%!important;
            }
        }
        &:nth-of-type(8){
            width: 100%;
            margin-left: 0!important;
        }
        input {
            width: 90%;
            padding: 5px 5%;
        }
    }
`;