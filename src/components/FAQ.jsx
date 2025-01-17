import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';
import '../styles/faq.css'
const FAQ = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is your return policy?</Accordion.Header>
              <Accordion.Body>
                We offer a 30-day return policy. Items must be returned in their original condition.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How do I track my order?</Accordion.Header>
              <Accordion.Body>
                You can track your order through the tracking link provided in your order confirmation email.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="col-md-6">
          <Accordion>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Do you ship internationally?</Accordion.Header>
              <Accordion.Body>
                Yes, we ship to over 100 countries worldwide.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How can I contact customer service?</Accordion.Header>
              <Accordion.Body>
                You can contact our customer service via email at support@example.com or by phone at 123-456-7890.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
