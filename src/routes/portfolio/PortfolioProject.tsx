import { Fragment } from "react";
import Card from "react-bootstrap/Card";
import { Col, Button, Accordion, Image } from "react-bootstrap";

import {
  MetricLiItem,
  MetricText,
  MetricScore,
  MetricScoreColors,
} from "./../../MainReusables";

import Project from "./portfolioData";
import { portfolioData } from "./portfolioData";

function PortfolioProject({ project }: { project: Project }) {
  return (
    <Col xs={10} sm={6} md={6} lg={4}>
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
                  {project.developmentSummary.map((item: string) => (
                    <li key={project.mainHeader.title + item}>{item}</li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Metrics</Accordion.Header>
              <Accordion.Body>
                <ul>
                  {project.metrics.table.map(
                    (item: [string, number], index) => (
                      <Fragment key={project.mainHeader.title + item[0]}>
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
                        {index !== project.metrics.table.length - 1 && <hr />}
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
                  {project.lessonsSummary.whatWentWell.map((item: string) => (
                    <li key={project.mainHeader.title + item}>{item}</li>
                  ))}
                </ul>
                <p>What went poorly:</p>
                <ul>
                  {project.lessonsSummary.whatWentPoorly.map((item: string) => (
                    <li key={project.mainHeader.title + item}>{item}</li>
                  ))}
                </ul>
                <p>Root causes:</p>
                <ul>
                  {project.lessonsSummary.rootCauses.map((item: string) => (
                    <li key={project.mainHeader.title + item}>{item}</li>
                  ))}
                </ul>
                <p>"Never again"'s & next time:</p>
                <ul>
                  {project.lessonsSummary.neverAgain.map((item: string) => (
                    <li key={project.mainHeader.title + item}>{item}</li>
                  ))}
                </ul>
                <p>How can I do it all better:</p>
                <ul>
                  {project.lessonsSummary.howCanIDoItAllBetter.map(
                    (item: string) => (
                      <li key={project.mainHeader.title + item}>{item}</li>
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
                    <li key={project.mainHeader.title + item}>{item}</li>
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
}

export default PortfolioProject;
