import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gianmarco Papi </span>
            from <span className="purple"> Pisa, Italy.</span>
            <br />
            I am currently a master's student of organic chemistry at the University of Pisa.
            <br />

            <br />
            Beyond chemistry I enjoy programming and technology in general, playing the piano, taking photos and hiking
          </p>
          <br />
          <p style={{ color: "rgb(73, 170, 255)"}}>
            "[...] perchè ricordatevi: la chimica è spettacolo!"{" "}
          </p>
          <br />
          <footer className="blockquote-footer">Federico Benuzzi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
