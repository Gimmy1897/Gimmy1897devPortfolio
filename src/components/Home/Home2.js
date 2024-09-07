import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/dev_logo.svg";
import Tilt from "react-parallax-tilt";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineUser
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <span className="purple">chemistry student</span> that fell in love with <span className="purple">programming</span> and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              My fields of interest besides chemistry are building  &nbsp;
              <i>
                <b className="purple">Progressive Web App and Android App with Flutter. </b> 
              </i>
              <br />
            </p>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() =>{} }
              >
                <AiOutlineUser style={{ marginBottom: "2px", color: "#ffffff" }} /> About
              </Nav.Link>
            </Nav.Item>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/gimmy1897"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gianmarco-papi-b898431/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
