import React from 'react';
import { useParams } from 'react-router-dom';
import './blog.css';

interface Blog {
  id: number;
  title: string;
  content1: string;
  content2: string;
  image1: string;
  image2: string;
  image3: string;
  author: string;
  publishing_date: string;
  about: string;
  keywords: string;
  comments: string;
}

interface BlogPageProps {
  blogs: Blog[];
}

function extractNumberFromBlogId(blogId: string): number | null {
  const match = blogId.match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
}

const BlogPage: React.FC<BlogPageProps> = ({ blogs }) => {
  const { blogId } = useParams<{ blogId: string }>();
  const numericBlogId = extractNumberFromBlogId(blogId);
  const blog = blogs.find(blog => blog.id === numericBlogId);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const comments = blog.comments.split('|').map(comment => {
    const [name, date, text] = comment.split(',');
    return { name, date, text };
  });

  return (
    <>
    <h1 className="singlebloghead">{blog.title}</h1>
    <hr className="blogline"/>
    <div className="blog-container">
      <div className="sidebar">
        <div className="author-section">
          <div className="author-details">
            <h2>{blog.author}</h2>
            <p>{blog.about}</p>
            <p>Published on: {blog.publishing_date}</p>
          </div>
        </div>
        <div className="tags-container">
          <h3>Tags</h3>
          <div className="tags">
            {blog.keywords.split(',').map((tag, index) => (
              <span key={index} className="tag">{tag.trim()}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="blog-content">
        <img src={blog.image3} alt="Blog cover image" className="blog-cover-img" />
        
        <p>{blog.content1}</p>
        <div className="images">
          <img src={blog.image1} alt={blog.title} className="blog-image" />
          <img src={blog.image2} alt={blog.title} className="blog-image" />
        </div>
        <p>{blog.content2}</p>
        <div className="commentsection-container">
          <div className="be-comment-block">
            <h1 className="comments-title">Comments ({comments.length})</h1>
            {comments.map((comment, index) => (
              <div key={index} className="be-comment">
                <div className="be-comment-content">
                  <span className="be-comment-name">
                    <p>{comment.name}</p>
                  </span>
                  <span className="be-comment-time">
                    <i className="fa fa-clock-o"></i>
                    {comment.date}
                  </span>
                  <p className="be-comment-text">{comment.text}</p>
                </div>
              </div>
            ))}
            <form className="form-block">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group fl_icon">
                    <input className="form-input" type="text" placeholder="Your name" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group fl_icon">
                    <input className="form-input" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="form-group">
                    <textarea className="form-input" placeholder="Your comment"></textarea>
                  </div>
                </div>
                <div className="col-xs-12">
                  <button type="submit" className="commentbtn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default BlogPage;
