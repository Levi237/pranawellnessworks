import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class TwoRows extends Component {
    state = {}
    render(){
        const { selectBlog,  blogs, author } = this.props;
        const getBlogs = blogs.map((blog, k) => {
            if ( k === 1 || k === 2 ) {
             const endpoint = blog.title
                .replaceAll(' ','_')
                .replaceAll('?','')
                .replaceAll('.','')
                .replaceAll('!','')
                .toLowerCase() ;
                return (
                    <div key={k}>
                        <Link to={`/blog/${blog.id}/${endpoint}`}  onClick={(e) => selectBlog(e, blog)}>
                            <section>
                            <small>{blog.category}</small>
                                <h1>{blog.title}</h1>
                                <p>{blog.subtext}</p>
                                <h4>{blog.publishDate}<span className="desktop-inline">&nbsp;|&nbsp;<br className="mobile-inline"/>By {author.firstName} {author.lastName}</span></h4>
                            </section>
                            <section style={{backgroundImage: `url(/blog/${blog.id}_1.jpg)`}}>
                            </section>
                        </Link>
                    </div>
                )
            } 
        })
        return(
                <TwoBlogRows>
                    {getBlogs}
                </TwoBlogRows>
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
    &:hover {
        h1 {
            text-decoration: underline;
        }
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
    @media screen and (max-width: 640px) {
        a {
            h1 { 
                font-size: 4.25vw;
                text-align: left;
                line-height: 120%;
                padding: 0;
                margin-top: 2vw;
            }
            h4 {
                font-size: 3vw;
                line-height: 2vw;
                margin-top: 1vw;
                line-height: 120%;
            }
            p {
                margin-top: 2vw;
                font-size: 3.6vw;
                line-height: 120%;
                // display: none;
            }
            small { 
                font-size: 2.5vw;
                line-height: 120%;
            }
        }
        > div {
            width: 100vw;
            margin: 0 auto 5vw;
            > a {
                > section {
                    text-align: left;
                    width: 50vw;
                    height: 65vw;
                    display: inline-block;
                    vertical-align: top; 

                    &:first-of-type {
                        margin-right: 0;
                        border-top: 1px solid rgba(0,0,0,0);
                        > * {
                            padding: 0 5vw;
                        }
                    }
                    &:last-of-type {
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        border-top: 1px solid rgba(0,0,0,0);
                        float: left;
                    }
                }
            }
        }
    }
`;