import { Fragment } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import { EncasingContent, EncasingTitle } from "../MainReusables";
import { poemsData } from "./../../public/assets/poems/poemsData";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const LiquidAirAbuserImage = styled(Image)`
  height: 50px;
`;

const poemImages = [
  <LiquidAirAbuserImage src="./public/assets/poems/poemImages/liquidAirAbuserImage.png" />,
];

function Other() {
  const isMobile = useMediaQuery({ maxWidth: 576 });

  return (
    <Container
      fluid
      style={{
        paddingTop: "7rem",
        paddingBottom: "3rem",
        background: "#000",
      }}
    >
      <Row className="justify-content-center mt-3 mb-5">
        <Col
          className="mb-5 pt-3 pt-3"
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

      {poemsData.map((poem, index) => {
        return (
          <Fragment key={poem.title}>
            <Row className="justify-content-around">
              {index % 2 === 0 ? (
                <>
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
                    {poemImages[0]}
                  </Col>
                </>
              ) : (
                <>
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
                    <h1>ALTERNATING RIGHT</h1>
                  </Col>
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
                </>
              )}
            </Row>
            <hr style={{ marginTop: "12rem", marginBottom: "12rem" }} />
          </Fragment>
        );
      })}
    </Container>
  );
}

export default Other;
