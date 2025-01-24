import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/testinomial.css";

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    "To the client’s delight, the app was completed on time, within budget, and according to specifications. Despite working in different time zones, the Geeks of Kolachi team was very proactive in terms of communicating updates and feedback. They were punctual, professional, and skilled throughout.",
    "The Geeks of Kolachi team went above and beyond to deliver a product that exceeded expectations. Their communication was excellent, and they truly understood our needs.",
    "Outstanding work! The team demonstrated exceptional technical expertise and a proactive approach, making the project a success.",
    "A reliable partner who delivered exactly what they promised, within budget and on time.",
    "Their creativity, dedication, and problem-solving skills made all the difference. Highly recommended!",
    "Fantastic experience working with the team. They were communicative, responsive, and delivered high-quality results."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-switch testimonials every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="testimonial-section text-center">
      <div
        className="review-box shadow p-3 mt-3 mx-auto text-left"
        style={{ maxWidth: "400px", fontSize: "14px" }}
      >
        <blockquote className="blockquote text-secondary mb-2">
          <p>{testimonials[currentTestimonial]}</p>
          <br />
          <footer className="blockquote-footer">Anonymous</footer>
        </blockquote>
        <div className="text-right mt-2">
          <button
            className="btn btn-sm btn-outline-secondary mr-2"
            onClick={() =>
              setCurrentTestimonial((prev) =>
                (prev - 1 + testimonials.length) % testimonials.length
              )
            }
          >
            ←
          </button>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
          >
            →
          </button>
        </div>
      </div>

      <div className="circle-wrapper position-relative mx-auto mt-5">
        {/* Main Circle (Stationary) */}
        <div className="center-circle">
          <img
            src="../assets/avatar.png"
            alt="Main Profile"
            className="rounded-circle"
            style={{ width: "100px", height: "100px" }}
          />
        </div>

        {/* Orbiting Circles */}
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`orbiting-circle orbit-${index + 1}`}
          >
            <img
              src={`../assets/avatar.png?text=${index + 1}`}
              alt={`Profile ${index + 1}`}
              className="rounded-circle"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
