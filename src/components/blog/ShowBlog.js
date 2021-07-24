import React from 'react';
import styled from 'styled-components';
import { bgCyan } from 'ansi-colors';

const ShowBlog = ({blog, author}) => {

    const renderBlog = blog.copy.map((bc, k) => {
        if(bc.type === "h2"){
            return (<h2 key={k}>
                {bc.content[0].text}
            </h2>)
        }
        if(bc.type === "p"){
            const list = bc.content.map(text => {
                if(text.type === "a"){
                    return <a href={text.link}>{text.text}</a>
                } else if( text.type === "b" ) { 
                    return <b>{text.text}</b>
                } else {
                    return <span>{text.text}</span>
                }
            })
            return (<p key={k}>
                {list}
            </p>)
        }
        if(bc.type === "ol"){
            const list = bc.content.map((item) => {
                const listItem = item.list.map(i => {
                    if(i.type === "a"){
                        return <a href={i.link} target="_blank">{i.text}</a>
                    } else if(i.type === "b"){
                        return <b>{i.text}</b>
                    } else {
                    return <span>{i.text}</span>
                    }
                })
                return <li key={k}>{listItem}</li>
            })
            return (<ol>
                {list}
            </ol>)
        }
    });

    return(
        <BlogWrapper id={blog.id}>
        <article>
            <small>{blog.category}</small>
            <h1>{blog.title}</h1>
            <h4>by {author.firstName} {author.lastName} <b>|</b> {blog.publishDate}</h4>
            <img src={`blogs/${blog.heroImage}`}/>
            <h2>{blog.subtitle}</h2>
            <div>{renderBlog}</div>
        </article>
        </BlogWrapper>
    );
};

const BlogWrapper = styled.div`
padding: 20px 0 120px;
    position: relative;
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
            
            > div {
                text-align: left;
                padding: 0 20px;
            }
        }
        
    }
`;
export default ShowBlog;