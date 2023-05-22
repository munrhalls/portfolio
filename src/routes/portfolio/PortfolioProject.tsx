import { Fragment } from "react";
import Card from "react-bootstrap/Card";
import { Col, ButtonGroup, Button, Accordion } from "react-bootstrap";

import {
  MetricLiItem,
  MetricText,
  MetricScore,
  MetricScoreColors,
} from "./../../MainReusables";

import { Project } from "./portfolioData";

function PortfolioProject({
  project,
  isMobile,
}: {
  project: Project;
  isMobile: boolean;
}) {
  return (
    <>
      <Col xs={10} sm={6} md={4} lg={3} className={"mb-5"}>
        <Card>
          <Card.Header style={{ background: "#000", color: "#fff" }}>
            <h2>{project.header.category}</h2>
          </Card.Header>
          <a href={project.link} target="_blank">
            <Card.Img
              variant="top"
              src={project.header.headerImg}
              style={{
                border: "10px solid #000",
                borderRadius: "0",
              }}
            />
          </a>
          <Card.Body>
            <Card.Title>{project.mainSection.title}</Card.Title>
            <Card.Text>{project.mainSection.shortDesc}</Card.Text>

            <Card.Text>{project.mainSection.valueToUser}</Card.Text>
            <ButtonGroup className={"mt-3 mb-4"} style={{ width: "100%" }}>
              <Button variant="light" href={project.link} target="_blank">
                See live
              </Button>
              <Button variant="dark" href={project.github} target="_blank">
                See code
              </Button>
            </ButtonGroup>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Development summary</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {project.developmentSummary.map((item: string) => (
                      <li key={project.mainSection.title + item}>{item}</li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Metrics</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {project.metrics
                      .getTable()
                      .map((item: [string, number], index) => (
                        <Fragment key={project.mainSection.title + item[0]}>
                          <MetricLiItem>
                            <MetricText>{item[0]}:</MetricText>
                            <MetricScore
                              style={{
                                background: `${MetricScoreColors[item[1] - 1]}`,
                                color: "#fff",
                              }}
                            >
                              {item[1]}
                            </MetricScore>
                          </MetricLiItem>
                          {index !== project.metrics.getTable().length - 1 && (
                            <hr />
                          )}
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
                    {project.lessonsSummary.whatWentWell.map((item: string) => (
                      <li key={project.mainSection.title + item}>{item}</li>
                    ))}
                  </ul>
                  <p>What went poorly:</p>
                  <ul>
                    {project.lessonsSummary.whatWentPoorly.map(
                      (item: string) => (
                        <li key={project.mainSection.title + item}>{item}</li>
                      )
                    )}
                  </ul>
                  <p>Root causes:</p>
                  <ul>
                    {project.lessonsSummary.rootCauses.map((item: string) => (
                      <li key={project.mainSection.title + item}>{item}</li>
                    ))}
                  </ul>
                  <p>"Never again"'s & next time:</p>
                  <ul>
                    {project.lessonsSummary.neverAgain.map((item: string) => (
                      <li key={project.mainSection.title + item}>{item}</li>
                    ))}
                  </ul>
                  <p>How can I do it all better:</p>
                  <ul>
                    {project.lessonsSummary.howCanIDoItAllBetter.map(
                      (item: string) => (
                        <li key={project.mainSection.title + item}>{item}</li>
                      )
                    )}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Important points</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {project.importantPoints.map((item: string) => (
                      <li key={project.mainSection.title + item}>{item}</li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <hr />
          </Card.Body>
        </Card>
      </Col>
      {isMobile && (
        <hr style={{ border: "3px solid black" }} className="mt-5 mb-5" />
      )}
    </>
  );
}

export default PortfolioProject;
