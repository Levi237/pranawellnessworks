import React, { Component } from 'react';
import styled from 'styled-components';

import FeaturedBlogHeader from './FeatureBlogHeader';
import TwoRows from './TwoRows';
import CategoryPreview from './CategoryPreview';
import FourBlogBlocks from './FourBlogBlocks';

export default class BlogMainIndex extends Component {
    state = {

    }
    render(){
        const { scrollToTop, selectBlog,  blogs, author } = this.props;

        return(
            <BlogIndexWrapper>
                <FeaturedBlogHeader scrollToTop={scrollToTop} selectBlog={selectBlog}  blog={blogs[0]} author={author}/>
                <br/><br/><br/>
                <TwoRows selectBlog={selectBlog}  blogs={blogs} author={author}/>
                <FourBlogBlocks  blogs={blogs} selectBlog={selectBlog} author={author}/>
                <CategoryPreview blogs={blogs} selectBlog={selectBlog} author={author}/>
                <br/><br/><br/><br/>
            </BlogIndexWrapper>
        );
    };
};

const BlogIndexWrapper = styled.div`
    position: relative;
    a:hover {
        cursor: pointer;
    }
    h1 { 
        font-family: var(--fancy-font);     
        text-transform: none; 
    }
    h4 {
        color: var(--lightgrey);
        font-weight: 100;
    }
    p {}
    small {
        text-transform: uppercase;
        color: var(--green);
    }

    @media screen and (max-width: 945px){

    }
`;