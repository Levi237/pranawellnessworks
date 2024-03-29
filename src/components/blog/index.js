import React            from 'react';
import styled           from 'styled-components';

import FeaturedBlog     from './sections/FeatureBlogHeader';
import TwoRows          from './sections/TwoRows';
import CategoryPreview  from './sections/CategoryPreview';
import BlogBlocks       from './sections/BlogBlocks';

const BlogMainIndex = ({ scrollToTop, selectBlog, blogs, author }) => {

    const blogBlogsList = blogs.filter(blog => blog.category !== "Mindfulness & Meditation")

    return(
        <BlogIndexWrapper>
            <FeaturedBlog scrollToTop={scrollToTop} selectBlog={selectBlog}  blog={blogs[0]} author={author}/>
            <br/><br/><br/>
            <TwoRows selectBlog={selectBlog}  blogs={blogs} author={author}/>
            <BlogBlocks  blogs={blogBlogsList} selectBlog={selectBlog} author={author}/>
            <CategoryPreview scrollToTop={scrollToTop} blogs={blogs} selectBlog={selectBlog} author={author}/>
            <br/><br/><br/><br/>
        </BlogIndexWrapper>
    );
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
    small {
        text-transform: uppercase;
        color: var(--green);
    }
`;

export default BlogMainIndex;