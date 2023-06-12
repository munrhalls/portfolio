import { Fragment } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import { EncasingContent, EncasingTitle } from "../MainReusables";
import { poemsData } from "./../../public/assets/poems/poemsData";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const LiquidAirAbuserImage = styled(Image)`
  height: 50%;
  width: 50%;
  animation: rotate 1.5s infinite linear;
  @keyframes rotate {
    from {
      transform: rotate3d(0, 1, 0, 0deg);
    }
    to {
      transform: rotate3d(0, 1, 0, 360deg);
    }
  }
`;

const poemImages = [
  <LiquidAirAbuserImage src="./public/assets/poems/poemImages/liquidAirAbuserImage.png" />,
];

const PoemsTitle = styled.h1`
  color: #fff;
  font-size: 2.75rem;
`;

function Other() {
  const isMobile = useMediaQuery({ maxWidth: 576 });

  return (
    <Container
      fluid
      style={{
        paddingBottom: "3rem",
        background: "#000",
      }}
    >
      <Row className="justify-content-center mt-3 mb-5">
        <Col className="mt-3" xs={7} sm={5} md={4} lg={4} xl={2}>
          <PoemsTitle>Poems</PoemsTitle>
        </Col>
      </Row>

      {poemsData.map((poem, index) => {
        return (
          <Fragment key={poem.title}>
            <Row className="justify-content-center pt-5">
              <>
                <Col xs={1} sm={2}></Col>
                <Col
                  style={{
                    position: "relative",
                    borderRadius: "5px",
                    boxShadow: "0 0 16px 48px #fff",
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
                <Col xs={1} sm={2}></Col>
                <Col
                  xs={7}
                  sm
                  style={{ marginTop: `${isMobile ? "10rem" : "0"}` }}
                >
                  {poemImages[0]}
                </Col>
                <Col xs={1}></Col>
              </>
            </Row>
            <hr style={{ marginTop: "12rem", marginBottom: "12rem" }} />
          </Fragment>
        );
      })}
    </Container>
  );
}

export default Other;
