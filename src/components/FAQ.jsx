import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="container py-5"
      style={{
        backgroundColor: "transparent", // Change to "#bebae0" for the other color
        color: "#fff", // Ensure text is readable on dark background
        borderRadius: "10px",
      }}
    >
      <div className="accordion" id="faqAccordion">
        {/* FAQ 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button ${
                activeIndex === 0 ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(0)}
              style={{
                backgroundColor: activeIndex === 0 ? "#bebae0" : "#bebae0",
                color: activeIndex === 0 ? "#000" : "#fff",
              }}
            >
              What are the services of a custom software development company?
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${
              activeIndex === 0 ? "show" : ""
              
            }`}
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Software development companies provide services like custom
              software development, web and mobile app development, testing,
              maintenance, UI/UX design, cloud solutions, e-commerce, IoT,
              blockchain, data analytics, and software integration for
              businesses. Additionally, they offer expert consultancy to guide
              businesses in software strategy and technology decisions.
            </div>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button ${
                activeIndex === 1 ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(1)}
              style={{
                backgroundColor: activeIndex === 1 ? "#bebae0" : "#160a33",
                color: activeIndex === 1 ? "#000" : "#fff",
              }}
            >
              How are Kodexo Labs Developers different?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={`accordion-collapse collapse ${
              activeIndex === 1 ? "show" : ""
            }`}
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Kodexo Labs, a custom software development company in the USA,
              stands out for its knowledge of cutting-edge AI technology and
              its dedication to offering creative AI software development
              services. Our expert team of engineers and data scientists focuses
              on developing customized AI solutions that meet our client’s
              specific demands, assuring optimal performance and financial
              impact.
            </div>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button ${
                activeIndex === 2 ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(2)}
              style={{
                backgroundColor: activeIndex === 2 ? "#bebae0" : "#160a33",
                color: activeIndex === 2 ? "#000" : "#fff",
              }}
            >
              Who needs AI software development services?
            </button>
          </h2>
          <div
            id="collapseThree"
            className={`accordion-collapse collapse ${
              activeIndex === 2 ? "show" : ""
            }`}
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Anyone in need of creating or enhancing software solutions can
              benefit from AI software development services. This includes
              startups, small and medium-sized businesses, enterprises, and
              organizations across various industries.
            </div>
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className={`accordion-button ${
                activeIndex === 3 ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(3)}
              style={{
                backgroundColor: activeIndex === 3 ? "#bebae0" : "#160a33",
                color: activeIndex === 3 ? "#000" : "#fff",
              }}
            >
              Do I need to be tech-savvy to cooperate with you and order a
              software application?
            </button>
          </h2>
          <div
            id="collapseFour"
            className={`accordion-collapse collapse ${
              activeIndex === 3 ? "show" : ""
            }`}
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              No, you don’t need to be tech-savvy to cooperate with a software
              development company and order a software application. The
              development team will work closely with you to understand your
              requirements and guide you through the process. Clear
              communication and collaboration are key, and they will handle the
              technical aspects while keeping you informed at every step.
            </div>
          </div>
        </div>

        {/* FAQ 5 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className={`accordion-button ${
                activeIndex === 4 ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(4)}
              style={{
                backgroundColor: activeIndex === 4 ? "#bebae0" : "#160a33",
                color: activeIndex === 4 ? "#000" : "#fff",
              }}
            >
              What should I look for in a custom software development company?
            </button>
          </h2>
          <div
            id="collapseFive"
            className={`accordion-collapse collapse ${
              activeIndex === 4 ? "show" : ""
            }`}
            aria-labelledby="headingFive"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              When choosing a custom software development company in the USA,
              consider their expertise, portfolio, communication, client
              reviews, flexibility, security, cost-effectiveness, support,
              innovation, and transparency. In addition, evaluate their team’s
              scalability to handle your project size and complexity. Consider
              their cultural fit with your organization to ensure a smooth
              collaboration experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
