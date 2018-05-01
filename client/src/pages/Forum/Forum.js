import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const Forum = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>Yap Forum</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              Start Yapping 🐶
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default Forum;
