import { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Alert } from "react-bootstrap";
import { articlesData } from "../../assets/articles/articlesData1-10";
import { recordingsData } from "../../assets/recordings/recordings";
import audioFile from "./../../assets/recordings/Nathan-Fake-Outhouse.mp3";
import Recording from "./Recording";

function Articles() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  const filteredArticles = articlesData.filter((article) => {
    if (selectedFilter === "all") {
      return true;
    } else if (selectedFilter === "subject-1") {
      // Replace this with the actual topic you want to filter by
      return article.subject === "subject-1";
    } else if (selectedFilter === "chronological") {
      return true;
    }
    return false;
  });

  return (
    <Container>
      <Row>
        <Col className="mt-3" xs={6}>
          <Form>
            <FormGroup>
              <Form.Label htmlFor="filter">Filter by:</Form.Label>
              <Form.Select
                id="filter"
                value={selectedFilter}
                onChange={handleFilterChange}
              >
                <option value="all">All</option>
                <option value="subject-1">subject 1</option>
                <option value="subject 2">subject 2</option>
              </Form.Select>
            </FormGroup>
          </Form>
        </Col>
        <Col className="mt-3" xs={6}>
          {/* You can add more filtering options here if needed */}
        </Col>
      </Row>
      {selectedFilter !== "all" && (
        <Row className="mt-5">
          <Col>
            <Alert>Showing only: {selectedFilter}</Alert>
          </Col>
        </Row>
      )}
      <Row>
        {filteredArticles.map((article) => {
          return (
            <Col key={article.id} className="mt-3" xs={12}>
              {article.html};
            </Col>
          );
        })}
        {recordingsData.map((recording) => {
          return (
            <Col className="mt-3" xs={12}>
              <Recording recordingSrc={recording.mp3} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Articles;
