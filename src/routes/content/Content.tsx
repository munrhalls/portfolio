import { useState } from "react";
import {
  CustomFormLabel,
  CustomFormCheck,
  CustomFormCheckInput,
} from "./../../MainReusables";
import { Container, Row, Col, Form, FormGroup, Alert } from "react-bootstrap";
import { articlesData } from "../../assets/articles/articlesData1-10";
import { recordingsData } from "../../assets/recordings/recordingsData";
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
      return recording.subject === "Work effectiveness";
    } else if (subjectFilter === "chronological") {
      return true;
    }
    return false;
  });

  const isFiltered = subjectFilter !== "Any" || typeFilter !== "Any";
  const isArticles = typeFilter === "Any" || typeFilter === "Text";
  const isAudio = typeFilter === "Any" || typeFilter === "Audio";

  return (
    <Container>
      <Row
        className="d-flex justify-content-start mt-1 pl-3 pr-3 pb-3 pt-0"
        style={{
          borderRadius: "5px",
          background: "rgb(33, 37, 41)",
          color: "#fff",
        }}
      >
        <Col className="mt-3" xs={5}>
          <Form>
            <FormGroup>
              <CustomFormLabel htmlFor="filter-subject">
                SUBJECT
              </CustomFormLabel>
              <CustomFormCheck>
                <Form.Check.Label>Any</Form.Check.Label>
                <CustomFormCheckInput
                  type="radio"
                  id="filter-subject-any"
                  name="filter-subject"
                  value="Any"
                  checked={subjectFilter === "Any"}
                  onChange={handleFilterChange}
                />
              </CustomFormCheck>
              <CustomFormCheck>
                <Form.Check.Label>Work effectiveness</Form.Check.Label>
                <CustomFormCheckInput
                  type="radio"
                  id="filter-work-effectiveness"
                  name="filter-subject"
                  value="Work effectiveness"
                  checked={subjectFilter === "Work effectiveness"}
                  onChange={handleFilterChange}
                />
              </CustomFormCheck>
            </FormGroup>
          </Form>
        </Col>
        <Col className="mt-3" xs={4}>
          <Form>
            <FormGroup>
              <CustomFormLabel htmlFor="filter-type">TYPE</CustomFormLabel>
              <CustomFormCheck
                type="radio"
                id="filter-type-any"
                name="filter-type"
                value="Any"
                checked={typeFilter === "Any"}
                onChange={handleTypeFilterChange}
              >
                <Form.Check.Label>Any</Form.Check.Label>
                <CustomFormCheckInput
                  type="radio"
                  id="filter-type-any"
                  name="filter-type"
                  value="Any"
                  checked={typeFilter === "Any"}
                  onChange={handleTypeFilterChange}
                />
              </CustomFormCheck>
              <CustomFormCheck>
                <Form.Check.Label>Audio</Form.Check.Label>{" "}
                <CustomFormCheckInput
                  type="radio"
                  id="filter-audio"
                  name="filter-type"
                  value="Audio"
                  checked={typeFilter === "Audio"}
                  onChange={handleTypeFilterChange}
                />
              </CustomFormCheck>
              <CustomFormCheck>
                <Form.Check.Label>Text</Form.Check.Label>{" "}
                <CustomFormCheckInput
                  type="radio"
                  id="filter-Text"
                  name="filter-type"
                  value="Text"
                  checked={typeFilter === "Text"}
                  onChange={handleTypeFilterChange}
                />
              </CustomFormCheck>
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
        {isArticles &&
          filteredArticles.map((article) => {
            return (
              <Col key={article.id} className="mt-3" xs={12}>
                {article.html};
              </Col>
            );
          })}
        {isAudio &&
          filteredRecordings.map((recording) => {
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
