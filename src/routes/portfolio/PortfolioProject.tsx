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

import {
  MetricLiItem,
  MetricText,
  MetricScore,
  MetricScoreColors,
  span,
} from "./../../MainReusables";

function PortfolioProject({ project }) {
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
                  {project.developmentSummary.map((item) => (
                    <li key={project.mainHeader.title + item}>{item}</li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Metrics</Accordion.Header>
              <Accordion.Body>
                <ul>
                  {Object.values(project.metrics).map((item, index) => (
                    // 1. TURN TO {}
                    // 2. ADJUST SYNTAX HERE, MAKE ITERABLE
                    // metrics = {}
                    // can do metrics.entries().map(metricKeyValue => )
                    <Fragment key={project.mainHeader.title + item[0]}>
                      <MetricLiItem>
                        <MetricText>{item[0]}:</MetricText>
                        {/* can do metricKeyValue[0] instead */}
                        <MetricScore
                          style={{
                            background: `${MetricScoreColors[item[1] - 1]}`,
                            // can do metricKeyValue[1] instead
                            color: "#fff",
                          }}
                        >
                          {item[1]}
                        </MetricScore>
                      </MetricLiItem>
                      {index !== Object.values(project.metrics).length - 1 && (
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
                  {project.lessonsSummary.whatWentWell.map((item) => (
                    <li key={project.mainHeader.title + item}>{item}</li>
                  ))}
                </ul>
                <p>What went poorly:</p>
                <ul>
                  {project.lessonsSummary.whatWentPoorly.map((item) => (
                    <li key={project.mainHeader.title + item}>{item}</li>
                  ))}
                </ul>
                <p>Root causes:</p>
                <ul>
                  {project.lessonsSummary.rootCauses.map((item) => (
                    <li key={project.mainHeader.title + item}>{item}</li>
                  ))}
                </ul>
                <p>"Never again"'s & next time:</p>
                <ul>
                  {project.lessonsSummary.neverAgain.map((item) => (
                    <li key={project.mainHeader.title + item}>{item}</li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Important points</Accordion.Header>
              <Accordion.Body>
                <ul>
                  {project.importantPoints.items.map((item) => (
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
