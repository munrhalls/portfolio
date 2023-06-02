import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { EncasingContent, EncasingTitle } from "../MainReusables";
import { poemsData } from "../assets/poems/poemsData";

function Other() {
  return (
    <Container
      fluid
      style={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
        background: "#000",
      }}
    >
      <Row className="justify-content-center mt-3 mb-5">
        <Col
          className="pt-3 pt-3"
          style={{
            borderRadius: "5px",
            boxShadow: "0 25px 50px 100px #fff",
            background: "#fff",
          }}
          xs={7}
          sm={5}
          md={4}
          lg={4}
          xl={2}
        >
          <h1>Poems</h1>
        </Col>
      </Row>

      {poemsData.map((poem) => (
        <Fragment key={poem.title}>
          <Row className="justify-content-around">
            <Col
              className="pt-3 pt-3"
              style={{
                position: "relative",
                borderRadius: "5px",
                boxShadow: "0 0 50px 100px #fff",
                background: "#fff",
              }}
              xs={7}
              sm={5}
              md={4}
              lg={4}
              xl={2}
            >
              {poem.content}
            </Col>
          </Row>
          <hr style={{ marginTop: "12rem", marginBottom: "12rem" }} />
        </Fragment>
      ))}
      <Row style={{ background: "#000" }}>
        <Col>
          <EncasingTitle
            title={"Learning software development"}
          ></EncasingTitle>
          <EncasingContent>
            <h3>Point 1</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              quae veniam delectus quo voluptates, pariatur nulla repudiandae
              hic corrupti itaque eveniet. Corporis voluptate dolorum iure neque
              veritatis illum atque quasi!
            </p>
            <h3>Point 2</h3>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              quae veniam delectus quo voluptates, pariatur nulla repudiandae
              hic corrupti itaque eveniet. Corporis voluptate dolorum iure neque
              veritatis illum atque quasi!Why
            </p>
            <h3>Point 3</h3>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              quae veniam delectus quo voluptates, pariatur nulla repudiandae
              hic corrupti itaque eveniet. Corporis voluptate dolorum iure neque
              veritatis illum atque quasi!How did it go
            </p>
          </EncasingContent>
        </Col>
      </Row>
    </Container>
  );
}

export default Other;
