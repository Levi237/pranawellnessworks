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
    margin-top: calc(-90vh + 74vw);
    @media screen and (max-width: 945px){
        margin-top: calc(-90vh + 82vw);
    }
`;