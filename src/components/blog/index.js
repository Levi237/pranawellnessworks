import React, { Component } from 'react';
import styled from 'styled-components';

export default class BlogMain extends Component {
    state = {

    }
    render(){
        return(
            <BlogWrapper>
                Hello World
            </BlogWrapper>
        );
    };
};

const BlogWrapper = styled.div`
    position: relative;

    @media screen and (max-width: 945px){

    }
`;