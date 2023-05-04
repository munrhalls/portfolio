import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("suybmit");
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Form onSubmit={handleSubmit} className="text-center">
            <Button type="submit">LOGIN VIA E-MAIL LINK</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
