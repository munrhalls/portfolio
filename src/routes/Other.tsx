import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { EncasingContent, EncasingTitle } from "../MainReusables";
import { poemsData } from "./../../public/assets/poems/poemsData";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const RowBGProvider = styled(Row)`
  position: relative;
  overflow: hidden;
  &:before {
    z-index: 0;
    position: absolute;
    content: " ";
    top: : 0;
    background: url(./public/assets/poems/poemImages/liquidAirAbuserImage.png);
    background-repeat: repeat;
    height: 150%;
    width: 100%;
    animation: slide 3s linear infinite;
    @keyframes slide {
      from {
        top: -40%;
      } 
      to {
        top: 0;
      }
    }
  }
`;

const PoemsTitle = styled.h1`
  font-size: 2.25rem;
  color: #fff;
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
      <Row className="justify-content-center">
        <Col xs={7} sm={5} md={4} lg={4} xl={2}>
          <PoemsTitle>Poems</PoemsTitle>
        </Col>
      </Row>

      {poemsData.map((poem, index) => {
        return (
          <>
            <RowBGProvider key={poem.title} className="justify-content-center">
              <Col
                style={{
                  position: "relative",
                  borderRadius: "5px",
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
            </RowBGProvider>
            <hr style={{ marginTop: "12rem", marginBottom: "12rem" }} />
          </>
        );
      })}
    </Container>
  );
}

export default Other;
