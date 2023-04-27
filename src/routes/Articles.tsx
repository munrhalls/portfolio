import { Container, Row, Col } from "react-bootstrap";

function Articles() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-3">Articles</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Philosophy software dev</p>
          <p>Psych software dev</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Articles;
