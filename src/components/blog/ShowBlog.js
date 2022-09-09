import React                        from 'react';
import styled                       from 'styled-components';
import { useHistory, useParams }    from 'react-router-dom';


const ShowBlog = ({blogs, author}) => {
    
    let history = useHistory();
    
    const { id } = useParams();
    let blog = ''
    blogs.filter(bl => {
        if(bl.id === id) {
            blog = bl
        }
    })

    const renderBlog = blog.copy.map((bc, key) => {

        if (bc.tag === "img"){
            return <img key={key} className={`blog-image ${bc.class}`} src={`/blog/${id}_${bc.num}.jpg` } alt={`${id}_${bc.num}`}/>
        }
        if (bc.tag === "i"){
            return <i key={key} >{bc.content[0].text}</i>
        }
        if (bc.tag === "b"){
            return <b key={key} >{bc.content[0].text}</b>
        }
        if (bc.tag === "br"){
            return <br key={key} />
        }
        if (bc.tag === "hr"){
            return <hr key={key} />
        }

        if (bc.tag === "h2" || bc.tag === "h3" || bc.tag === "h4" || bc.tag === "p"){
            const textMap = bc.content.map((txt, k) => {
                if (txt.tag === "a"){
                    return <a  key={k} href={txt.link} target="_blank" rel="noreferrer">{txt.text}</a>
                } else if ( txt.tag === "sup" ) { 
                    return <sup key={k}>{txt.text}</sup>    
                } else if ( txt.tag === "sub" ) { 
                    return <sub key={k}>{txt.text}</sub>                   
                } else if ( txt.tag === "small" ) { 
                    return <small key={k}>{txt.text}</small>
                } else if ( txt.tag === "i" ) { 
                    return <i key={k}>{txt.text}</i>
                } else if ( txt.tag === "b" ) { 
                    return <b key={k}>{txt.text}</b>
                } else if ( txt.tag === "u" ) { 
                    return <u key={k}>{txt.text}</u>
                } else if ( txt.tag === "br" ) { 
                    return <br key={k}/>
                } else if ( txt.tag === "hr" ) { 
                    return <hr key={k}/>
                } else {
                    return <span key={k}>{txt.text}</span>
                }
            })

            if (bc.tag === "h2"){ return <h2 key={key}>{textMap}</h2> }
            if (bc.tag === "h3"){ return <h3 key={key}>{textMap}</h3> }
            if (bc.tag === "h4"){ return <h4 key={key}>{textMap}</h4> }
            if (bc.tag === "p"){ return <p key={key}>{textMap}</p> }
            if (bc.tag === "br"){ return <br key={key}/> }
            if (bc.tag === "hr"){ return <hr key={key}/> }

            return <></>
        }

        if (bc.tag === "section"){
            const listMap = bc.list.map((li, ki) => {
                if (li.tag !== "hr" || li.tag !== "br" ) {
                    const textMap = li.content.map((txt, k) => {
                        if (txt.tag === "a"){
                            return <a key={k} href={txt.link} target="_blank" rel="noreferrer">{txt.text}</a>
                        } else if ( txt.tag === "sup" ) { 
                            return <sup key={k}>{txt.text}</sup>    
                        } else if ( txt.tag === "sub" ) { 
                            return <sub key={k}>{txt.text}</sub>                   
                        } else if ( txt.tag === "small" ) { 
                            return <small key={k}>{txt.text}</small>
                        } else if ( txt.tag === "u" ) { 
                            return <u key={k}>{txt.text}</u>
                        } else if ( txt.tag === "i" ) { 
                            return <i key={k}>{txt.text}</i>
                        } else if ( txt.tag === "b" ) { 
                            return <b key={k}>{txt.text}</b>
                        } else if ( txt.tag === "u" ) { 
                            return <u key={k}>{txt.text}</u>
                        } else if ( txt.tag === "br" ) { 
                            return <br key={k}/>
                        } else if ( txt.tag === "hr" ) { 
                            return <hr key={k}/>
                        } else if ( li.tag === "img" ) { 
                            return <img key={key} className={`blog-image ${txt.class}`} src={`/blog/${id}_${txt.num}.jpg` } alt={`${id}_${txt.num}`}/>
                        } else {
                            return <span  key={k} >{txt.text}</span>
                        }
                    })
                    if (li.tag === "h2"){ return <h2 key={ki}>{textMap}</h2> }
                    if (li.tag === "h3"){ return <h3 key={ki}>{textMap}</h3> }
                    if (li.tag === "h4"){ return <h4 key={ki}>{textMap}</h4> }
                    if (li.tag === "p"){ return <p key={ki}>{textMap}</p> }
                    if (li.tag === "img"){ return <span key={ki}>{textMap}</span> }
                }

                if (li.tag === "br"){ return <br key={ki}/> }
                if (li.tag === "hr"){ return <hr key={ki}/> }

                return <></>
            })
            return <section key={key}>{listMap}</section>
        }
        
        if (bc.tag === "ol" || bc.tag === "ul"){
            const listMap = bc.list.map((li, ki) => {
                const listItem = li.item.map((txt, k) => {
                    if (txt.tag === "a"){
                        return <a key={k} href={txt.link} target="_blank" rel="noreferrer">{txt.text}</a>
                    } else if ( txt.tag === "h2" ) { 
                        return <h2 key={k}>{txt.text}</h2>   
                    } else if ( txt.tag === "sup" ) { 
                        return <sup key={k}>{txt.text}</sup>    
                    } else if ( txt.tag === "sub" ) { 
                        return <sub key={k}>{txt.text}</sub>                   
                    } else if ( txt.tag === "small" ) { 
                        return <small key={k}>{txt.text}</small>
                    } else if (txt.tag === "i"){
                        return <i key={k}>{txt.text}</i>
                    } else if (txt.tag === "b"){
                        return <b key={k}>{txt.text}</b>
                    } else if (txt.tag === "u"){
                        return <u key={k}>{txt.text}</u>
                    } else if ( txt.tag === "br" ) { 
                        return <br key={k}/>
                    } else if ( txt.tag === "hr" ) { 
                        return <hr key={k}/>
                    } else if ( txt.tag === "img" ) { 
                        return <img key={key} className={`blog-image ${txt.class}`} src={`/blog/${id}_${txt.content[0].num}.jpg` } alt={`${id}_${txt.num}`}/>
                    } else {
                        return <span key={k}>{txt.text}</span>
                    }
                })
                return <li key={ki}>{listItem}</li>
            })
            if (bc.tag === "ol" ){ return <ol key={key}>{listMap}</ol> } 
            if (bc.tag === "ul" ){ return <ul key={key}>{listMap}</ul> } 
        }
        return <></>
    });

    return(
        <BlogWrapper 
            id={blog.id}
            >
            <article>
                <small className="category uppercase">{blog.category}</small>
                <h1>{blog.title}</h1>
                <h4>By {author.firstName} {author.lastName} <span>|</span> {blog.publishDate}</h4>
                <img src={`/blog/${blog.id}_1.jpg`} alt={blog.title}/>
                <div>{renderBlog}</div>
            </article>
            <BottomNav>
                <button onClick={() => history.goBack()}>Back</button>
            </BottomNav>
        </BlogWrapper>
    );
};


const BottomNav = styled.div`
    padding-top: 80px;
`;
const BlogWrapper = styled.div`
    padding: 20px 0 120px;
    position: relative;
    .uppercase { text-transform: uppercase }
    .category { font-size: 14px }
    .blog-image.wide {
        width: 100%;
    }
    .blog-image.medium {
        width: 80%;
        margin-left: 10%;
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
        font-size: 14px;
        font-weight: 100;
        color: var(--lightgrey);
    }
    p {
        font-size: 16px;
        padding: 10px 0; 
    }
    small {
        font-weight: 500;
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
        .blog-image.small {
            width: 100%;
        }
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