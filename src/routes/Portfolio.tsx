import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import { CustomCardImage } from "../MainReusables";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Sonnet from "../../components/Sonnet";
import dojoImg from "./../assets/f7.png";

function Portfolio() {
  return (
    <>
      <h2>NAVIGATION BAR</h2>
      <h2>proj title</h2>
      <img src="" alt="symbol img" />
      <h3>The app is x and it does y</h3>
      <p>short desc, what is it and what for</p>
      <h3>development accordion item</h3>
      <p>developing it, short desc</p>
      <h3>metrics accordion item</h3>
      <p></p>
      <ul>
        <li>achieving app's purpose</li>
        <li>minimizing required steps</li>
        <li>code readability</li>
        <li>code maintainability</li>
        <li>code extensibility</li>
      </ul>
      <h3>lessons accordion item</h3>
      <Container className="mt-3 mb-3">
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
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Development summary</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Lessons summary</Accordion.Header>
                    <Accordion.Body>
                      <p>What went well:</p>
                      <ul>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                      </ul>
                      <p>What went poorly:</p>
                      <ul>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                      </ul>
                      <p>Root causes:</p>
                      <ul>
                        <li>...</li>
                      </ul>
                      <p>"Never again"'s & next time:</p>
                      <ul>
                        <li>...</li>
                        <li>...</li>
                        <li>...</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
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
