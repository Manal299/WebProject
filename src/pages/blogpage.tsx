import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header/header';
import Footer from '../component/Footer/footer';
import './blogpage.css';

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
}

interface BlogsMainProps {
  blogs: Blog[];
}

const BlogsMain: React.FC<BlogsMainProps> = ({ blogs }) => {
  return (
    <>
      <Header />
      <div>
        <h1>Blogs</h1>
        <div className="blogs-container">
          {blogs.map(blog => (
            <div key={blog.id} className="blog-card">
              <img src={blog.image} alt={blog.title} />
              <Link to={`/blog/blog${blog.id}`}>{blog.title}</Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogsMain;
