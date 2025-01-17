import React, { useState } from 'react';
import blogPic from '../assets/blogpic.png';
import '../styles/blog.css'; // You can keep your custom styling if needed

function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(3); // Initially show 3 posts

  const handleShowMore = () => {
    setVisiblePosts(visiblePosts + 3); // Show 3 more posts when the button is clicked
  };

  return (
    <div className="container ">
      {/* Blog Section */}
      <div className="container text-center">
        <div>
          <p className=" mt-32 inline-block px-3 text-white bg-purple-500 py-1 mb-4 text-lg font-semibold tracking-wider text-dark uppercase rounded-full">
            OUR BLOGS
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-light sm:text-4xl text-center mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="#bebae0"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-[#bebae0] lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-light">The</span>
          </span>{" "}
          quick, brown fox jumps over a lazy dog
        </h2>

        <p className="text-base text-light md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          <br />
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>

      {/* Blog Content Section */}
      <div className="row ml-10">
        {[...Array(7)].map((_, index) => {
          if (index < visiblePosts) {
            return (
              <div className="col-12 mb-4" key={index}>
                <div className="d-flex align-items-center">
                  <div className="me-4">
                    <img src={blogPic} alt="Blog" className="img-fluid " />
                  </div>
                  <div>
                    <h1 className="text-white text-3xl font-bold mb-10">
                      Announcing a free plan
                    </h1>
                    <p className="text-white text-xl">
                      At Wake, our mission has always been focused on bringing
                      openness.
                    </p>
                  </div>
                </div>
              </div>
            );
          }
          return null; // Don't render posts that aren't visible
        })}
      </div>

      {/* Read More Button */}
      {visiblePosts < 7 && (
        <div className="text-center">
          <button
            onClick={handleShowMore}
            className="btn btn-primary"
            style={{background: 'rgba(162, 89, 255, 0.8)'}}
          >
            Read More
          </button>
        </div>
      )}
    </div>
  );
}

export default Blog;
