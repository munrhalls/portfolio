import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import { CustomCardImage } from "../MainReusables";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Sonnet from "../../components/Sonnet";
import dojoImg from "./../assets/f7.png";

function Portfolio() {
  // explicitly show and hande dependency: proj title is used for unique keys = must be unique
  // a turn it [{..project}, ...] format
  // turn it to {} // a.1 DONE

  const project = {
    mainHeader: {
      symbolImg: "smbl|",
      title: "Taizyu",
    },
    mainImg: dojoImg,
    shortDescription: "Provides cubes (short desc):",
    valueToUser: "Enables the user doing ...",
    subtitle: "Visual aid for navigating time-blocks",
    developmentSummary: {
      items: ["a...", "b...", "c..."],
    },
    metricsEstimates: {
      items: [
        {
          title: "Predicting & minimizing biggest time-losses",
          score: "...",
        },
        {
          title: "Keeping it all as simple as possible",
          score: "...",
        },
        {
          title: "Acting only in order of what matters most",
          score: "...",
        },
        {
          title: "Flexibly adapting and having ABCD if-not-x-then-y options",
          score: "...",
        },
        {
          title: "Sense of smoothness, not getting stuttery or stuck",
          score: "...",
        },
        {
          title: "Sense of development ease",
          score: "...",
        },
      ],
    },
    lessonsSummary: {
      whatWentWell: [".a..", "..b.", ".c.."],
      whatWentPoorly: ["..a.", "..b.", "...c"],
      rootCauses: ["..a."],
      neverAgain: ["..a.", ".b..", ".c.."],
    },
    importantPoints: {
      items: ["..a.", ".b..", ".c.."],
    },
    link: "https://awesome.com",
  };
  const list = [project];
  // turn it to [{}, ...] a.2
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
          {list.map((project) => {
            return (
              <Col key={project.mainHeader.title} xs={10} sm={6} md={6} lg={4}>
                <Card>
                  <Card.Header>
                    <h2>
                      <img src={project.mainHeader.symbolImg} alt="smbl|" />{" "}
                      <span>{project.mainHeader.title}</span>
                    </h2>
                  </Card.Header>
                  <Card.Img variant="top" src={project.mainImg} />
                  <Card.Body>
                    <Card.Title>{project.subtitle}</Card.Title>
                    <Card.Text>{project.shortDescription}</Card.Text>

                    <Card.Text>{project.valueToUser}</Card.Text>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Development summary</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            {project.developmentSummary.items.map((item) => (
                              <li key={project.mainHeader.title + item}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Metrics-estimates</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            {project.metricsEstimates.items.map((item) => (
                              <li key={project.mainHeader.title + item.title}>
                                {item.title} <span>{item.score}</span>
                              </li>
                            ))}
                            <li>
                              Predicting & minimizing biggest time-losses:
                              <span>...</span>
                            </li>
                            <li>
                              Keeping it all as simple as possible:{" "}
                              <span>...</span>
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
                              Sense of smoothness, not getting stuttery or
                              stuck:
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
                            {project.lessonsSummary.whatWentWell.map((item) => (
                              <li key={project.mainHeader.title + item}>
                                {item}
                              </li>
                            ))}
                          </ul>
                          <p>What went poorly:</p>
                          <ul>
                            {project.lessonsSummary.whatWentPoorly.map(
                              (item) => (
                                <li key={project.mainHeader.title + item}>
                                  {item}
                                </li>
                              )
                            )}
                          </ul>
                          <p>Root causes:</p>
                          <ul>
                            {project.lessonsSummary.rootCauses.map((item) => (
                              <li key={project.mainHeader.title + item}>
                                {item}
                              </li>
                            ))}
                          </ul>
                          <p>"Never again"'s & next time:</p>
                          <ul>
                            {project.lessonsSummary.neverAgain.map((item) => (
                              <li key={project.mainHeader.title + item}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Important points</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            {project.importantPoints.items.map((item) => (
                              <li key={project.mainHeader.title + item}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <Button variant="primary" href="{project.link}">
                      View live
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;
