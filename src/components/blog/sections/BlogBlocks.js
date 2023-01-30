import styled       from 'styled-components';
import { Link, useParams }     from 'react-router-dom';

const BlogBlocks = ({blogs, selectBlog}) => {
  // const { id } = useParams();
  const mapBlogFilter = blogs.map((bf, k) => {
    const categoryLink = bf.category.replaceAll(' ','_').toLowerCase();
    const endpoint = bf.title
      .replaceAll(' ','_')
      .replaceAll('?','')
      .replaceAll('.','')
      .replaceAll('!','')
      .toLowerCase() ;
    return(
      <div key={k}>
        <Link className="blog-link" to={`/blog/${bf.id}/${endpoint}`} onClick={(e) => selectBlog(e, bf)}>
            <section className="img" style={{backgroundImage: `url(/blog/thumbnail/${bf.id}_1.jpg)`}}></section>
        </Link>
        <section className="txt">
          <p>
            <small>
              <Link to={`/blog/${categoryLink}`} >{bf.category}</Link>
            </small>
          </p>
          <Link to={`/blog/${bf.id}/${endpoint}`} onClick={(e) => selectBlog(e, bf)}>
            <h1>{bf.title}</h1>
          </Link>        
        </section>
      </div>
    );
  });

  return(
    <BlockColumns>
      <div>
        {mapBlogFilter}
      </div>
    </BlockColumns>
  );
};

const BlockColumns = styled.div`
  padding-top: 40px;
  width: 100vw;
  text-align: center;

  a > .img {
    transition: background-size 3s ease!important;
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      text-decoration-color: var(--lightpurple);
      > .img {
        background-size: 120%;
        transition: background-size 3s ease!important;
      }
    }
  }
  h1 {
      font-size: 1.75vw;  
      text-align: left;
      padding: 6px 2vw;
  }
  h4{
    font-size: 1vw;
    padding: 0 2vw;
  }
  p {
    padding: 10px 2vw 0;
  }
  small {
    a {
      font-size: .9vw;
      color: inherit;
      &:hover {
        color: var(--purple);
        text-decoration: none;
      }
    }
  }
  > div {
    display: inline-block;
    text-align: left;
    width: 88vw;
    margin: 0 auto;
    
    > div {
      width: 22vw;
      display: inline-block;
      vertical-align: top;
      text-align: left;

      // &:first-of-type {
      //   display: none;
      // }
      // &:nth-of-type(2) {
      //   display: none;
      // }
      // &:nth-of-type(3) {
      //   display: none;
      // }
      .img {
        height: 11vw;
        margin: 0 auto;
        width: 20vw;
        background-size: 110%;
        background-position: center;
        background-repeat: no-repeat;
      }
      .txt {
        height: 14vw;
      }
    }
  }

  @media screen and (max-width: 945px) {
    h1 {
      font-size: 2.5vw;  
    }
    h4 {
      font-size: 2vw;
    }
    p {
      small {
        font-size: 2vw;
      }
    }
    small {
      a {
        font-size: 2vw;
      }
    }
    > div {
      width: 90vw!important;
      // padding-left: 5vw;
      > div {
        width: 45vw;
        overflow: hidden;
        .img {
          height: 22vw;
          width: 41vw;
        }
        .txt {
          height: clamp(0px, 19vw, 106px);
          width: 41vw;
          margin: 0 auto;
          p {
            padding: 5px 0 0;
          }
        }
      }
    }
  }
  @media screen and (max-width: 640px) {
      h1 {
        font-size: clamp(12px, 4vw, 18px);  
        padding: 0 0 20px;
      }
      h4{
        font-size: 4vw;
        padding: 0;
      }
      p {
        padding: 10px 0;
        small {
          font-size: 10px;
        }
      }
      > div {
        width: 42.5vw;
        // margin-left: 5vw;
        // padding-left: 5vw;
        // &:nth-of-type(odd) {
        //   margin-right: 5vw;
        // }
        .img {
          height: 45vw;
          width: 100%;
        }
        .txt {
          height: auto;
        }
      }
    }
  }
`;

export default BlogBlocks;