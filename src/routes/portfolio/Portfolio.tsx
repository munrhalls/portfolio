import { portfolioData } from "./portfolioData";
import { projectMetrics } from "./portfolioData";

import { useState, Fragment } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Card from "react-bootstrap/Card";
import { BsSortDown, BsSortUp } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Button,
  ButtonGroup,
  Accordion,
  Image,
} from "react-bootstrap";

import {
  MetricLiItem,
  MetricText,
  MetricScore,
  MetricScoreColors,
  ToggleBtnText,
} from "./../../MainReusables";

function Portfolio() {
  const [shownProjects, setShownProjects] = useState([
    "Website",
    "App",
    "Learning project",
  ]);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleChange = (shownProjects: string[]) => {
    setShownProjects(shownProjects);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const showList = portfolioData.filter((item) =>
    shownProjects.includes(item.type)
  );

  return (
    <>
      <Row>
        <Col>
          <ToggleButtonGroup
            type="checkbox"
            value={shownProjects}
            onChange={handleChange}
          >
            <ToggleButton
              variant="dark"
              id="shownFilter-btn-1"
              value={"Website"}
            >
              <ToggleBtnText>Websites</ToggleBtnText>
            </ToggleButton>
            <ToggleButton variant="dark" id="shownFilter-btn-2" value={"App"}>
              <ToggleBtnText>Apps</ToggleBtnText>
            </ToggleButton>
            <ToggleButton
              variant="dark"
              id="shownFilter-btn-3"
              value={"Learning project"}
            >
              <ToggleBtnText>Self-learning</ToggleBtnText>
            </ToggleButton>
          </ToggleButtonGroup>
        </Col>
        <Col className="d-flex">
          <DropdownButton
            variant="dark"
            id="dropdown-basic-button"
            title={
              <span style={{ fontSize: ".75rem" }}>
                Sort by: {sortBy ? sortBy : <BiMinus />}
              </span>
            }
          >
            {projectMetrics.map((metric) => (
              <Dropdown.Item
                key={metric}
                as={Button}
                onClick={() => setSortBy(metric)}
              >
                {metric}
              </Dropdown.Item>
            ))}
            <Dropdown.Item as={Button} onClick={() => setSortBy("None")}>
              None
            </Dropdown.Item>
          </DropdownButton>

          {sortOrder === "asc" && (
            <Button variant="dark" onClick={() => setSortOrder("desc")}>
              <BsSortUp />
            </Button>
          )}
          {sortOrder === "desc" && (
            <Button variant="dark" onClick={() => setSortOrder("asc")}>
              <BsSortDown />
            </Button>
          )}
        </Col>
      </Row>

      <Container className="mt-3 mb-3">
        <Row className="justify-content-center">
          {showList.map((project) => {
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
                        <Accordion.Header>Metrics</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            {project.metrics.map((item, index) => (
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
                                {index !== project.metrics.length - 1 && <hr />}
                              </Fragment>
                            ))}
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
