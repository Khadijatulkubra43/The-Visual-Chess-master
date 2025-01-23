import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contact.css";

function ContactPage() {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [duration, setDuration] = useState(30); // Default duration 30 minutes

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleOk = () => {
    alert(`Meeting scheduled for: ${date} with duration: ${duration} minutes`);
    handleClose();
  };

  return (
    <div className="contact-page mt-32 d-flex justify-content-center align-items-center">
      <div className="contact-section text-center">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p
                className="inline-block px-3 bg-[#bebae0] py-px mb-4 text-lg font-semibold 
              tracking-wider text-[#160a33] uppercase rounded-full"

              >
                Contact us
              </p>
            </div>
            <h2
              className="max-w-lg mb-6 font-sans text-3xl font-bold 
            leading-none tracking-tight text-[#bebae0] sm:text-4xl md:mx-auto"
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
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
        <div className="container my-5">
        <div className="row">
        <div className="col-md-6 text-white shadow-sm custom-shadow">
            <h2 className="text-5xl font-bold text-left">Let's Talk!</h2>
            <ul className="list-unstyled text-left">
              <li><i className="bi bi-check-circle-fill text-success"></i> * AI Based Solutions</li>
              <li><i className="bi bi-check-circle-fill text-success"></i> * Dedicated Development Teams</li>
              <li><i className="bi bi-check-circle-fill text-success"></i> * Automated Workflows</li>
              <li><i className="bi bi-check-circle-fill text-success"></i> * Transparent Processing</li>
              <li><i className="bi bi-check-circle-fill text-success"></i> * Process-Oriented Approach</li>
              <li><i className="bi bi-check-circle-fill text-success"></i> * Scalable Product Development</li>
            </ul>
            <h4 className="text-4xl font-bold text-left mt-3">What Happens Next?</h4>
            <ol className="text-left">
              <li>1.We schedule a meeting</li>
              <li>2.We discover your needs</li>
              <li>3.We offer consultancy</li>
              <li>4.We prepare a proposal</li>
            </ol>
          </div>
          <div className="col-md-6">
            <form>
              <div className="row mb-3">
                <div className="col">
                  <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Company" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control" placeholder="Phone" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Tell us about your project"></textarea>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn" style={{background:'rgba(162, 89, 255, 0.8)',color:'white'}}>Send a Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      <div className="card custom-card">
      <p className="text-left custom-card-text">
        Schedule a meeting to discuss your project and see how we can help you
        achieve your goals.
      </p>
      <Button className="schedule-meeting-btn" onClick={handleShow}>
        Schedule a Meeting
      </Button>
    </div>
    
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Schedule a Meeting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="meeting-time-selection">
            <Flatpickr
              className="flatpickr-wrapper"
              data-enable-time
              value={date}
              onChange={(selectedDates) => setDate(selectedDates)}
            />
          </div>

          <div className="duration-selection">
            <Form.Group>
              <Form.Label>Meeting Duration (minutes)</Form.Label>
              <Form.Control
                as="select"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value={15}>15 minutes</option>
                <option value={30}>30 minutes</option>
                <option value={45}>45 minutes</option>
                <option value={60}>60 minutes</option>
              </Form.Control>
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleOk}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default ContactPage;
