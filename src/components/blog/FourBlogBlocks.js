import styled       from 'styled-components';

import { Link }     from 'react-router-dom';
// import * as routes  from '../../constants/routes';

const FourBlogBlocks = ({blogs,author, selectBlog}) => {

  return(
 <FourBlockColumns>

{ (blogs.length / blogs.length !== 1) &&
<div>
    <Link to={`/blog/${blogs[2].id}/${blogs[2].endpoint}`}  onClick={(e) => selectBlog(e, blogs[2])}>
          <section className="img" style={{backgroundImage: `url(/blog/${blogs[2].heroImage})`}}>
          </section>
    </Link>
        <section className="txt">
          <p>
            <small>{blogs[2].category}</small>
          </p>
          <Link to={`/blog/${blogs[2].id}/${blogs[2].endpoint}`}  onClick={(e) => selectBlog(e, blogs[2])}>
              <h1>{blogs[2].title}</h1>
          </Link>
          <h4>by {author.firstName} {author.lastName}</h4>
        </section>
</div> }
<div>
    <Link to={`/blog/${blogs[3].id}/${blogs[3].endpoint}`}  onClick={(e) => selectBlog(e, blogs[3])}>
          <section className="img" style={{backgroundImage: `url(/blog/${blogs[3].heroImage})`}}>
          </section>
    </Link>
        <section className="txt">
          <p>
            <small>{blogs[3].category}</small>
          </p>
          <Link to={`/blog/${blogs[3].id}/${blogs[3].endpoint}`}  onClick={(e) => selectBlog(e, blogs[3])}>
              <h1>{blogs[3].title}</h1>
          </Link>
          <h4>by {author.firstName} {author.lastName}</h4>
        </section>
</div>
<div>
    <Link to={`/blog/${blogs[4].id}/${blogs[4].endpoint}`}  onClick={(e) => selectBlog(e, blogs[4])}>
          <section className="img" style={{backgroundImage: `url(/blog/${blogs[4].heroImage})`}}>
          </section>
    </Link>
        <section className="txt">
          <p>
            <small>{blogs[4].category}</small>
          </p>
          <Link to={`/blog/${blogs[4].id}/${blogs[4].endpoint}`}  onClick={(e) => selectBlog(e, blogs[4])}>
              <h1>{blogs[4].title}</h1>
          </Link>
          <h4>by {author.firstName} {author.lastName}</h4>
        </section>
</div>
<div>
    <Link to={`/blog/${blogs[5].id}/${blogs[5].endpoint}`}  onClick={(e) => selectBlog(e, blogs[5])}>
          <section className="img" style={{backgroundImage: `url(/blog/${blogs[5].heroImage})`}}>
          </section>
    </Link>
        <section className="txt">
          <p>
            <small>{blogs[5].category}</small>
          </p>
          <Link to={`/blog/${blogs[5].id}/${blogs[5].endpoint}`}  onClick={(e) => selectBlog(e, blogs[5])}>
              <h1>{blogs[5].title}</h1>
          </Link>
          <h4>by {author.firstName} {author.lastName}</h4>
        </section>
</div>
{ (blogs.length / blogs.length  === 1) &&
<div>
    <Link to={`/blog/${blogs[6].id}/${blogs[6].endpoint}`}  onClick={(e) => selectBlog(e, blogs[6])}>
      <section className="img" style={{backgroundImage: `url(/blog/${blogs[6].heroImage})`}}>
      </section>
      </Link>
        <section className="txt">
          <p>
          <small>{blogs[6].category}</small>
        </p>
          <Link to={`/blog/${blogs[6].id}/${blogs[6].endpoint}`}  onClick={(e) => selectBlog(e, blogs[6])}>
              <h1>{blogs[6].title}</h1>
          </Link>
          <h4>by {author.firstName} {author.lastName}</h4>
        </section>
</div>
}
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
      padding: 1vw 2vw;
  }
  h4{
    font-size: 1vw;
    padding: 0 2vw;
  }
  p {
    padding: 1vw 2vw 0;
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
          font-size: 6.67vw;  
          padding: 0 0 2.5vw;
        }
        h4{
          font-size: 4vw;
          padding: 0;
        }
        p {
          padding: 5vw 0 2.5vw;
          small {
            font-size: 3vw;
          }
        }
        > div {
          width: 90vw;
          .img {
            height: 44vw;
            width: 90vw;
          }
          .txt {
            height: auto;
            padding-bottom: 15vw;
          }
        }
      }
    }
`;

export default FourBlogBlocks;