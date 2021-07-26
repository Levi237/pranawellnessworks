import React, { Component } from 'react';
import styled from 'styled-components';

export default class BlogMainIndex extends Component {
    state = {

    }
    render(){
        return(
            <BlogIndexWrapper>
                <br/><br/><br/>
                {/* Hello World */}
            </BlogIndexWrapper>
        );
    };
};

const BlogIndexWrapper = styled.div`
    position: relative;

    @media screen and (max-width: 945px){

    }
`;