import { portfolioData } from "./portfolioData";
import { projectMetrics } from "./portfolioData";

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
import PortfolioProject from "./PortfolioProject";
import PortfolioNav from "./PortfolioNav";

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

  const PortfolioNavProps = {
    handleFilter,
    projectMetrics,
    setSortByMetric,
    setSortOrder,
    sortOrder,
    sortByMetric,
    shownProjects,
    isMobile,
    handleSort,
  };

  return (
    <>
      <Container className="mt-3 mb-3">
        <PortfolioNav props={PortfolioNavProps} />

        <Row className="mt-3 justify-content-center">
          {sortedFiltered.map((project) => {
            return (
              <PortfolioProject
                key={project.mainHeader.title}
                project={project}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;
