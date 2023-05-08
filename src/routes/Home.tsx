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
      <Row style={{ background: "#000" }}>
        <Col xs={4}>
          <Image src={homeImg} alt="Home image" fluid />
        </Col>
        <Col xs={8} style={{ background: "#fff", border: "1rem solid #000" }}>
          <h1 className="mt-3">Munrhalls</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            provident autem quidem similique nam necessitatibus libero in
            eveniet porro aliquid modi reprehenderit laborum itaque quaerat
            incidunt unde, totam reiciendis deleniti.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
