import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ShowBlog = ({blogs, author}) => {
    const { id } = useParams();
    let blog = ''
    blogs.filter(bl => {
        console.log(id)
        if(bl.id == id) {
            blog = bl
        }
    })


    const renderBlog = blog.copy.map((bc, key) => {

        if (bc.tag === "h2" || bc.tag === "h3" || bc.tag === "h4" || bc.tag === "p"){
            const textMap = bc.content.map(txt => {
                if (txt.tag === "a"){
                    return <a href={txt.link}>{txt.text}</a>
                } else if ( txt.tag === "sup" ) { 
                    return <sup>{txt.text}</sup>    
                } else if ( txt.tag === "sub" ) { 
                    return <sub>{txt.text}</sub>                   
                } else if ( txt.tag === "small" ) { 
                    return <small>{txt.text}</small>
                } else if ( txt.tag === "i" ) { 
                    return <i>{txt.text}</i>
                } else if ( txt.tag === "b" ) { 
                    return <b>{txt.text}</b>
                } else if ( txt.tag === "u" ) { 
                    return <u>{txt.text}</u>
                } else if ( txt.tag === "br" ) { 
                    return <br/>
                } else {
                    return <span>{txt.text}</span>
                }
            })
            if (bc.tag === "h2"){ return <h2 key={key}>{textMap}</h2> }
            if (bc.tag === "h3"){ return <h3 key={key}>{textMap}</h3> }
            if (bc.tag === "h4"){ return <h4 key={key}>{textMap}</h4> }
            if (bc.tag === "p"){ return <p key={key}>{textMap}</p> }
        }

        if (bc.tag === "img"){
            return <img className={`blog-image ${bc.class}`} src={`/blog/${bc.src}`}/>
        }
        if (bc.tag === "i"){
            return <i>{bc.content[0].text}</i>
        }
        if (bc.tag === "b"){
            return <b>{bc.content[0].text}</b>
        }

        if (bc.tag === "section"){
            const listMap = bc.list.map((li, ki) => {
                const textMap = li.content.map(txt => {
                    if (txt.tag === "a"){
                        return <a href={txt.link}>{txt.text}</a>
                    } else if ( txt.tag === "sup" ) { 
                        return <sup>{txt.text}</sup>    
                    } else if ( txt.tag === "sub" ) { 
                        return <sub>{txt.text}</sub>                   
                    } else if ( txt.tag === "small" ) { 
                        return <small>{txt.text}</small>
                    } else if ( txt.tag === "u" ) { 
                        return <u>{txt.text}</u>
                    } else if ( txt.tag === "i" ) { 
                        return <i>{txt.text}</i>
                    } else if ( txt.tag === "b" ) { 
                        return <b>{txt.text}</b>
                    } else if ( txt.tag === "br" ) { 
                        return <br/>
                    } else if ( li.tag === "img" ) { 
                        return <img className={`blog-image ${txt.class}`} src={`/blog/${txt.src}`}/>
                    } else {
                        return <span>{txt.text}</span>
                    }
                })
                if (li.tag === "h2"){ return <h2 key={ki}>{textMap}</h2> }
                if (li.tag === "h3"){ return <h3 key={ki}>{textMap}</h3> }
                if (li.tag === "h4"){ return <h4 key={ki}>{textMap}</h4> }
                if (li.tag === "p"){ return <p key={ki}>{textMap}</p> }
                if (li.tag === "img"){ return <span key={ki}>{textMap}</span> }
            })
            return <section key={key}>{listMap}</section>
        }
        
        if (bc.tag === "ol" || bc.tag === "ul"){
            const listMap = bc.list.map((li, ki) => {
                const listItem = li.item.map(txt => {
                    if (txt.tag === "a"){
                        return <a href={txt.link} target="_blank">{txt.text}</a>
                    } else if ( txt.tag === "sup" ) { 
                        return <sup>{txt.text}</sup>    
                    } else if ( txt.tag === "sub" ) { 
                        return <sub>{txt.text}</sub>                   
                    } else if ( txt.tag === "small" ) { 
                        return <small>{txt.text}</small>
                    } else if (txt.tag === "i"){
                        return <i>{txt.text}</i>
                    } else if (txt.tag === "b"){
                        return <b>{txt.text}</b>
                    } else if (txt.tag === "u"){
                        return <u>{txt.text}</u>
                    } else if ( txt.tag === "br" ) { 
                        return <br/>
                    } else if (txt.tag === "img"){
                        return <img className={`blog-image ${txt.class}`} src={`/blog/${txt.src}`}/>  
                    } else {
                        return <span>{txt.text}</span>
                    }
                })
                return <li key={ki}>{listItem}</li>
            })
            if (bc.tag === "ol" ){ return <ol key={key}>{listMap}</ol> } 
            if (bc.tag === "ul" ){ return <ul key={key}>{listMap}</ul> } 
        }
    });

    return(
        <BlogWrapper 
            id={blog.id}
            >
            <article>
                <small>{blog.category}</small>
                <h1>{blog.title}</h1>
                <h4>By {author.firstName} {author.lastName} <span>|</span> {blog.publishDate}</h4>
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
    }

    > article {
        line-height: 150%;
        width: 80vw;
        margin: 0 auto;
        text-align: left;
        color: var(--grey);
        font-weight: 100;

        h1 {
            padding: 10px 0;
        }
        h2, h3 {
            padding: 30px 0 10px;
        }

        img {
            margin: 10px auto;
        }
        > img:first-of-type {
            width: 100%;
            padding: 10px 0;
        }


    }

    a {
        color: var(--green);
        &:hover {
            color: var(--lightgreen);
        }
    }

    h1 {
        font-family: var(--fancy-font);
        text-transform: none;
        text-align: left;
        padding: 5px 0 0;
        line-height: 100%;
    }
    h2 {
        font-size: 24px;
        color: var(--purple);
    }
    h3 {
        font-size: 16px;
        color: var(--purple);
    }
    h4 {
        font-size: 15px;
        font-weight: 100;
        color: var(--lightgrey);
    }
    p {
        font-size: 16px;
        padding: 10px 0; 
    }
    small {
        font-size: 14px;
        text-transform: uppercase;
        color: var(--green);
    }
    b {
        color: var(--purple)!important;
        font-weight: 800;
    }

    section,
    ul,
    ol {
        width: 80%;
        margin: 0 auto;
    }
    ul,
    ol {
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
    
            > div {
                text-align: left;
                padding: 0 20px;
            }
        }

        h1 {
            font-size: 28px;
            text-align: center;
        }
        h2 {
            font-size: 22px;
        }
        ol {
            padding-inline-start: 5vw;
            padding-inline-end: 5vw;
        }
    }
`;
export default ShowBlog;