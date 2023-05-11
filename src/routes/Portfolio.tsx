import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { dojoImg } from "./../../assets/dojoImg1.png";

function Portfolio() {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>Taizyu - timecubes</Card.Title>
                <Card.Text>
                  // important points // short desc what it does for what // why
                  it does it and how // code //// readability ////
                  maintanability Provides 9 sides of getting thing X done fast:
                </Card.Text>
                <Button variant="primary">View live version</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;
