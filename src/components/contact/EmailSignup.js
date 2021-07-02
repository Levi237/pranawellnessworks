import React, { Component } from 'react';
import styled               from 'styled-components';

import FreebieEmailSignup   from './FreebieEmailSignup';
import ContactRequest       from './ContactRequest';
import ReferralRequest      from './ReferralRequest';

export default class EmailSignup extends Component { 
    
    render(){

        const { toggleEmailSignup, contactType } = this.props
        return(
            <Container id="email" className="inactive contact-container">
                <CloseBtn name="emailForm" className="close xClose white" onClick={(e) => {toggleEmailSignup(e)}}>X</CloseBtn>
                { (contactType === "freebie") && <FreebieEmailSignup/> }
                { (contactType === "contactRequest") && <ContactRequest/> }
                { (contactType === "referralRequest") && <ReferralRequest/> }
            </Container>
        );
    };
};

const Container = styled.div`
    position: fixed;
    overflow: scroll;
    z-index: 99999;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
        text-align: center;
        background-color: white;
    }
    
    form {
        text-align: center;
        width: 80vw;
        background-color: #fff;
        padding: 80px 0;
        box-shadow: 0 0 150px rgba(0,0,0,.2);
    }
    form input {
        height: 36px;
        margin: 5px auto;
        font-size: 18px;
        border-width: 1px;
        border-radius: 2px;
    }
    form input[type=submit] {
        background-color: #fff;
        color: #965ba5;
        border: purple solid 1px;
        position: relative;
        z-index: 900;
        border-radius: 0;
        font-size: 18px;
        text-transform: uppercase;
    }
    form label {
        width: 44%;
        &:nth-of-type(even){
            margin-left: 1.75%
        }
        textarea {
            width: 86%;
            border: 1px solid black;
            border-radius: 2px;
            height: 150px;
            margin: 5px 0;
            font-family: Montserrat, Arial;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #473E4E;
            padding: 2%;
        }
    }
`;

const CloseBtn = styled.button`
    background-color: transparent;
    border-radius: 100px;

    font-size: 14px;
    max-height: 30px;
    max-width: 30px;
    min-height: 30px;
    min-width: 30px;

    padding: 0;
    text-align: center;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 99999;
`;