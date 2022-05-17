import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// CategoryPreview
// Displays most recent 5 blogs from blog category.
// Most recent blog large on left, remaining 4 stacked on right.

export default class CategoryPreview extends Component {
    state = {

    }
    render(){
        const { scrollToTop, selectBlog,  blogs, author } = this.props;
        
        const blogCategory = blogs.filter(blog => blog.category === "Mindfulness & Meditation");

        
        // const mapCategory = blogCategory.map((topic, k) => {
        //     return(
        //         <div key={k}>
        //             <Link to={`/blog/${topic.id}/${topic.endpoint}`}  onClick={(e) => selectBlog(e, topic)}>
        //                 <section style={{backgroundImage: `url(/blog/thumbnail/${topic.id}_1.jpg)`}}>
        //                 </section>
        //                 <section>
        //                     <h1>{topic.title}</h1>
        //                     <p>{topic.subtext}</p>
        //                 </section>
        //             </Link>
        //         </div>
        //     );
        // });
        const categoryLink = blogCategory[0].category.replaceAll(' ','_');
        return(
                <CategoryPreviewWrapper>
                    <h2 onClick={scrollToTop}><Link to={`/blog/${categoryLink}`}>{blogCategory[0].category}</Link></h2>
                    <div>
                        <FeatureBox>
                            <div>
                                <Link to={`/blog/${blogCategory[0].id}/${blogCategory[0].endpoint}`}  onClick={(e) => selectBlog(e, blogCategory[0])}>
                                    <section style={{backgroundImage: `url(/blog/${blogCategory[0].id}_1.jpg)`}}>
                                    </section>
                                    <section>
                                        <h1>{blogCategory[0].title}</h1>
                                        <h4>by {author.firstName} {author.lastName}</h4>  
                                    </section>
                                </Link>
                            </div>
                        </FeatureBox>
                        <ThreeRows>
                            {/* {mapCategory} */}
                            <div>
                                <Link to={`/blog/${blogCategory[1].id}/${blogCategory[1].endpoint}`}  onClick={(e) => selectBlog(e, blogCategory[1])}>
                                    <section style={{backgroundImage: `url(/blog/thumbnail/${blogCategory[1].id}_1.jpg)`}}>
                                    </section>
                                    <section>
                                        <h1>{blogCategory[1].title}</h1>
                                        <p>{blogCategory[1].subtext}</p>
                                    </section>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/blog/${blogCategory[2].id}/${blogCategory[2].endpoint}`}  onClick={(e) => selectBlog(e, blogCategory[2])}>
                                    <section style={{backgroundImage: `url(/blog/thumbnail/${blogCategory[2].id}_1.jpg)`}}>
                                    </section>
                                    <section>
                                        <h1>{blogCategory[2].title}</h1>
                                        <p>{blogCategory[2].subtext}</p>
                                    </section>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/blog/${blogCategory[3].id}/${blogCategory[3].endpoint}`}  onClick={(e) => selectBlog(e, blogCategory[3])}>
                                    <section style={{backgroundImage: `url(/blog/thumbnail/${blogCategory[3].id}_1.jpg)`}}>
                                    </section>
                                    <section>
                                        <h1>{blogCategory[3].title}</h1>
                                        <p>{blogCategory[3].subtext}</p>
                                    </section>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/blog/${blogCategory[4].id}/${blogCategory[4].endpoint}`}  onClick={(e) => selectBlog(e, blogCategory[4])}>
                                    <section style={{backgroundImage: `url(/blog/thumbnail/${blogCategory[4].id}_1.jpg)`}}>
                                    </section>
                                    <section>
                                        <h1>{blogCategory[4].title}</h1>
                                        <p>{blogCategory[4].subtext}</p>
                                    </section>
                                </Link>
                            </div>
                        </ThreeRows>
                        <br/><br/>
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
            width: 100%;
            text-align: center!important;
        }
        > section:first-of-type {
            height: calc(2px + 24vw);
        }
        > section + section {
            height: auto;
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
    // > div:first-of-type {
    //     display: none!important;
    // }
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
    border-bottom: 1px solid rgba(0,0,0,.1);
    > a {
        color: var(--green);
        text-decoration: none;
        &: hover {
            color: var(--lightgreen);
        }
    }
}
> div {
    width: 86vw;
    margin: 0 auto 2.5vw;
        > section {
            text-align: left;
            width: 42vw;
            height: auto;
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