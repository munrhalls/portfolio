import { useState } from "react";
import styled from "styled-components";
import {
  CustomFormLabel,
  CustomFormCheck,
  CustomFormCheckInput,
} from "./../../MainReusables";
import { Container, Row, Col, Form, FormGroup, Alert } from "react-bootstrap";
import { articlesData } from "../../assets/articles/articlesData1-10";
import { recordingsData } from "../../assets/recordings/recordingsData";
import Recording from "./Recording";

const StyledRowReflector = styled(Row)`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.025) 0%,
      rgba(255, 255, 255, 0.15) 77%,
      rgba(255, 255, 255, 0.23) 92%,
      rgba(255, 255, 255, 0.05) 100%
    );
    background-position: 0% 10%;
    background-size: 100% 100%;
    animation: shine 10s infinite;
    z-index: -10;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  @keyframes shine {
    to {
      background-position: 100% 30%;
    }
  }
`;

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
      <StyledRowReflector
        className="d-flex justify-content-start mt-4 pl-3 pr-3 pb-3 pt-0"
        style={{
          position: "relative",
          borderRadius: "5px",
          background: "rgb(33, 37, 41)",
          color: "#fff",
          zIndex: "2",
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
      </StyledRowReflector>
      {isFiltered && (
        <Row className="mt-4">
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
