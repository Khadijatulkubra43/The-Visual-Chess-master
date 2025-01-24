import React from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import '../styles/team.css'; // Assuming you have a separate CSS file for custom styles
import avt from '../assets/avatar.png'

const TeamSection = () => {
  return (
    <div className="container py-5">
      <Carousel controls={false} indicators={false} interval={3000}>
        {/* Render multiple Carousel items for the team members */}
        {[...Array(Math.ceil(teamMembers.length / 3))].map((_, index) => (
          <Carousel.Item key={index}>
            <Row className="d-flex justify-content-center">
              {teamMembers.slice(index * 3, index * 3 + 3).map((member, i) => (
                <Col key={i} md={4} className="mb-4">
                  <Card className="team-card">
                    <Card.Img
                      variant="top"
                      src={avt}
                      className="team-image"
                    />
                    <Card.Body className="team-card-body">
                      <div className="team-info">
                        <h5>{member.name}</h5>
                        <p>{member.designation}</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

const teamMembers = [
  { name: 'John Doe', designation: 'CEO', image: '../assets/avatar.png' },
  { name: 'Jane Smith', designation: 'Lead Developer', image: '../assets/avatar.png' },
  { name: 'Mark Lee', designation: 'Designer', image: '../assets/avatar.png' },
  { name: 'Sarah Johnson', designation: 'Project Manager', image: '../assets/avatar.png' },
  { name: 'James Brown', designation: 'Developer', image: '../assets/avatar.png' },
  { name: 'Emily Davis', designation: 'UI/UX Designer', image: '../assets/avatar.png' },
  { name: 'Michael Wilson', designation: 'Lead Engineer', image: '../assets/avatar.png' },
  { name: 'Sophia Miller', designation: 'QA Engineer', image: '../assets/avatar.png' },
  { name: 'David Moore', designation: 'Support Specialist', image: '../assets/avatar.png' },
];

export default TeamSection;
