import { useState, Fragment } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button, Accordion, Image } from "react-bootstrap";
import styled from "styled-components";
import { Dropdown, DropdownButton } from "react-bootstrap";
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

function SortDropdownMenu() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedScore, setSelectedScore] = useState("");

  const handleTypeSelect = (eventKey) => {
    setSelectedType(eventKey);
  };

  const handleScoreSelect = (eventKey) => {
    setSelectedScore(eventKey);
  };

  const handleSortSubmit = () => {
    console.log("Sorting by", selectedType, "with score", selectedScore);
  };

  return (
    <DropdownButton id="sort-dropdown-button" title="Sort">
      <Dropdown.Header>Choose Metric Type</Dropdown.Header>
      <Dropdown.Item eventKey="Type 1" onSelect={handleTypeSelect}>
        Type 1
      </Dropdown.Item>
      <Dropdown.Item eventKey="Type 2" onSelect={handleTypeSelect}>
        Type 2
      </Dropdown.Item>
      <Dropdown.Item eventKey="Type 3" onSelect={handleTypeSelect}>
        Type 3
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Header>Choose Metric Score</Dropdown.Header>
      <Dropdown.Item eventKey="1" onSelect={handleScoreSelect}>
        1
      </Dropdown.Item>
      <Dropdown.Item eventKey="2" onSelect={handleScoreSelect}>
        2
      </Dropdown.Item>
      <Dropdown.Item eventKey="3" onSelect={handleScoreSelect}>
        3
      </Dropdown.Item>
      <Dropdown.Item eventKey="4" onSelect={handleScoreSelect}>
        4
      </Dropdown.Item>
      <Dropdown.Item eventKey="5" onSelect={handleScoreSelect}>
        5
      </Dropdown.Item>
      <Dropdown.Divider />
      <Button variant="dark" onClick={handleSortSubmit}>
        Submit
      </Button>
    </DropdownButton>
  );
}
function Portfolio() {
  // explicitly show and hande dependency: proj title is used for unique keys = must be unique
  // a turn it [{..project}, ...] format
  // turn it to {} // a.1 DONE

  const project = {
    mainHeader: {
      symbolImg: dojoImg,
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
      whatWentWell: [".a..2", "..b3.", ".c.4."],
      whatWentPoorly: ["..a1.", "..b.2", "..3.c"],
      rootCauses: ["..1a."],
      neverAgain: ["..a.1", ".b.12.", ".3c.."],
    },
    importantPoints: {
      items: ["..a.123", ".b.4567.", ".c34543."],
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
      {/* <SortByMetric /> */}
      <SortDropdownMenu />
      <Container className="mt-3 mb-3">
        <Row className="justify-content-center">
          {list.map((project) => {
            return (
              <Col key={project.mainHeader.title} xs={10} sm={6} md={6} lg={4}>
                <Card>
                  <Card.Header>
                    <h2>
                      <Image
                        rounded
                        style={{ width: "2.35rem", marginRight: "1rem" }}
                        src={project.mainHeader.symbolImg}
                        alt="smbl|"
                      />
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
                                <Fragment
                                  key={project.mainHeader.title + item.title}
                                >
                                  <MetricLiItem>
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
                                  {index !==
                                    project.metricsEstimates.items.length -
                                      1 && <hr />}
                                </Fragment>
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
                    <hr />
                    <Button variant="info" href="{project.link}">
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
