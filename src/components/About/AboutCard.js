import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">DHANALAKSHMI  G</span>
              from <span className="purple">    Dharmapuri, Tamilnadu.</span>
            <br />
            I am  a software developer.
            <br />
            I have completed BE (Computer Science and Engineering) at SNSCE,
            Coimbatore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learn New Things
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">DHANALAKSHMI G</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
