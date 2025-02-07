import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import '../styles/blog.css';

// Blog Images (If using images from src/assets/images/)
import topic1 from "../assets/topic-1.png";
import topic2 from "../assets/topic-2.png";
import topic3 from "../assets/topic-3.png";
import topic4 from "../assets/topic-4.png";
import topic5 from "../assets/topic-5.png";

// Hot Blogs Data
const hotBlogs = [
  { id: 1, title: "Sport", image: topic1 },
  { id: 2, title: "Travel", image: topic2 },
  { id: 3, title: "Design", image: topic3 },
  { id: 4, title: "Tech", image: topic4 },
  { id: 5, title: "Food", image: topic5 },
];

// All Blogs Data
const allBlogs = [
  {
    id: 1,
    title: "Self-observation is the first step of inner unfolding",
    author: "Joseph",
    date: "26 Nov 2022",
    readTime: "3 min read",
    image: topic1,
    tags: ["#Travel", "#Lifestyle"],
  },
  {
    id: 2,
    title: "Creative Minds and Their Endless Possibilities",
    author: "Sophia",
    date: "15 Aug 2023",
    readTime: "6 min read",
    image: topic2,
    tags: ["#Design", "#Movie"],
  },
  {
    id: 3,
    title: "The Art of Minimalism in Everyday Life",
    author: "Michael",
    date: "20 Sep 2023",
    readTime: "5 min read",
    image: topic3,
    tags: ["#Design", "#Lifestyle"],
  },
  {
    id: 4,
    title: "How Travel Changes Your Perspective",
    author: "Emma",
    date: "10 Jan 2024",
    readTime: "7 min read",
    image: topic4,
    tags: ["#Nature", "#Travel"],
  },
  {
    id: 5,
    title: "The Future of AI and Human Creativity",
    author: "Daniel",
    date: "5 Feb 2024",
    readTime: "8 min read",
    image: topic5,
    tags: ["#Tech", "#AI"],
  },
];

const BlogSection = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(5);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prev) => prev + 5);
  };

  return (
    <div className="blog-section mt-40">
      {/* Hot Blogs Slider */}
      <div className="hot-blogs-container">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 -mt-20"  data-aos="fade-right">
      <div>
        <p
          className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-lg font-semibold 
              tracking-wider text-[#160a33] uppercase rounded-full"
          data-aos="fade-right"
        >
         Blogs
        </p>
      </div>
      <h2
        className="max-w-lg mb-6 font-sans text-3xl font-bold 
            leading-none tracking-tight text-[#bebae0] sm:text-4xl md:mx-auto"
        data-aos="fade-right"
      >
        <span className="relative inline-block ">
          <svg
            viewBox="0 0 52 24"
            fill="#bebae0"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
          <span className="relative text-[#bebae0]">The</span>
        </span>{" "}
        quick, brown fox jumps over a lazy dog
      </h2>
      <p
        className="text-base text-[#bebae0] md:text-lg"
        data-aos="fade-right"
      >
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque rem aperiam, eaque ipsa quae.
      </p>
    </div>
        <Swiper modules={[Navigation]} navigation spaceBetween={15} slidesPerView={3}>
          {hotBlogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="hot-blog-card">
                <img src={blog.image} alt={blog.title} />
                <p>{blog.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Blog Grid */}
      <div className="blog-grid">
        {allBlogs.slice(0, visibleBlogs).map((article) => (
          <div className="blog-card glassmorphism" key={article.id}>
            <img src={article.image} alt={article.title} />
            <div className="content">
              <p className="tags">{article.tags.join(" ")}</p>
              <h3>{article.title}</h3>
              <p className="author">
                {article.author} • {article.date}
              </p>
              <p className="read-time">{article.readTime}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleBlogs < allBlogs.length && (
        <button className="show-more" onClick={loadMoreBlogs}>
          Show More Posts
        </button>
      )}
    </div>
  );
};

export default BlogSection;

