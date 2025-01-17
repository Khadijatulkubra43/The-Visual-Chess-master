import React from "react";
import Slider from "react-slick";
import "../styles/team.css"; // Import the updated styles

const CardSlider = () => {
  const settings = {
    dots: true,          // Enable navigation dots
    infinite: true,      // Loop through the cards
    speed: 500,          // Transition speed
    slidesToShow: 3,     // Number of cards per slide
    slidesToScroll: 1,   // Number of cards to scroll at once
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,  // 2 cards per slide on smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,  // 1 card per slide on very small screens
        },
      },
    ],
  };

  return (
    <div className="card-slider-container">
      <Slider {...settings}>
        <div className="card">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="../assets/avatar.png" alt="Card 1" />
              </div>
              <div className="flip-card-back">
                <h3>Intro</h3>
                <p>Lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="../assets/avatar.png" alt="Card 2" />
              </div>
              <div className="flip-card-back">
              <h3>Intro</h3>
              <p>Lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="../assets/avatar.png" alt="Card 3" />
              </div>
              <div className="flip-card-back">
              <h3>Intro</h3>
              <p>Lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="../assets/avatar.png" alt="Card 4" />
              </div>
              <div className="flip-card-back">
              <h3>Intro</h3>
              <p>Lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="../assets/avatar.png" alt="Card 5" />
              </div>
              <div className="flip-card-back">
              <h3>Intro</h3>
              <p>Lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CardSlider;
