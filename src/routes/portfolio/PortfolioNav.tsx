import { portfolioData } from "./portfolioData";

import { useState, Fragment } from "react";
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

const PortfolioNav = ({ props }) => {
  const {
    handleFilter,
    projectMetrics,
    setSortByMetric,
    setSortOrder,
    sortByMetric,
    shownProjects,
    isMobile,
    sortOrder,
    handleSort,
  } = props;

  return (
    <>
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
            <Dropdown.Item as={Button} onClick={() => setSortByMetric("None")}>
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
    </>
  );
};

export default PortfolioNav;
