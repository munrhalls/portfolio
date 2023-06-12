import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { EncasingContent, EncasingTitle } from "../MainReusables";
import { poemsData } from "./../../public/assets/poems/poemsData";
import styled from "styled-components";

const RowBGProvider = styled(Row)`
  position: relative;
  overflow: hidden;
`;

const PoemsTitle = styled.h1`
  font-size: 2.25rem;
  color: #fff;
`;

function Other() {
  return (
    <Container
      fluid
      style={{
        paddingBottom: "3rem",
        background: "#000",
      }}
    >
      <Row className="mt-5 d-flex justify-content-center">
        <Col
          className="d-flex justify-content-center"
          xs={10}
          sm={6}
          md={6}
          lg={4}
          xl={4}
        >
          <PoemsTitle>Poems</PoemsTitle>
        </Col>
      </Row>

      {poemsData.map((poem) => {
        return (
          <Fragment key={poem.title}>
            <RowBGProvider className="mt-5 d-flex justify-content-center">
              <Col
                className="d-flex justify-content-center"
                style={{
                  position: "relative",
                }}
                xs={10}
                sm={6}
                md={6}
                lg={4}
                xl={4}
              >
                {poem.content}
              </Col>
            </RowBGProvider>
            <hr />
          </Fragment>
        );
      })}
    </Container>
  );
}

export default Other;
