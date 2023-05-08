import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useAppSelector } from "./../hooks/hooks";

function Home() {
  const author = useAppSelector((state) => state.auth.value);
  console.log(author);

  return (
    <Container>
      <Row>
        <Col>
          {author ? <Button color="primary">AUTHOR IS HERE</Button> : ""}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
