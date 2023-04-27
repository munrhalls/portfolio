import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <Container>
      <Row>
        <Col style={{ background: "blue" }} xs>
          .
        </Col>
        <Col style={{ background: "yellow" }} xs={8}>
          .
        </Col>
        <Col style={{ background: "blue" }} xs>
          .
        </Col>
        <Col style={{ background: "blue" }} xs>
          .
        </Col>
        <Col style={{ background: "blue" }} xs>
          .
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
