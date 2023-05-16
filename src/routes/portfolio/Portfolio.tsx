import { portfolioData } from "./portfolioData";
import { projectMetrics } from "./portfolioData";

import { useState, Fragment } from "react";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Card from "react-bootstrap/Card";
import { BsSortDown, BsSortUp } from "react-icons/bs";
import { FaFolderOpen, FaSort } from "react-icons/fa";
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
import { useMediaQuery } from "react-responsive";

import {
  MetricLiItem,
  MetricText,
  MetricScore,
  MetricScoreColors,
  span,
} from "./../../MainReusables";

function Portfolio() {
  const [shownProjects, setShownProjects] = useState([
    "Website",
    "App",
    "Learning project",
  ]);
  const [sortByMetric, setSortByMetric] = useState("None");
  const [sortOrder, setSortOrder] = useState("asc");
  const isMobile = useMediaQuery({ maxWidth: 576 });

  const handleFilter = (shownProjects: string[]) => {
    setShownProjects(shownProjects);
  };

  const filtered = portfolioData.filter((item) =>
    shownProjects.includes(item.type)
  );

  const handleSort = (e) => {
    setSortByMetric(e.target.value);
  };

  const sortedFiltered =
    sortByMetric === "None"
      ? filtered
      : filtered.sort((a, b) => {
          return sortOrder === "asc"
            ? a.metrics[sortByMetric].score - b.metrics[sortByMetric].score
            : b.metrics[sortByMetric].score - a.metrics[sortByMetric].score;
        });

  // projectA[getsToMetricType].score - projectA[getsToMetricType].score
  console.log(sortedFiltered);
  return (
    <>
      <Container className="mt-3 mb-3">
        <Row>
          <Col xs={12} sm="auto">
            <FaFolderOpen size={32} style={{ margin: "0 1rem" }} />
            <ToggleButtonGroup
              type="checkbox"
              value={shownProjects}
              onChange={handleFilter}
            >
              <ToggleButton
                variant="dark"
                id="shownFilter-btn-1"
                value={"Website"}
              >
                <span>Websites</span>
              </ToggleButton>
              <ToggleButton variant="dark" id="shownFilter-btn-2" value={"App"}>
                <span>Apps</span>
              </ToggleButton>
              <ToggleButton
                variant="dark"
                id="shownFilter-btn-3"
                value={"Learning project"}
              >
                <span>Practice</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>

          <Col xs={12} sm="auto" className={`d-flex ${isMobile ? "mt-3" : ""}`}>
            <FaSort size={32} style={{ margin: "0 1rem" }} />
            <DropdownButton
              variant="dark"
              id="dropdown-basic-button"
              title={`Sort`}
            >
              {projectMetrics.map((metric, index) => (
                <Dropdown.Item
                  key={metric}
                  as={Button}
                  onClick={() => setSortByMetric(index)}
                >
                  {metric}
                </Dropdown.Item>
              ))}
              <hr />
              <Dropdown.Item
                as={Button}
                onClick={() => setSortByMetric("None")}
              >
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
        {sortByMetric !== "None" && (
          <Row className="mt-3">
            <Col>
              <Alert variant="dark">
                <span style={{ fontWeight: "bold" }}>Sorting by metric:</span>{" "}
                {sortByMetric}
                {"  "}
                {sortOrder === "asc" ? (
                  <BsSortUp size={24} />
                ) : (
                  <BsSortDown size={24} />
                )}
              </Alert>
            </Col>
          </Row>
        )}
        <Row className="mt-3 justify-content-center">
          {sortedFiltered.map((project) => {
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
                    <Card.Title>{project.mainSection.subtitle}</Card.Title>
                    <Card.Text>{project.mainSection.shortDesc}</Card.Text>

                    <Card.Text>{project.mainSection.valueToUser}</Card.Text>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Development summary</Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            {project.developmentSummary.map((item) => (
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
                              // can do metrics.entries().map(metricKeyValue => )
                              <Fragment
                                key={project.mainHeader.title + item.title}
                              >
                                <MetricLiItem>
                                  <MetricText>{item.title}:</MetricText>
                                  {/* can do metricKeyValue[0] instead */}
                                  <MetricScore
                                    style={{
                                      background: `${
                                        MetricScoreColors[item.score - 1]
                                      }`,
                                      // can do metricKeyValue[1] instead
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
