import React, { Component } from 'react';
import styled               from 'styled-components';

import FreebieEmailSignup   from './FreebieEmailSignup';

export default class SubscribePage extends Component { 
    
    render(){

        return(
            <Container id="subscribe" className="subscribe-container">
                <div>
                <p>
                Receive a free meditation to your inbox now when you join the Prana Community!
                </p>
                <p>
                Weekly wellness newsletter with tips, resources, exclusive updates and offers. 
                </p>
                <FreebieEmailSignup/>
                </div>
            </Container>
        );
    };
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        width: 80vw;
        margin-top: 80px;
    }
    p {
        text-align: center;
        background-color: white;
        margin-bottom: 16px;
    }
    form p {
        display: none;
    }
    form {
        text-align: center;
        width: 80vw;
        // padding: 80px 0;
        padding-top: 32px;
        padding-bottom: 80px;
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
    // form label {
    //     width: 44%;
    //     &:nth-of-type(even){
    //         margin-left: 1.75%
    //     }
    //     textarea {
    //         width: 86%;
    //         border: 1px solid black;
    //         border-radius: 2px;
    //         height: 150px;
    //         margin: 5px 0;
    //         font-family: Montserrat, Arial;
    //         font-weight: 500;
    //         font-size: 16px;
    //         line-height: 20px;
    //         color: #473E4E;
    //         padding: 2%;
    //     }
    // }
    @media screen and (max-width: 640px) {
        form {
            width: 100vw;
        }
    }
`;