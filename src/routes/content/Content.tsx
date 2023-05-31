import { Container, Row, Col } from "react-bootstrap";
import { articlesData } from "../../assets/articles/articlesData1-10";
import Recording from "./Recording";

function Articles() {
  console.log(articlesData);
  return (
    <Container>
      <Row>
        <Col className="mt-3" xs={12}>
          {articlesData.map((article) => {
            return article;
          })}
        </Col>
        <Col className="mt-3" xs={12}>
          <Recording />
        </Col>
      </Row>
    </Container>
  );
}

export default Articles;
