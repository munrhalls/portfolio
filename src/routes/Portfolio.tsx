import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import styled from "styled-components";
import { CustomCardImage } from "../MainReusables";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Sonnet from "../../components/Sonnet";
import dojoImg from "./../assets/f7.png";

const MetricLiItem = styled.li`
  display: flex;
  align-items: center;
`;

const MetricText = styled.span`
  color: #000;
  white-space: pre-line;
  @media (max-width: 768px) {
    font-size: 0.61rem;
  }
`;

const MetricScore = styled.span`
  width: 1.8rem;
  @media (max-width: 768px) {
    width: 1.5rem;
  }
  @media (max-width: 576px) {
    font-size: 0.75rem;
    width: 1.25rem;
  }

  color: #fff;
  border: 1px solid black;
  border-radius: 50%;

  display: inline-block;
  text-align: center;
  padding-bottom: 0.05rem;
  margin-left: auto;
  margin-right: 0.15rem;
`;

const MetricScoreColors = ["red", "darkorange", "grey", "darkmagenta", "blue"];

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
          title: "Predicting & minimizing \n biggest time-losses",
          score: 5 / 5,
        },
        {
          title: "Keeping it all \n as simple as possible",
          score: 5 / 5,
        },
        {
          title: "Acting only in order \n of what matters most",
          score: 5 / 5,
        },
        {
          title: "Flexibly adapting,  \n  ABCD if-not-a-then-b",
          score: 5 / 5,
        },
        {
          title: "Sense of smoothness, \n not stuttery or stuck",
          score: 5 / 5,
        },
        {
          title: "Sense of \n development ease",
          score: 5 / 5,
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
                            {project.metricsEstimates.items.map(
                              (item, index) => (
                                <>
                                  <MetricLiItem
                                    key={project.mainHeader.title + item.title}
                                  >
                                    <MetricText>{item.title}:</MetricText>
                                    <MetricScore
                                      style={{
                                        background: `${
                                          MetricScoreColors[item.score - 1]
                                        }`,
                                        color: "#fff",
                                      }}
                                    >
                                      {item.score}
                                    </MetricScore>
                                  </MetricLiItem>
                                  <hr />
                                </>
                              )
                            )}
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
