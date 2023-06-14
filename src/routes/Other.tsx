import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { EncasingContent, EncasingTitle } from "../MainReusables";
import { poemsData } from "./../../public/assets/poems/poemsData";
import styled from "styled-components";

const PoemsTitle = styled.h1`
  font-size: 2.25rem;
  color: #fff;
`;

const poemBgStyles = [
  {
    backgroundImage: `url(${"/assets/poems/poemImages/liquidAirAbuser.jpg"})`,
    backgroundSize: "contain",
    backgroundPosition: "top center",
    borderRadius: "5px",
    padding: "2.5rem 0",
  },
  {
    backgroundImage: `url(${"/assets/poems/poemImages/chatterChatsWithMind.jpg"})`,
    backgroundSize: "175% 100%",
    backgroundPosition: "top center",
    borderRadius: "5px",
    padding: "2.5rem 0",
  },
  {
    backgroundImage: `url(${"/assets/poems/poemImages/inventorsTouch.jpg"})`,
    backgroundSize: "contain",
    backgroundPosition: "top center",
    borderRadius: "5px",
    padding: "2.5rem 0",
  },
  {
    backgroundImage: `url(${"/assets/poems/poemImages/ogniskujacNiedoczesnosc.jpg"})`,
    backgroundSize: "175% 100%",
    backgroundPosition: "center center",
    borderRadius: "5px",
    padding: "2.5rem 0",
  },
  {
    backgroundImage: `url(${"/assets/poems/poemImages/masaMasySieMasaMasuje.jpg"})`,
    backgroundSize: "contain",
    backgroundPosition: "center center",
    borderRadius: "5px",
    padding: "2.5rem 0",
  },
  {
    backgroundImage: `url(${"/assets/poems/poemImages/rysowanyRys.jpg"})`,
    backgroundSize: "contain",
    backgroundRepeat: "repeat",
    backgroundPosition: "center center",
    borderRadius: "5px",
    padding: "2.5rem 0",
  },
];

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

      {poemsData.map((poem, index) => {
        return (
          <Fragment key={poem.title}>
            <Row className="mt-5 d-flex justify-content-center">
              <Col
                style={poemBgStyles[index]}
                className="d-flex justify-content-center"
                xs={12}
                sm={6}
                md={8}
                lg={8}
                xl={8}
              >
                {poem.content}
              </Col>
            </Row>
            <hr />
          </Fragment>
        );
      })}
    </Container>
  );
}

export default Other;
