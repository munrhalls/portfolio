// import { projectMetrics } from "./portfolioData";
import useMediaQuery from "react-responsive";
import Alert from "react-bootstrap/Alert";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { BsSortDown, BsSortUp } from "react-icons/bs";
import { FaFolderOpen, FaSort } from "react-icons/fa";
import { Row, Col, Dropdown, DropdownButton, Button } from "react-bootstrap";

const PortfolioNav = ({ props }) => {
  const {
    handleFilter,
    projectMetrics,
    sortByMetricId,
    setSortByMetricId,
    setSortOrder,
    shownProjects,
    sortOrder,
  } = props;

  const isMobile = useMediaQuery({ maxWidth: 576 });

  console.log(projectMetrics);
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
            {projectMetrics.map((metric: number, index: number) => (
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
