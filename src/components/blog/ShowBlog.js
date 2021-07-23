import React from 'react';
import styled from 'styled-components';

const ShowBlog = ({blog, author}) => {

    return(
        <BlogWrapper>
            Hello World
        </BlogWrapper>
    );
};

const BlogWrapper = styled.div`
    position: relative;

    @media screen and (max-width: 945px){

    }
`;
export default ShowBlog