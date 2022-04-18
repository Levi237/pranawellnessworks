import styled       from 'styled-components';
import { Link }     from 'react-router-dom';

const FourBlogBlocks = ({blogs, selectBlog}) => {
  
  const blogFilter = blogs.filter(blog => blog.category !== "Mindfulness & Meditation");
  const blogFilterTwo = blogFilter.filter(blog => blog.category !== "test");
  const mapBlogFilter = blogFilterTwo.map((bf, k) => {
    return(
      <div key={k}>
        <Link to={`/blog/${bf.id}/${bf.endpoint}`}  onClick={(e) => selectBlog(e, bf)}>
            <section className="img" style={{backgroundImage: `url(/blog/thumbnail/${bf.heroImage})`}}></section>
        </Link>
        <section className="txt">
          <p>
            <small>{bf.category}</small>
          </p>
          <Link to={`/blog/${bf.id}/${bf.endpoint}`}  onClick={(e) => selectBlog(e, bf)}>
            <h1>{bf.title}</h1>
          </Link>        
        </section>
      </div>
    );
  });

  return(
    <FourBlockColumns>
      {mapBlogFilter}
    </FourBlockColumns>
  );
};

const FourBlockColumns = styled.div`
  padding-top: 40px;
  width: 100vw;
  text-align: center;
  a {
    text-decoration: none;
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
    small {
      font-size: .9vw;
    }
  }

> div {
  width: 22vw;
  display: inline-block;
  vertical-align: top;
  text-align: left;

      .img {
        height: 11vw;
        margin: 0 auto;
        width: 20vw;
        background-size: cover;
        background-position: center;
      }
      .txt {
        height: 14vw;
      }

}

    @media screen and (max-width: 945px) {
      h1 {
        font-size: 2.5vw;  
      }
      h4{
        font-size: 1.75vw;
      }
      p {
        small {
          font-size: 1.5vw;
        }
      }
      > div {
        width: 45vw;
        .img {
          height: 22vw;
          width: 41vw;
        }
        .txt {
          height: 20vw;
        }
      }
    }
    @media screen and (max-width: 640px) {
        h1 {
          font-size: 18px;  
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
          &:nth-of-type(odd) {
            margin-right: 5vw;
          }
          .img {
            height: 45vw;
            width: 100%;
          }
          .txt {
            height: auto;
            // padding-bottom: 15vw;
          }
        }
      }
    }
`;

export default FourBlogBlocks;