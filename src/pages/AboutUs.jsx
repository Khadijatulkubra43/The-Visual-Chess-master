import React, { useEffect,useState } from "react";
// import "../styles/AboutUSPage.css";
// import Helmet from "../components/Helmet.jsx";
import { FaBriefcase } from "react-icons/fa";
import Logo from "../assets/Visual.png";
import year from '../assets/image-2.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/about.css'

export default function AboutUs() {
   // Review section state and logic
    const [downloads, setDownloads] = useState(0);
    const [subscribers, setSubscribers] = useState(0);
    const [users, setUsers] = useState(0);
    const [cookies, setCookies] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setDownloads((prev) => (prev < 120 ? prev + 1 : 120));
        setSubscribers((prev) => (prev < 340 ? prev + 1 : 340));
        setUsers((prev) => (prev < 25 ? prev + 1 : 25));
        setCookies((prev) => (prev < 222 ? prev + 1 : 222));
      }, 20);
  
      return () => clearInterval(interval);
    }, []);
    const years = [2017, 2018, 2019, 2022, 2023, 2024];
  const contentData = {
    2017: {
      title: "2017: Inception",
      text: "Driven by the desire to foster a nurturing space for tech-enthusiasts, GOK came into existence. Our journey began humbly in a friend's borrowed space, but our ambitions knew no bounds.",
      image:"../assets/image-2.jpg", // Add your image URL here
    },
    2018: {
      title: "2018: Growth",
      text: "The year of expansion, as we started gaining traction and built lasting relationships with clients. Our team grew from 4 to 10 passionate members.",
      image: {year},
    },
    2019: {
      title: "2019: Recognition",
      text: "Marked by notable achievements and industry recognition, we set benchmarks with successful projects delivered globally.",
      image: {year},
    },
    2022: {
      title: "2022: Transformation",
      text: "Embracing innovation, we transformed our services and expanded our expertise into emerging technologies.",
      image: {year},
    },
    2023: {
      title: "2023: Excellence",
      text: "With 180+ employees, we delivered excellence to our esteemed clients, fostering growth and trust.",
      image: {year},
    },
    2024: {
      title: "2024: The Future",
      text: "Our vision for the future is brighter than ever, driven by innovation and a commitment to redefining boundaries in technology.",
      image: {year},
    },
  };

  const [currentYear, setCurrentYear] = useState(2017);
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 2000,
      easing: "ease",
    });
  }, []);
  return (
    <>
      {/*About Section*/}
      <section className="container about" id="about">
        <section className="overflow-hidden pt-2 pb-12 lg:pt-[10px] lg:pb-[90px] ml-10 mr-10">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between -mx-4">
              <div className="w-full px-4 lg:w-6/12">
                <div className="flex items-center -mx-3 sm:-mx-4">
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="py-3 sm:py-4 mt-12">
                      <img
                        src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg"
                        alt=""
                        className="w-full rounded-2xl"
                      />
                    </div>
                    <div className="py-3 sm:py-4">
                      <img
                        src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-2.jpg"
                        alt=""
                        className="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="relative z-10 my-4">
                      <img
                        src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg"
                        alt=""
                        className="w-full rounded-2xl"
                      />
                      <span className="absolute -right-7 -bottom-7 z-[-1]">
                        <svg
                          width="134"
                          height="106"
                          viewBox="0 0 134 106"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="1.66667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 1.66667 104)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="16.3333"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 16.3333 104)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="31"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 31 104)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="45.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 45.6667 104)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="60.3334"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 60.3334 104)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="88.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 88.6667 104)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="117.667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 117.667 104)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="74.6667"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 74.6667 104)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="103"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 103 104)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="132"
                            cy="104"
                            r="1.66667"
                            transform="rotate(-90 132 104)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="1.66667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 89.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="16.3333"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 89.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="31"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 31 89.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="45.6667"
                            cy="89.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 89.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="60.3333"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 89.3338)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="88.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 89.3338)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="117.667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 89.3338)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="74.6667"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 89.3338)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="103"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 103 89.3338)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="132"
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 132 89.3338)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="1.66667"
                            cy="74.6673"
                            r="1.66667"
                            transform="rotate(-90 1.66667 74.6673)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="1.66667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 31.0003)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="16.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 16.3333 74.6668)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="16.3333"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 31.0003)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="31"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 31 74.6668)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="31"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 31 31.0003)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="45.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 45.6667 74.6668)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="45.6667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 31.0003)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="60.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 60.3333 74.6668)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="60.3333"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 60.3333 30.9998)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="88.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 88.6667 74.6668)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="88.6667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 88.6667 30.9998)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="117.667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 117.667 74.6668)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="117.667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 117.667 30.9998)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="74.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 74.6667 74.6668)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="74.6667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 74.6667 30.9998)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="103"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 103 74.6668)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="103"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 103 30.9998)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="132"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 132 74.6668)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="132"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 132 30.9998)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="1.66667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 60.0003)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="1.66667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 16.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="16.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 60.0003)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="16.3333"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 16.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="31"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 31 60.0003)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="31"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 31 16.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="45.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 60.0003)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="45.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 16.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="60.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 60.3333 60.0003)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="60.3333"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 60.3333 16.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="88.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 88.6667 60.0003)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="88.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 88.6667 16.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="117.667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 117.667 60.0003)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="117.667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 117.667 16.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="74.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 74.6667 60.0003)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="74.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 74.6667 16.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="103"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 103 60.0003)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="103"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 103 16.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="132"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 132 60.0003)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="132"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 132 16.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="1.66667"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 45.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="1.66667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 1.66667 1.66683)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="16.3333"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 45.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="16.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 16.3333 1.66683)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="31"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 31 45.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="31"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 31 1.66683)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="45.6667"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 45.3333)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="45.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 45.6667 1.66683)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="60.3333"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 45.3338)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="60.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 60.3333 1.66683)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="88.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 45.3338)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="88.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 88.6667 1.66683)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="117.667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 45.3338)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="117.667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 117.667 1.66683)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="74.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 45.3338)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="74.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 74.6667 1.66683)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="103"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 103 45.3338)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="103"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 103 1.66683)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="132"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 132 45.3338)"
                            fill="#BEBAE0"
                          />
                          <circle
                            cx="132"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 132 1.66683)"
                            fill="#BEBAE0"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div className="mt-10 lg:mt-0">
                  <h2
                    className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl 
                  lg:text-5xl rounded-lg p-4"
                    data-aos="fade-right"
                    style={{
                      color: "#BEBAE0",
                      background: "#160A33",
                      // boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      width: "75%",
                    }}
                  >
                    About Us
                  </h2>
                  <p
                    className="mt-4 text-3xl font-bold mb-10 text-white leading-relaxed
                 text-gray-600"
                    data-aos="fade-right"
                  >
                    Any question ? Look{" "}
                    <span style={{ color: "#BEBAE0", fontSize: "1.1em" }}>
                      Here{" "}
                    </span>{" "}
                    &#x25AA;
                  </p>
                  <p
                    className="mb-5 text-base text-body-color text-white"
                    data-aos="fade-right"
                  >
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less.
                  </p>
                  <p
                    className="mb-8 text-base text-body-color text-white"
                    data-aos="fade-right"
                  >
                    A domain name is one of the first steps to establishing your
                    brand. Secure a consistent brand image with a domain name
                    that matches your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Review Section */}
        <div className="container mt-10">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="about-item text-center glassmorphism11 latest-card">
                <h2 className="large-text">{downloads}+</h2>
                <p className="small-text">Downloads</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="about-item text-center glassmorphism11 latest-card">
                <h2 className="large-text">{subscribers}+</h2>
                <p className="small-text">Subscribers</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="about-item text-center glassmorphism11 latest-card">
                <h2 className="large-text">{users}+</h2>
                <p className="small-text">Users</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="about-item text-center glassmorphism11 latest-card">
                <h2 className="large-text">{cookies}+</h2>
                <p className="small-text">Cookies</p>
              </div>
            </div>
          </div>
        </div>
        {/* Other content*/}
        <div className="container my-24">
        <div className="row ">
          <div className="col-md-6">
            <h2 className="text-white text-5xl font-bold">Our Objectives</h2>
            <p className="object">
              We want to be part of creating a smarter world where technology brings people closer together.
              We also want our company to be a place where everyone can reach their full potential and enjoy working with a team that truly cares. 
            </p>
            <div className="card mb-3 p-3 shadow-sm glassmorphism1 latest-card">
              <h4 className="text-start font-bold text-2xl">A special place to be</h4>
              <p>
                This emphasizes a unique and inspiring culture where teamwork and mutual support are central to achieving collective success.
              </p>
            </div>
            <div className="card mb-3 p-3 shadow-sm glassmorphism1">
              <h4 className="text-start font-bold text-2xl">Integrity in Action</h4>
              <p>
                We uphold the highest standards of honesty and ethical behavior, building trust with our clients, partners, and colleagues.
              </p>
            </div>
            <div className="card mb-3 p-3 shadow-sm glassmorphism1">
              <h4 className="text-start font-bold text-2xl">Continuous Evolution</h4>
              <p>
                We love learning new things and getting better at what we do. We keep up with the latest technologies and methodologies to deliver cutting-edge solutions that exceed client expectations.
              </p>
            </div>
          </div>
          <br/>
          <div className="col-md-6 mt-28">
            <h2 className="text-white text-5xl font-bold">Our Core Values</h2>
            <p className="text-white">
              A positive culture leads to outstanding accomplishments when employees work together with honesty, discipline, integrity, and loyalty towards common goals. 
              This collaborative effort builds a foundation of trust and mutual respect among team members where everyone feels empowered and respected.
            </p>
            <div className="card mb-3 p-3 shadow-sm glassmorphism1">
            <h4 className="text-start font-bold text-2xl">Resilient Determination</h4>
              <p>
                We see challenges as opportunities. We never back down, always pushing forward to overcome obstacles, achieve our goals, and go beyond expectations. Our strength lies in turning setbacks into comebacks.
              </p>
            </div>
            <div className="card mb-3 p-3 shadow-sm glassmorphism1">
              <h4 className="text-start font-bold text-2xl">Quality Obsession</h4>
              <p>
                We are relentless in our pursuit of excellence, maintaining the highest standards in every line of code, every client interaction, and every business decision.
              </p>
            </div>
          </div>
        </div>
      </div>
        {/* Other content card*/}
        <div className="timeline-container">
        <div className="content">
          <div className="glass-card">
            <h1 className="font-bold text-7xl">Our Journey Began With a Spark</h1>
            <h6>A Vision That Ignited the Flames of Progress!</h6>
            <h3 className="font-bold mt-10">{contentData[currentYear].title}</h3>
            <p>{contentData[currentYear].text}</p>
          </div>
          <div className="timeline">
            <div className="line"></div>
            {years.map((year) => (
              <div
                key={year}
                className={`timeline-item ${year === currentYear ? "active" : ""}`}
                onClick={() => setCurrentYear(year)}
              >
                {year === currentYear && <div className="circle"></div>}
                <span>{year}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="image-container">
          <img
            src={contentData[currentYear].image}
            alt={contentData[currentYear].title}
          />
        </div>
      </div>
        {/* newsletter*/}
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 -mt-20">
          <div>
            <p
              className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-lg font-semibold 
                  tracking-wider text-[#160a33] uppercase rounded-full"
              data-aos="fade-right"
            >
              Newsletter
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
        {/* Form Section */}
           <div className="px-4 lg:flex lg:flex-row lg:items-center mt-4">
                    <div
                      className="relative isolate overflow-hidden shadow-2xl sm:rounded-3xl sm:px-8 lg:flex lg:gap-x-10 lg:px-16 border border-gray-600 w-4/5 h-3/6 align-center ml-28"
                      style={{ background: "#0a0417" }}
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                        aria-hidden="true"
                      >
                        <circle
                          cx={512}
                          cy={512}
                          r={512}
                          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                          fillOpacity="0.7"
                        />
                        <defs>
                          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                            <stop stopColor="#7775D6" />
                            <stop offset={1} stopColor="#E935C1" />
                          </radialGradient>
                        </defs>
                      </svg>
                      <div
                        className="mx-auto max-w-md text-left lg:mx-0 lg:flex-auto lg:py-16 lg:text-left"
                        data-aos="fade-right"
                      >
                        <h2 className="text-3xl font-bold tracking-tight text-[#bebae0] sm:text-4xl">
                          Boost your productivity.
                          <br />
                          Start using our app today.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-white">
                          Ac euismod vel sit maecenas id pellentesque eu sed
                          consectetur. Malesuada adipiscing sagittis vel nulla.
                        </p>
        
                        <form className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
                          <input
                            className="flex-grow h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500"
                            type="email"
                            placeholder="Enter your email address"
                          />
                          <button
                            type="submit"
                            className="mt-1 sm:mt-0 h-12 px-6 rounded-md font-semibold
                           transition duration-300 ease-in-out"
                            data-aos="slide-right"
                            style={{
                              background: "rgba(162, 89, 255, 1)",
                            }}
                          >
                            Subscribe
                          </button>
                        </form>
                      </div>
                      <div className="max-w-md flex justify-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left ">
                        <img
                          className="relative w-[22rem] "
                          src={Logo}
                          data-aos="slide-up"
                        />
                      </div>
                    </div>
                  </div>
      </section>
    </>
  );
}
