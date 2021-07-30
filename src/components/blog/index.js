import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import FeaturedBlogHeader from './FeatureBlogHeader';

export default class BlogMainIndex extends Component {
    state = {

    }
    render(){
        const { scrollToTop, selectBlog,  blogs, author } = this.props;

        return(
            <BlogIndexWrapper>
                <FeaturedBlogHeader scrollToTop={scrollToTop} selectBlog={selectBlog}  blog={blogs[0]} author={author}/>
                <br/><br/><br/>
                { (blogs.lengh > 1) &&
                <TwoBlogRows>
                    <div>
                        <Link to={`/blog/${blogs[1].id}/${blogs[1].endpoint}`}  onClick={(e) => selectBlog(e, blogs[1])}>
                            <section>
                            <small>{blogs[1].category}</small>
                                <h1>{blogs[1].title}</h1>
                                <p>{blogs[1].subtext}</p>
                                <h4>{blogs[1].publishDate}<span className="desktop-inline">&nbsp;|&nbsp;</span><br className="mobile-inline"/>By {author.firstName} {author.lastName}</h4>
                            </section>
                            <section style={{backgroundImage: `url(./blog/${blogs[1].heroImage})`}}>
                            </section>
                        </Link>
                    </div>
                    {/* <div>
                        <Link to={`/blog/${blogs[2].id}/${blogs[2].endpoint}`}  onClick={(e) => selectBlog(e, blogs[2])}>
                            <section>
                            <small>{blogs[2].category}</small>
                                <h1>{blogs[2].title}</h1>
                                <p>{blogs[2].subtext}</p>
                                <h4>{blogs[2].publishDate}<span className="desktop-inline">&nbsp;|&nbsp;</span><br className="mobile-inline"/>By {author.firstName} {author.lastName}</h4>
                            </section>
                            <section style={{backgroundImage: `url(./blog/${blogs[2].heroImage})`}}>
                            </section>
                        </Link>
                    </div> */}
                </TwoBlogRows>
                }
            </BlogIndexWrapper>
        );
    };
};
const TwoBlogRows = styled.div`
a {
    h1 { 
        font-size: 2.25vw;
        text-align: left;
        line-height: 3vw;
        padding: 0;
        margin-top: -.75vw;
    }
    h4 {
        font-size: 1.25vw;
        line-height: 2vw;
        margin-top: 1vw;
    }
    p {
        margin-top: 1vw;
        font-size: 1.33vw;
        line-height: 2vw;
        color: var(--grey);
    }
    small { 
        font-size: 1.125vw;
        line-height: 4vw;
    }
}
> div {
    width: 86vw;
    margin: 0 auto 2.5vw;
    > a {
        > section {
            text-align: left;
            width: 42vw;
            height: 24vw;
            display: inline-block;
            vertical-align: top; 
            &:first-of-type {
                margin-right: 2vw;
                border-top: 1px solid rgba(0,0,0,.1);
            }
            &:last-of-type {
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                border-top: 1px solid rgba(0,0,0,0);
            }
        }
    }
}
`;

const BlogIndexWrapper = styled.div`
    position: relative;

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