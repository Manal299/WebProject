import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header/header';
import Footer from '../component/Footer/footer';
import Bloghead from '../component/BlogHeader/bloghead';
import './blogpage.css';

interface Blog {
  id: number;
  title: string;
  content: string;
  image3: string;
}

interface BlogsMainProps {
  blogs: Blog[];
}

const BlogsMain: React.FC<BlogsMainProps> = ({ blogs }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <Bloghead />
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </div>
      <div className="blogs-container">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(blog => (
            <div key={blog.id} className="blog-card">
              <img src={blog.image3} alt={blog.title} />
              <Link to={`/blog/blog${blog.id}`}>{blog.title}</Link>
            </div>
          ))
        ) : (
          <div>
          <p className="noblogsavailable">No blogs found matching your search criteria.</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BlogsMain;
