import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Alert,
  Dropdown,
} from "react-bootstrap";
import { articlesData } from "../../assets/articles/articlesData1-10";
import { recordingsData } from "../../assets/recordings/recordings";
import audioFile from "./../../assets/recordings/Nathan-Fake-Outhouse.mp3";
import Recording from "./Recording";

function Articles() {
  const [subjectFilter, setSubjectFilter] = useState("Any");
  const [typeFilter, setTypeFilter] = useState("Any");
  console.log(subjectFilter, typeFilter);
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubjectFilter(event.target.value);
  };
  const handleTypeFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTypeFilter(event.target.value);
  };

  const filteredArticles = articlesData.filter((article) => {
    if (subjectFilter === "Any") {
      return true;
    } else if (subjectFilter === "Work effectiveness") {
      // Replace this with the actual topic you want to filter by
      return article.subject === "Work effectiveness";
    } else if (subjectFilter === "chronological") {
      return true;
    }
    return false;
  });

  const filteredRecordings = recordingsData.filter((recording) => {
    if (subjectFilter === "Any") {
      return true;
    } else if (subjectFilter === "Work effectiveness") {
      // Replace this with the actual topic you want to filter by
      return recording.subject === "Work effectiveness";
    } else if (subjectFilter === "chronological") {
      return true;
    }
    return false;
  });

  const isFiltered = subjectFilter !== "Any" || typeFilter !== "Any";

  return (
    <Container>
      <Row>
        <Col className="mt-3" xs={3}>
          <Form>
            <FormGroup>
              <Form.Label htmlFor="filter-subject">SUBJECT</Form.Label>
              <Form.Check
                type="radio"
                id="filter-subject-any"
                name="filter-subject"
                label="Any"
                value="Any"
                checked={subjectFilter === "Any"}
                onChange={handleFilterChange}
              />
              <Form.Check
                type="radio"
                id="filter-work-effectiveness"
                name="filter-subject"
                label="Work effectiveness"
                value="Work effectiveness"
                checked={subjectFilter === "Work effectiveness"}
                onChange={handleFilterChange}
              />
            </FormGroup>
          </Form>
        </Col>
        <Col className="mt-3" xs={6}>
          <Form>
            <FormGroup>
              <Form.Label htmlFor="filter-type">TYPE</Form.Label>
              <Form.Check
                type="radio"
                id="filter-type-any"
                name="filter-type"
                label="Any"
                value="Any"
                checked={typeFilter === "Any"}
                onChange={handleTypeFilterChange}
              />
              <Form.Check
                type="radio"
                id="filter-audio"
                name="filter-type"
                label="Audio"
                value="Audio"
                checked={typeFilter === "Audio"}
                onChange={handleTypeFilterChange}
              />
              <Form.Check
                type="radio"
                id="filter-Text"
                name="filter-type"
                label="Text"
                value="Text"
                checked={typeFilter === "Text"}
                onChange={handleTypeFilterChange}
              />
            </FormGroup>
          </Form>
        </Col>
      </Row>
      {isFiltered && (
        <Row className="mt-5">
          <Col>
            <Alert variant="dark">
              {subjectFilter !== "Any" && (
                <div>
                  Showing only content relevant to:
                  <div className="mt-1" style={{ fontWeight: "bold" }}>
                    {subjectFilter}
                  </div>
                </div>
              )}
              {subjectFilter !== "Any" && typeFilter !== "Any" ? <hr /> : ""}
              {typeFilter !== "Any" && (
                <div>
                  Showing only type:
                  <div className="mt-1" style={{ fontWeight: "bold" }}>
                    {typeFilter}
                  </div>
                </div>
              )}
            </Alert>
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
        {filteredRecordings.map((recording) => {
          return (
            <Col key={recording.id} className="mt-3" xs={12}>
              <Recording recordingSrc={recording.mp3} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Articles;
