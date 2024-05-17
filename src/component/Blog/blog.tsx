import React from 'react';
import { useParams } from 'react-router-dom';

interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
}

interface BlogPageProps {
  blogs: Blog[];
}

function extractNumberFromBlogId(blogId: string): number | null {
  const match = blogId.match(/\d+/);
  if (match) {
      return parseInt(match[0], 10);
  } else {
      return null;
  }
}

const BlogPage: React.FC<BlogPageProps> = ({ blogs }) => {
  let { blogId } = useParams<{ blogId: string }>();
  blogId = extractNumberFromBlogId(blogId)
  console.log(blogId, blogs)
  const blog = blogs.find(blog => blog.id === blogId);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogPage;
