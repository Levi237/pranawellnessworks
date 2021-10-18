import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class CategoryPreview extends Component {
    state = {

    }
    render(){
        const { selectBlog,  blogs, author } = this.props;
        const blogCategory = blogs.filter(blog => blog.category === "Mindfulness & Meditation");
        console.log(blogCategory, "category")
        const oldToNewCategory = blogCategory.reverse();
        return(
                <CategoryPreviewWrapper>
                    <h2>{oldToNewCategory[0].category}</h2>
                    <div>
                        <FeatureBox>
                            <div>
                                <Link to={`/blog/${oldToNewCategory[0].id}/${oldToNewCategory[0].endpoint}`}  onClick={(e) => selectBlog(e, oldToNewCategory[0])}>
                                    <section style={{backgroundImage: `url(/blog/${oldToNewCategory[0].heroImage})`}}>
                                    </section>
                                    <section>
                                        <h1>{oldToNewCategory[0].title}</h1>
                                        <h4>by {author.firstName} {author.lastName}</h4>  
                                    </section>
                                </Link>
                            </div>
                        </FeatureBox>
                        <ThreeRows>
                            <div>
                                <Link to={`/blog/${oldToNewCategory[1].id}/${oldToNewCategory[1].endpoint}`}  onClick={(e) => selectBlog(e, oldToNewCategory[1])}>
                                    <section style={{backgroundImage: `url(/blog/${oldToNewCategory[1].heroImage})`}}>
                                    </section>
                                    <section>
                                        <h1>{oldToNewCategory[1].title}</h1>
                                        <p>{oldToNewCategory[0].subtext}</p>
                                    </section>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/blog/${oldToNewCategory[2].id}/${oldToNewCategory[2].endpoint}`}  onClick={(e) => selectBlog(e, oldToNewCategory[2])}>
                                    <section style={{backgroundImage: `url(/blog/${oldToNewCategory[2].heroImage})`}}>
                                    </section>
                                    <section>
                                        <h1>{oldToNewCategory[2].title}</h1>
                                        <p>{oldToNewCategory[2].subtext}</p>
                                    </section>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/blog/${oldToNewCategory[3].id}/${oldToNewCategory[3].endpoint}`}  onClick={(e) => selectBlog(e, oldToNewCategory[3])}>
                                    <section style={{backgroundImage: `url(/blog/${oldToNewCategory[3].heroImage})`}}>
                                    </section>
                                    <section>
                                        <h1>{oldToNewCategory[3].title}</h1>
                                        <p>{oldToNewCategory[3].subtext}</p>
                                    </section>
                                </Link>
                            </div>
                        </ThreeRows>
                    </div>
                </CategoryPreviewWrapper>
        );
    };
};
const FeatureBox = styled.section`
    width: 100%;
    a {
        h1 { 
            margin-top: .5vw;
            font-size: 2.25vw;
            text-align: center;
            line-height: 3vw;
            padding: 0;
        }
        h4 {
            margin-top: .5vw;
            font-size: 1.33vw;
            line-height: 2vw;
            color: var(--grey);
        }

        > section {
            height: calc(2px + 24vw);
            width: 100%;
            text-align: center!important;
        }
    }
    @media screen and (max-width: 640px) {
        a {
            h1 { 
                margin-top: 4vw;
                font-size: 5vw;
                line-height: 5vw;
            }
            h4 {
                margin-top: 1vw;
                font-size: 3vw;
                line-height: 3vw;
                color: var(--grey);
            }
    
            > section:first-of-type {
                height: 50vw;
                width: 100%;
                text-align: center!important;
            }
            > section:last-of-type {
                height: auto;
            }
        }
    }
`;
const ThreeRows = styled.section`
    width: 100%;

    a {
        h1 { 
            font-size: 1.75vw;
            text-align: left;
            line-height: 2.25vw;
            padding: 0;
            margin-top: 1px;
        }
        h4 {
            font-size: 1.2vw;
            line-height: 100%;
            margin-top: .3vw;
        }
        p {
            margin-top: .3vw;
            font-size: 1.2vw;
            line-height: 1.5vw;
            color: var(--grey);
        }

        > section {
            &:first-of-type {
                height: 8vw;
                width: 14vw;
                margin-right: 2vw;
                margin-left: 1px;
            }
            &:last-of-type {
                height: 8vw;
                width: calc(26vw - 1px);
            }
        }
    }
    @media screen and (max-width: 640px) {
        a {
            width: 100%;

            h1 { 
                font-size: 4.5vw;
                text-align: left;
                line-height: 120%;
                padding: 0;
                margin-top: 1px;
            }
            p {
                margin-top: 1vw;
                font-size: 3.2vw;
                line-height: 120%;
                color: var(--grey);
            }

            > section {
                &:first-of-type {
                    height: 24vw;
                    width: 38vw;
                }
                &:last-of-type {
                    height: 24vw;
                    width: calc(60vw - 1px);
                }
            }
        }
    }
`;
const CategoryPreviewWrapper = styled.div`
a {
    > section {
        text-align: left;
        display: inline-block;
        vertical-align: top; 
        &:first-of-type {
            margin-right: 2vw;
            border-top: 1px solid rgba(0,0,0,0);
        }
        &:first-of-type {
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            border-top: 1px solid rgba(0,0,0,0);
        }
    }
}
> h2 {
    width: 86vw;
    margin: 0 auto 10px;
    text-align: left;
    color: var(--green);
    text-transform: uppercase;
    font-weight: 100;
    font-size: 2vw;
    border-bottom: 1px solid #000;
}
> div {
    width: 86vw;
    margin: 0 auto 2.5vw;
        > section {
            text-align: left;
            width: 42vw;
            height: 24vw;
            display: inline-block;
            vertical-align: top; 
            &:last-of-type {
                margin-right: 2vw;
            }
            &:first-of-type {
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;]
            }
        }
}
    @media screen and (max-width: 640px) {
        > h2 {
            font-size: 4vw;
        }
        // a {
        //     h1 { 
        //         font-size: 4.25vw;
        //         text-align: left;
        //         line-height: 120%;
        //         padding: 0;
        //         margin-top: 2vw;
        //     }
        //     h4 {
        //         font-size: 3vw;
        //         line-height: 2vw;
        //         margin-top: 1vw;
        //         line-height: 120%;
        //     }
        //     p {
        //         margin-top: 2vw;
        //         font-size: 3.6vw;
        //         line-height: 120%;
        //     }
        //     small { 
        //         font-size: 2.5vw;
        //         line-height: 120%;
        //     }
        // }
        > div {
            width: 100vw;
            margin: 0 auto 5vw;

                > section {
                    text-align: left;
                    width: 100vw;
                    height: auto;
                    display: inline-block;
                    vertical-align: top; 

                    &:first-of-type {
                        margin-right: 0;
                        margin-bottom: 5vw;
                        > * {
                            padding: 0 5vw;
                        }
                    }
                    &:last-of-type {
                        background-position: center;
                        background-size: cover;
                        background-repeat: no-repeat;
                        float: left;
                    }
                }

        }
    }
`;