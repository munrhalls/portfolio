import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { EncasingContent, EncasingTitle } from "../MainReusables";
import { poemsData } from "./../../public/assets/poems/poemsData";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const BgProvider = styled.div`
  position: relative;
  &:before {
    z-index: 0;
    position: absolute;
    content: " ";
    top: : 0;
    background: url(./public/assets/poems/poemImages/liquidAirAbuserImage.png) 5% 5% repeat;
    height: 400%;
    width: 100%;
    animation: slide 30s ease-out infinite;
    @keyframes slide {
      from {
        top: -25%;
      } 
      to {
        top: 25%;
      }
    }
  }
`;

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
          <BgProvider key={poem.title}>
            <Row className="justify-content-center pt-5">
              <>
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
              </>
            </Row>
            <hr style={{ marginTop: "12rem", marginBottom: "12rem" }} />
          </BgProvider>
        );
      })}
    </Container>
  );
}

export default Other;
