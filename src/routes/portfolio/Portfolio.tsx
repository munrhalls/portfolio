import { portfolioData } from "./portfolioData";
import { projectMetrics } from "./portfolioData";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
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
  const isMobile = useMediaQuery({ maxWidth: 576 });

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
    isMobile,
  };

  const ProjectRows = [];

  for (let i = 0; i < sortedFiltered.length; i += 4) {
    const rowProjects = sortedFiltered.slice(i, i + 4);
    ProjectRows.push(
      <Row key={`row-${i / 4}`} className="mt-3 justify-content-center">
        {rowProjects.map((project) => (
          <PortfolioProject
            key={project.header.title}
            project={project}
            isMobile={isMobile}
          />
        ))}
      </Row>
    );
  }

  return (
    <>
      <Container className="mt-3 mb-3">
        <PortfolioNav {...PortfolioNavProps} />

        {/* // sorted filtered length iterate and collect row < col */}
        {/* // every 4 put it to new arr 
        // that new arr = new iterate 
        
        // {sortedFiltered.map((project, index) => { */}
        {/* //   console.log(
        //     index === 0 || index % 4 === 0,
        //     "should be about ~1 time"
        //   );
        //   return index === 0 || index % 4 === 0 ? (
        //     <Row
        //       key={project.header.title}
        //       className="mt-3 justify-content-center"
        //     >
        //       <PortfolioProject project={project} />
        //     </Row>
        //   ) : (
        //     <PortfolioProject key={project.header.title} project={project} />
        //   );
        // })} */}
        {ProjectRows}
      </Container>
    </>
  );
}

export default Portfolio;
