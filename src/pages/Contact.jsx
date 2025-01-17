import React,{useEffect} from "react";
import { FaPhoneAlt, FaClock, FaEnvelope } from "react-icons/fa";
import "../styles/contact.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
   useEffect(() => {
      AOS.init({
        offset: 120,
        delay: 0,
        duration: 2000,
        easing: 'ease',
      });
    }, [])
  return (
    <section className="contact">
      <div className="mx-auto max-w-screen-2xl px-2 py-16 sm:px-6 lg:px-8 mt-10 ">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 " >
          <div className="relative z-10 lg:py-16 mt-40" data-aos="fade-right">
            <div className="info-container glass-effect">
              <div className="info-item mt-12">
                <span className="info-icon">
                  <FaPhoneAlt />
                </span>
                <span className="info-title">Phone</span>
                <span className="info-text">[Details go here]</span>
              </div>
              <div className="info-item">
                <span className="info-icon">
                  <FaEnvelope />
                </span>
                <span className="info-title">Email</span>
                <span className="info-text">[Details go here]</span>
              </div>
              <div className="info-item">
                <span className="info-icon">
                  <FaClock />
                </span>
                <span className="info-title">Hours</span>
                <span className="info-text">[Details go here]</span>
              </div>
            </div>
          </div>

          <div
            className="relative flex items-center "
            style={{ background: "#0a0417"  }}
          >
            <span
              className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16"
              style={{ background: "#0a0417"  }}
            ></span>

            <div className="p-8 d-flex justify-content-center align-items-center mt-7 ml-12 ">
              {/* Form Section */}
              <div className="col-md-8 p-4 text-white form-section border border-solid w-100 rounded">
                <div className="text-center mb-4">
                  <p className="inline-block px-3 text-white bg-purple-500 py-1 text-sm font-semibold tracking-wider text-dark uppercase rounded-full">
                    Contact Us
                  </p>
                </div>
                <form>
                  <div className="row text-white font-bold">
                    <div className="col-md-6 mb-4">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="form-control"
                        placeholder="First Name"
                        style={{ backgroundColor: "#f0f0f0", height: "30px" }}
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="form-control"
                        placeholder="Last Name"
                        style={{ backgroundColor: "#f0f0f0", height: "30px" }}
                      />
                    </div>
                  </div>
                  <div className="row  text-white font-bold">
                    <div className="col-md-12 mb-4">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email Address"
                        style={{ backgroundColor: "#f0f0f0", height: "50px" }}
                      />
                    </div>
                  </div>
                  <div className="mb-4  text-white font-bold">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Write your message here..."
                      style={{ background: "transform" }}
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn "
                      style={{
                        backgroundColor: "rgba(162, 89, 255, 0.8)",
                        color: "white",
                        width: "100%",
                        textAlign: "center",
                        fontWeight: "600",
                        fontSize: "1rem",
                      }}
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
