import { portfolioData } from "./portfolioData";
import { projectMetrics } from "./portfolioData";

import { useState } from "react";
import { Container, Row } from "react-bootstrap";

import PortfolioProject from "./PortfolioProject";
import PortfolioNav from "./PortfolioNav";

function Portfolio() {
  const [shownProjects, setShownProjects] = useState([
    "Website",
    "App",
    "Learning project",
  ]);

  const [sortByMetricId, setSortByMetricId] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleFilter = (shownProjects: string[]) => {
    setShownProjects(shownProjects);
  };

  const filtered = portfolioData.filter((item) =>
    shownProjects.includes(item.type)
  );

  const handleSort = (e) => {
    setSortByMetricId(e.target.value);
  };

  const sortedFiltered = sortByMetricId
    ? filtered.sort((a, b) => {
        return sortOrder === "asc"
          ? a.metrics.table[sortByMetricId][0] -
              b.metrics.table[sortByMetricId][0]
          : b.metrics.table[sortByMetricId][0] -
              a.metrics.table[sortByMetricId][0];
      })
    : filtered;

  const PortfolioNavProps = {
    handleFilter,
    handleSort,
    sortByMetricId,
    setSortByMetricId,
    setSortOrder,
    sortOrder,
    shownProjects,
    projectMetrics,
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
