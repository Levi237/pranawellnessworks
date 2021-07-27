import React from 'react';
import styled from 'styled-components';

const ShowBlog = ({blog, author}) => {

    const renderBlog = blog.copy.map((bc, k) => {

        if (bc.tag === "h2" || bc.tag === "h3" || bc.tag === "h4" || bc.tag === "p"){
            const textMap = bc.content.map(txt => {
                if (txt.tag === "a"){
                    return <a href={txt.link}>{txt.text}</a>
                } else if ( txt.tag === "i" ) { 
                    return <i>{txt.text}</i>
                } else if ( txt.tag === "b" ) { 
                    return <b>{txt.text}</b>
                } else {
                    return <span>{txt.text}</span>
                }
            })
            if (bc.tag === "h2"){ return <h2 key={k}>{textMap}</h2> }
            if (bc.tag === "h3"){ return <h3 key={k}>{textMap}</h3> }
            if (bc.tag === "h4"){ return <h4 key={k}>{textMap}</h4> }
            if (bc.tag === "p"){ return <p key={k}>{textMap}</p> }
        }

        if (bc.tag === "img"){
            return <img className={`blog-image ${bc.class}`} src={`/blog/${bc.src}`}/>
        }

        if (bc.tag === "ol" || bc.tag === "ul"){
            const listMap = bc.list.map((l) => {
                const listItem = l.item.map(i => {
                    if (i.tag === "a"){
                        return <a href={i.link} target="_blank">{i.text}</a>
                    } else if (i.tag === "i"){
                        return <i>{i.text}</i>
                    } else if (i.tag === "b"){
                        return <b>{i.text}</b>
                    } else if (i.tag === "img"){
                        return <img className={`blog-image ${i.class}`} src={`/blog/${i.src}`}/>  
                    } else {
                        return <span>{i.text}</span>
                    }
                })
                return <li key={k}>{listItem}</li>
            })
            if (bc.tag === "ol" ){ return <ol>{listMap}</ol> } 
            if (bc.tag === "ul" ){ return <ul>{listMap}</ul> } 
        }
    });

    return(
        <BlogWrapper id={blog.id}>
            <article>
                <small>{blog.category}</small>
                <h1>{blog.title}</h1>
                <h4>by {author.firstName} {author.lastName} <b>|</b> {blog.publishDate}</h4>
                <img src={`/blog/${blog.heroImage}`}/>
                <div>{renderBlog}</div>
            </article>
        </BlogWrapper>
    );
};

const BlogWrapper = styled.div`
    padding: 20px 0 120px;
    position: relative;

    .blog-image.wide {
        width: 100%;
        margin: 10px auto;
    }

    > article {
        line-height: 150%;
        width: 80vw;
        margin: 0 auto;
        text-align: left;
        color: var(--grey);
        font-weight: 100;

        > img:first-of-type {
            width: 100%;
            padding: 20px 0 40px;
        }

        > h1 {
            font-family: var(--fancy-font);
            text-transform: none;
            text-align: left;
            padding: 5px 0 0;
            line-height: 100%;
        }

        > h4 {
            font-size: 15px;
            color: var(--lightgrey);
        }
        
        > small {
            font-size: 14px;
            text-transform: uppercase;
            color: var(--green);
        }
        b {
            color: var(--purple)!important;
            font-weight: 800;
        }
    }
    a {
        color: var(--green);
        &:hover {
            color: var(--lightgreen);
        }
    }
    h2 {
        font-size: 24px;
        padding: 10px 0;
        color: var(--purple);
    }
    p {
        padding: 10px 0; 
    }
    ul,
    ol {
        width: 80%;
        margin: 0 auto;
        padding-inline-start: 40px;
        padding-inline-end: 40px;
    }
    li {
        padding: 10px 0;
    }
    @media screen and (max-width: 945px){
        > article {
            width: 100vw;
            text-align: center;
            > img:first-of-type {
                width: 100%;
                padding: 20px 0 20px;
            }
            > h1 {
                font-size: 28px;
                text-align: center;
            }
            > h2 {
                font-size: 22px;
            }
            
            > div {
                text-align: left;
                padding: 0 20px;
            }
        }
        ol {
            padding-inline-start: 5vw;
            padding-inline-end: 5vw;
        }
    }
`;
export default ShowBlog;