import { Fragment } from "react";
import Card from "react-bootstrap/Card";
import { Col, Button, Accordion, Image } from "react-bootstrap";

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
      <Col xs={10} sm={6} md={6} lg={4} className={"mb-5"}>
        <Card>
          <Card.Header>
            <h2>
              <Image
                rounded
                style={{ width: "2.35rem", marginRight: "1rem" }}
                src={project.header.symbolImg}
                alt="smbl|"
              />
              <span>{project.header.title}</span>
            </h2>
          </Card.Header>
          <Card.Img variant="top" src={project.header.headerImg} />
          <Card.Body>
            <Card.Title>{project.mainSection.subtitle}</Card.Title>
            <Card.Text>{project.mainSection.shortDesc}</Card.Text>

            <Card.Text>{project.mainSection.valueToUser}</Card.Text>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Development summary</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {project.developmentSummary.map((item: string) => (
                      <li key={project.header.title + item}>{item}</li>
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
                        <Fragment key={project.header.title + item[0]}>
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
                      <li key={project.header.title + item}>{item}</li>
                    ))}
                  </ul>
                  <p>What went poorly:</p>
                  <ul>
                    {project.lessonsSummary.whatWentPoorly.map(
                      (item: string) => (
                        <li key={project.header.title + item}>{item}</li>
                      )
                    )}
                  </ul>
                  <p>Root causes:</p>
                  <ul>
                    {project.lessonsSummary.rootCauses.map((item: string) => (
                      <li key={project.header.title + item}>{item}</li>
                    ))}
                  </ul>
                  <p>"Never again"'s & next time:</p>
                  <ul>
                    {project.lessonsSummary.neverAgain.map((item: string) => (
                      <li key={project.header.title + item}>{item}</li>
                    ))}
                  </ul>
                  <p>How can I do it all better:</p>
                  <ul>
                    {project.lessonsSummary.howCanIDoItAllBetter.map(
                      (item: string) => (
                        <li key={project.header.title + item}>{item}</li>
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
                      <li key={project.header.title + item}>{item}</li>
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
      {isMobile && (
        <hr style={{ border: "3px solid black" }} className="mt-5 mb-5" />
      )}
    </>
  );
}

export default PortfolioProject;
