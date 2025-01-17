import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/testinomial.css'; // We'll define the glassmorphism styles in this file

const TestimonialCarousel = () => {
  return (
    <div className="container my-5">
      <Carousel interval={5000}>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <div className="card text-center glassmorphism" style={{ width: '22rem' }}>
              <img
                className="card-img-top rounded-circle mx-auto my-3"
                src="https://via.placeholder.com/150"
                alt="Reviewer"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <p className="card-text">
                  "This service has been amazing! I couldn’t be more satisfied with the results."
                </p>
                <div className="star-rating">
                  <span className="text-warning">★★★★★</span>
                </div>
                <h5 className="card-title mt-3">John Doe</h5>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <div className="card text-center glassmorphism" style={{ width: '22rem' }}>
              <img
                className="card-img-top rounded-circle mx-auto my-3"
                src="https://via.placeholder.com/150"
                alt="Reviewer"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <p className="card-text">
                  "A truly fantastic experience, would highly recommend to anyone in need of a professional."
                </p>
                <div className="star-rating">
                  <span className="text-warning">★★★★★</span>
                </div>
                <h5 className="card-title mt-3">Jane Smith</h5>
              </div>
            </div>
          </div>
        </Carousel.Item>
        {/* Add more items here as needed */}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
