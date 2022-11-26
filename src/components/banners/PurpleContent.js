import React, {Component }from 'react';
import styled from 'styled-components';

export default class PurpleContent extends Component {
    render(){
        const { textCopy, toggleEmailModal } = this.props
        return(<>
            <Title>{textCopy.header}</Title>
            <section>
                { textCopy.button 
                    ?
                    <>
                    <Content className="text-left">
                        {textCopy.message}  
                    </Content>
                    { textCopy.link
                        ?
                    <ButtonContaner>
                        <a href={textCopy.link} target="_blank" rel="noreferrer"><button className="purple mobile-fill" value={textCopy.value}>{textCopy.button}</button></a>
                    </ButtonContaner>
                    :
                    <ButtonContaner>
                        <button className="purple mobile-fill" value={textCopy.value} onClick={(e) => {toggleEmailModal(e)}}>{textCopy.button}</button>
                    </ButtonContaner>
                    }
                    </>
                    :
                    <Content className="text-center">
                        {textCopy.message}  
                    </Content>
                }
            </section>
        </>);
    };
}

const Title = styled.h1 `
    font-weight: normal;
    color: #FFFFFF;
    background: transparent;
    @media screen and (max-width: 945px){
            padding: 2.5vw;
        }
`;
const Content = styled.div`
    display: inline-block;
    vertical-align: top;
    font-size: 1.5vw;
    width: 50vw;
    color: #fff;
    .text-left {
        float: left;
        text-align: left;
        margin: 0 2.5vw 0 10vw;
    }
    .text-center {
        text-align: center;
        margin: 0 auto!important;
    }
    @media screen and (max-width: 945px){
        display: block;
        width: 80vw;
        font-size: 3vw;
        margin-left: 10vw;
        margin-right: 2.5vw;
        margin-bottom: 4vw;
        float: none;
        text-align: justify;
    }
`;
const ButtonContaner = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 27.5vw;
    margin-right: 10vw;
    float: right;
    text-align: center;
    @media screen and (max-width: 945px){
        display: block;
        float: none;
        width: 100%;
    }
`;
