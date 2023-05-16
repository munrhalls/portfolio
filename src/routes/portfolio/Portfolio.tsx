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

  const [sortByMetricId, setSortByMetricId] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleFilter = (shownProjects: string[]) => {
    setShownProjects(shownProjects);
  };

  const filtered = portfolioData.filter((item) =>
    shownProjects.includes(item.type)
  );

  const sortedFiltered = sortByMetricId
    ? filtered.sort((a, b) => {
        const scoreA = a.metrics.getScoreFromRowId(sortByMetricId);
        const scoreB = b.metrics.getScoreFromRowId(sortByMetricId);

        if (scoreA !== null && scoreB !== null) {
          return sortOrder === "asc" ? scoreA - scoreB : scoreB - scoreA;
        }

        return 0;
      })
    : filtered;

  const PortfolioNavProps = {
    handleFilter,
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
        <PortfolioNav {...PortfolioNavProps} />

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
