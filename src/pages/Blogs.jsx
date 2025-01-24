import React, { useState, useEffect } from 'react';
import '../styles/blog.css';
import blog from '../assets/2.png'
const blogs = [
  {
    id: 1,
    title: 'First Blog Title',
    detail: 'This is the detail of the first blog.',
    image: {blog},
  },
  {
    id: 2,
    title: 'Second Blog Title',
    detail: 'This is the detail of the second blog.',
    image: '../assets/2.png',
  },
  {
    id: 3,
    title: 'Third Blog Title',
    detail: 'This is the detail of the third blog.',
    image: '../assets/3.png',
  },
  {
    id: 4,
    title: 'Fourth Blog Title',
    detail: 'This is the detail of the fourth blog.',
    image: {blog},
  },
  {
    id: 5,
    title: 'Fifth Blog Title',
    detail: 'This is the detail of the fifth blog.',
    image: '../assets/2.png',
  },
  {
    id: 6,
    title: 'Sixth Blog Title',
    detail: 'This is the detail of the sixth blog.',
    image: '../assets/3.png',
  },
];

const BlogPage = () => {
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const blogInterval = setInterval(() => {
      setCurrentBlogIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    }, 5000);

    const titleInterval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    }, 3000);

    return () => {
      clearInterval(blogInterval);
      clearInterval(titleInterval);
    };
  }, []);

  const currentBlog = blogs[currentBlogIndex];
  const currentTitle = blogs[titleIndex].title;

  return (
    <div>
      <div className="container text-center mt-40">
        <div>
          <p className="inline-block px-3 text-white bg-purple-500 py-1 mb-4 text-lg font-semibold tracking-wider text-dark uppercase rounded-full">
            Blogs
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-light sm:text-4xl text-center mx-auto">
          <span className="relative inline-block">
            <span className="relative text-light">The</span>
          </span> quick, brown fox jumps over a lazy dog
        </h2>
        <p className="text-base text-light md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          <br />
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>

      <div className="blog-page">
        {/* Latest Blog Title Slider */}
        <div className="title-slider">
          <h2 className="text-white text-xl">Latest Blog</h2>
          <p className="text-white">{currentTitle}</p>
        </div>

        {/* Main Featured Blog Detail */}
        <div className="main-featured-blog ">
          <img src={currentBlog.image} alt={currentBlog.title} />
          <div className="blog-content">
            <h1>{currentBlog.title}</h1>
            <p>{currentBlog.detail}</p>
          </div>
        </div>

        {/* All Blogs Section */}
        <div className="all-blogs">
          <h2 className="text-left text-3xl text-white font-bold">What Else is Happening?</h2>
          <p className="text-left mt-2">
            Read our blogs to know what’s happening
          </p>
          <div className="blog-grid mt-8 ">
            {blogs.map((blog, index) => (
              <div className="blog-card unique-style glassmorphism1 latest-card" key={blog.id}>
                <img src={blog.image} alt={blog.title} />
                <div className="blog-details">
                  <h3>{blog.title}</h3>
                  <p>{blog.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="read-more-button">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
