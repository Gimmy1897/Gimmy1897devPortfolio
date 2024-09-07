import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import gattonero from "../../Assets/Projects/GattoneroIco2022.png";
import unipihub from "../../Assets/Projects/unipihub.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unipihub}
              isBlog={false}
              title="UniPi Hub"
              description="Unipi Hub, an app that brings together the most important features for UniPi students in one place."
              
              demoLink="https://www.gimmy1897.dev/unipihub/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gattonero}
              isBlog={false}
              title="Sagra del Gattonero"
              description="Official App to order at Sagra del Gattonero"
              demoLink="https://www.sassieglio.it/gattonero"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
