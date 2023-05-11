import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CustomCardImage } from "../MainReusables";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Sonnet from "../../components/Sonnet";
import dojoImg from "./../assets/f7.png";

function Portfolio() {
  return (
    <>
      <Container className="mt-3 mb-3">
        <Row>
          <Col>
            <h2>NAVIGATION BAR</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={10} sm={6} md={6} lg={4}>
            <Card>
              <Card.Header>
                <h2>Taizyu</h2>
              </Card.Header>
              <Card.Img variant="top" src={dojoImg} />
              <Card.Body>
                <Card.Title>Visual aid for navigating time-blocks</Card.Title>
                <Card.Text>
                  Provides cubes:
                  <ul>
                    <li>9 sides, 3 themes</li>
                    <li>important question & answer per side.</li>
                  </ul>
                </Card.Text>
                <Card.Text>
                  <div> Code readability: satisfactory</div>
                  <div>Code maintainability: satisfactory</div>
                </Card.Text>
                <Card.Text>
                  Lessons:
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>
                    <li>
                      Deleniti obcaecati facere voluptas ea nobis vitae officia,
                      consectetur commodi.
                    </li>
                    <li>
                      Eligendi alias laborum placeat fugit numquam neque.
                      Expedita iure iste voluptate illum.
                    </li>
                  </ul>
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
