import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FeatureBlogHeader = ({blog, author, selectBlog}) => {
  
  return(
      <FeatureBlogContainer>
        <Link to={`/blogs/${blog.id}`}  onClick={(e) => selectBlog(e, blog)}>
          <div style={{backgroundImage: `url(./blogs/${blog.heroImage})`}}></div>
        </Link>
        <section>
          <small>{blog.category}</small>
          <Link to={`/blogs/${blog.id}`}  onClick={(e) => selectBlog(e, blog)}>
            <h1>
              {blog.title}
            </h1>
          </Link>
          <h4>{blog.publishDate} | By {author.firstName} {author.lastName}</h4>
        </section>
      </FeatureBlogContainer>)
    ;
};

const FeatureBlogContainer = styled.div`
  padding-top: 40px;
  width: 100vw;
  text-align: center;
  a {
    text-decoration: none;
  }
  > a > div {
    width: 86vw;
    height: 54vw;
    margin: 0 auto;
    background-position: center;
    background-size: cover;
  }

  > section {
    margin: 20px auto;

    > small {
      font-size: 1.6vw;
      text-transform: uppercase;
      color: var(--green);
    }

    > a > {
      h1 {
        width: 86vw;
        padding: 0;
        margin: 10px auto;
        font-family: var(--fancy-font);
        text-transform: none;
      }
    }
    
    > h4 {
      color: var(--lightgrey);
    }
  }
    @media screen and (max-width: 945px) {
      padding-top: 0px;
      width: 100vw;
      > a > div {
        width: 100vw;
        height: 100vw;
      }

      > div {
        width: 100vw;
        height: 100vw;
      }
    
      > section {
        margin: 20px auto;
    
        > small {
          font-size: 4.6vw;
          text-transform: uppercase;
          color: var(--green);
        }
    
        > h1 {
          width: 86vw;
          padding: 0;
          margin: 10px auto;
          font-family: var(--fancy-font);
          text-transform: none;
        }
        
        > h4 {
          color: var(--lightgrey);
        }
    }

`;

export default FeatureBlogHeader;