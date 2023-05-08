import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useAppSelector } from "./../hooks/hooks";
import homeImg from "./../assets/homeImg.png";

function Home() {
  const author = useAppSelector((state) => state.auth.value);
  console.log(author);

  return (
    <Container>
      {author && (
        <Row>
          <Col>
            <Button color="primary">AUTHOR IS HERE</Button>
          </Col>
        </Row>
      )}
      <Row>
        <Col>
          <Image src={homeImg} alt="Home image" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
