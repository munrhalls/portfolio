import { Container, Row, Col } from "react-bootstrap";
import { articlesData } from "../../assets/articles/articlesData1-10";
import Recording from "./Recording";

function Articles() {
  console.log(articlesData);
  return (
    <Container>
      <Row>
        <Col>
          {articlesData.map((article) => {
            return <>{article}</>;
          })}
        </Col>
        <Col>
          <Recording />
        </Col>
      </Row>
    </Container>
  );
}

export default Articles;
