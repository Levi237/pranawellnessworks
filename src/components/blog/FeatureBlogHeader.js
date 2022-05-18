import React        from 'react';
import styled       from 'styled-components';

import { Link }     from 'react-router-dom';
import * as routes  from '../../constants/routes';

const FeatureBlogHeader = ({ blog, author, scrollToTop, selectBlog }) => {
  const categoryLink = blog.category.replaceAll(' ','_').toLowerCase();
  const endpoint = blog.title
    .replaceAll(' ','_')
    .replaceAll('?','')
    .replaceAll('.','')
    .replaceAll('!','')
    .toLowerCase() ;

  return(
      <FeatureBlogContainer>
        <Link to={`/blog/${blog.id}/${endpoint}`}  onClick={(e) => selectBlog(e, blog)}>
          <div style={{backgroundImage: `url(/blog/${blog.id}_1.jpg)`}}></div>
        </Link>
        <section>
          <small><Link to={`/blog/${categoryLink}`} >{blog.category}</Link></small>
          <Link to={`/blog/${blog.id}/${endpoint}`}  onClick={(e) => selectBlog(e, blog)}>
            <h1>
              {blog.title}
            </h1>
          </Link>
          <p>
            {blog.subtext}
            &nbsp;
            <Link to={`/blog/${blog.id}/${endpoint}`}  onClick={(e) => selectBlog(e, blog)}>
              Read more...
            </Link>
          </p>
          <h4>{blog.publishDate}<span className="desktop-inline">&nbsp;|&nbsp;</span><br className="mobile-inline"/>By <Link to={routes.ABOUT} onClick={scrollToTop}>{author.firstName} {author.lastName}</Link></h4>
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
    &:hover {
      h1 {
        color: var(--lightpurple);
      }
    }
  }
  small {
    a {
      color: inherit;
      &:hover {
        color: var(--purple);
      }
    }
  }
  > a > div {
    width: 86vw;
    height: 54vw;
    margin: 0 auto;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  > section {
    margin: 20px auto;

    > small {
      font-size: 1.6vw;
    }

    > a > {
      h1 {
        width: 86vw;
        padding: 0;
        margin: 10px auto;
  
      }
    }
    
    > h4 {
      margin-top: 6px;

      > a {
        color: var(--lightgrey);
      }
    }
    > p {
      margin: 0 auto;
      width: 86vw;
      > a {
        color: var(--lightgrey);
      }
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