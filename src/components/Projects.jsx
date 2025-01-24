import React, { useState } from "react";
import '../styles/project.css'
const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] ml-10 mr-10 overflow-hidden">
        <div className="container mx-auto">
          <div className="mx-auto max-w-xl text-center">
            <h2
              className="mt-1 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl rounded-lg p-4"
              style={{
                color: "#BEBAE0",
                background: "#160A33",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              Explore Our Projects
            </h2>
          </div>

          <div className="w-full flex flex-wrap justify-evenly -mx-4 mt-12">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                {["all", "branding", "design", "marketing", "development"].map(
                  (category) => (
                    <li key={category} className="mb-1">
                      <button
                        onClick={() => handleProject(category)}
                        className={`button-hover inline-block rounded-lg py-2 px-5 text-center text-[#bebae0] font-semibold transition md:py-3 lg:px-8 ${
                          showCard === category
                            ? "activeClasses bg-[#160a33] text-white"
                            : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-[#160a33] hover:text-white"
                        }`}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)} Projects
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {[
              { ImageHref: "https://i.ibb.co/64WfFPt/image-01.jpg", category: "branding", title: "Creative Agency" },
              { ImageHref: "https://i.ibb.co/PT7ghRs/image-06.jpg", category: "marketing", title: "Creative Agency" },
              { ImageHref: "https://i.ibb.co/vkt8C1P/image-02.jpg", category: "marketing", title: "Creative Agency" },
              { ImageHref: "https://i.ibb.co/3FKqS1G/image-03.jpg", category: "development", title: "Creative Agency" },
              { ImageHref: "https://i.ibb.co/m6dq2fX/image-04.jpg", category: "design", title: "Creative Agency" },
              { ImageHref: "https://i.ibb.co/mCPjBsH/image-05.jpg", category: "marketing", title: "Creative Agency" },
            ].map((card) => (
              <PortfolioCard key={card.ImageHref} showCard={showCard} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const PortfolioCard = ({ showCard, category, ImageHref, title, buttonHref }) => {
  return (
    <div
      className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
        showCard === "all" || showCard === category.toLowerCase()
          ? "block card-fade-in"
          : "hidden"
      }`}
    >
      <div className="relative mb-12 card-hover">
        <div className="overflow-hidden rounded-[10px]">
          <img src={ImageHref} alt="portfolio" className="w-full" />
        </div>
        <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-[#bebae0] py-[34px] px-3 text-center shadow-portfolio">
          <span className="text-[#160a33] mb-2 block text-sm font-medium">
            {category}
          </span>
          <h3 className="text-[#160a33] mb-5 text-xl font-bold">{title}</h3>
          <a
            href={buttonHref}
            className="text-white bg-[#160a33] inline-block rounded-md py-[10px] px-7 text-sm font-medium transition hover:text-white"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
