import React from "react";
import Slider from "react-slick";
import "../styles/ser.css"; // Add custom styles here

const services = [
  {
    title: "Product Designing",
    description:
      "At Kodexo Labs, we make web and mobile apps that are simple and easy to use. As an AI software development company, we focus on creating designs that are visually appealing and help users navigate smoothly. Whether you need a website or app, our clear, user-friendly designs help grow your business and satisfy customers.",
  },
  {
    title: "Generative AI Development",
    description:
      "Kodexo Labs is an AI application development company that builds smart tools to help businesses grow. Our AI solutions can write, design, and create music by analyzing data and patterns. We develop systems that deliver creative, customized solutions to meet your needs.",
  },
  {
    title: "Custom Product Development",
    description:
      "Kodexo Labs is a leading AI software development company that creates custom software for businesses. From mobile apps to large systems, we create software that’s reliable and scalable. We ensure your software is secure, efficient, and meets your expectations.",
  },
  {
    title: "AI Development",
    description:
      "Kodexo Labs offers AI Development Services to help businesses grow and innovate with artificial intelligence. We create tools that analyze data, automate tasks, and provide insights for better decisions. Whether you need data analysis, chatbots, or custom AI apps, our services improve productivity.",
  },
  {
    title: "Business Intelligence",
    description:
      "Our Business Intelligence solutions help companies make data-driven decisions. We transform complex data into actionable insights for growth and efficiency.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Kodexo Labs provides robust cloud solutions to scale your business seamlessly. Our services include cloud migration, optimization, and secure storage.",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards per row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: "90%", margin: "auto", padding: "40px 0" }}>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
