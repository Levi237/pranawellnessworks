import React            from 'react';
import styled           from 'styled-components';
import { useParams }    from 'react-router-dom';

import FeaturedBlog     from './FeatureBlogHeader';
import TwoRows          from './TwoRows';
import BlogBlocks       from './BlogBlocks';

const CategoryIndex = ({ scrollToTop, selectBlog, blogs, author}) => {

    const { id } = useParams();

    const categoryBlogs = blogs.filter(blog => blog.category.replaceAll(' ','_') === id );
    
    return(
        <BlogIndexWrapper>
            <FeaturedBlog scrollToTop={scrollToTop} selectBlog={selectBlog}  blog={categoryBlogs[0]} author={author}/>
            <br/><br/><br/>
            <TwoRows selectBlog={selectBlog}  blogs={categoryBlogs} author={author}/>
            <BlogBlocks selectBlog={selectBlog} blogs={categoryBlogs} author={author}/>
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
    p {}
    small {
        text-transform: uppercase;
        color: var(--green);
    }

    @media screen and (max-width: 945px){

    }
`;

export default CategoryIndex