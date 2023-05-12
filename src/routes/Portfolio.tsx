import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import { CustomCardImage } from "../MainReusables";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Sonnet from "../../components/Sonnet";
import dojoImg from "./../assets/f7.png";

function Portfolio() {
  // a turn it [{..project}, ...] format
  // [] ds
  // b func filter return filtered to var
  // c  func sorted return sorted to var
  // d var filtered = ...
  // e var sorted = ...
  return (
    <>
      <h2>NAVIGATION BAR</h2>
      <button>filter by highest metric score</button>
      <button>sort by highest metric score</button>
      <button>filter by type</button>
      <button>sort by type</button>

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
                  Provides cubes (short desc):
                  <ul>
                    <li>9 sides, 3 themes</li>
                    <li>important question & answer per side.</li>
                  </ul>
                </Card.Text>
                <Card.Text>
                  Value to user:
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
                    <Accordion.Header>Metrics-estimates</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        <li>
                          Predicting & minimizing biggest time-losses:
                          <span>...</span>
                        </li>
                        <li>
                          Keeping it all as simple as possible: <span>...</span>
                        </li>
                        <li>
                          Acting only in order of what matters most:
                          <span>...</span>
                        </li>
                        <li>
                          Flexibly adapting and having ABCD if-not-x-then-y
                          options: <span>...</span>
                        </li>
                        <hr />
                        <li>
                          Sense of smoothness, not getting stuttery or stuck:
                          <span>...</span>
                        </li>
                        <li>
                          Sense of development ease: <span>...</span>
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
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
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Important points</Accordion.Header>
                    <Accordion.Body>
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
