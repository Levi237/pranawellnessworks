import React from 'react';
import { Link } from 'react-router-dom';

const ThreeColumnsCard = ({ selectBlog,  blogs, scrollToTop }) => {
const getBlogs = blogs.map((blog, k) => {
    const limit = 4;
    const blogEndpoint = blog.title
    .replaceAll(' ','_')
    .replaceAll('?','')
    .replaceAll('.','')
    .replaceAll('!','')
    .toLowerCase() ;
    const categoryEndpoint = blog.category
    .replaceAll(' ','_')
    .toLowerCase() ;
    if ( k < limit ) {
        return (
            <div key={k}>
                <Link to={`/blog/${blog.id}/${blogEndpoint}`}  onClick={(e) => selectBlog(e, blog)}>
                    <div className="img-div" style={{backgroundImage: `url(/blog/${blog.id}_1.jpg)`}}>
                    </div>
                    <section>
                        <h2>{blog.title}</h2>
                        {/* <small>{blog.publishDate}</small> */}
                    </section>
                </Link>
            </div>
        )
    }
    if ( k === limit) {
        return (
            <div className="view-more" key={k}>
                <Link 
                    to={`/blog/${categoryEndpoint}`}  
                    onClick={scrollToTop}
                    >
                        view more →
                </Link>
            </div>
        )
    }
});
return(
    <>
    {getBlogs}
    </>
)
}
export default ThreeColumnsCard;