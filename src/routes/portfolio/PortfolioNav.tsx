// import { projectMetrics } from "./portfolioData";
import Alert from "react-bootstrap/Alert";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { BsSortDown, BsSortUp } from "react-icons/bs";
import { FaFolderOpen, FaSort } from "react-icons/fa";
import { Row, Col, Dropdown, DropdownButton, Button } from "react-bootstrap";

type PortfolioNavProps = {
  handleFilter: (shownProjects: string[]) => void;
  sortByMetricId: number | null; // Updated to accept number | null
  setSortByMetricId: (value: number | null) => void; // Updated to accept number | null
  setSortOrder: (value: string) => void;
  sortOrder: string;
  shownProjects: string[];
  projectMetrics: string[];
  isMobile: boolean;
};

const PortfolioNav: React.FC<PortfolioNavProps> = (props) => {
  const {
    handleFilter,
    projectMetrics,
    sortByMetricId,
    setSortByMetricId,
    setSortOrder,
    shownProjects,
    sortOrder,
    isMobile,
  } = props;

  return (
    <>
      <Row className="mb-3">
        <Col xs={12} sm="auto">
          <FaFolderOpen
            size={isMobile ? 24 : 32}
            style={{ margin: "0 1rem" }}
          />
          <ToggleButtonGroup
            type="checkbox"
            value={shownProjects}
            onChange={handleFilter}
          >
            <ToggleButton
              variant="dark"
              id="shownFilter-btn-1"
              value={"Angular"}
            >
              <span>Angular</span>
            </ToggleButton>
            <ToggleButton variant="dark" id="shownFilter-btn-2" value={"React"}>
              <span>React</span>
            </ToggleButton>
            <ToggleButton
              variant="dark"
              checked
              id="shownFilter-btn-3"
              value={"Javascript"}
            >
              <span>Javascript</span>
            </ToggleButton>
          </ToggleButtonGroup>
        </Col>

        <Col xs={12} sm="auto" className={`d-flex ${isMobile ? "mt-3" : ""}`}>
          <FaSort size={isMobile ? 24 : 32} style={{ margin: "0 1rem" }} />
          <DropdownButton
            variant="dark"
            id="dropdown-basic-button"
            title={`Sort`}
          >
            {projectMetrics.map((metric, index: number) => (
              <Dropdown.Item
                key={metric}
                as={Button}
                onClick={() => setSortByMetricId(index)}
              >
                {metric}
              </Dropdown.Item>
            ))}
            <hr />
            <Dropdown.Item as={Button} onClick={() => setSortByMetricId(null)}>
              None
            </Dropdown.Item>
          </DropdownButton>

          {sortOrder === "asc" && (
            <Button
              variant="dark"
              onClick={() => setSortOrder("desc")}
              disabled={sortByMetricId === null}
            >
              <BsSortUp />
            </Button>
          )}
          {sortOrder === "desc" && (
            <Button
              variant="dark"
              onClick={() => setSortOrder("asc")}
              disabled={sortByMetricId === null}
            >
              <BsSortDown />
            </Button>
          )}
        </Col>
      </Row>
      {sortByMetricId !== null && (
        <Row className="mt-3">
          <Col>
            <Alert variant="dark">
              <span style={{ fontWeight: "bold" }}>Sorting by metric: </span>{" "}
              {projectMetrics[sortByMetricId]}
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
