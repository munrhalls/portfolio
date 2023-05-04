import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth } from "firebase/auth";

function Login() {
  //   const actionCodeSettings = {
  //     // URL you want to redirect back to. The domain (www.example.com) for this
  //     url: "https://www.munrhalls-portfolio.com/finishLogin",
  //     // This must be true.
  //     handleCodeInApp: true,
  //   };

  //   const auth = getAuth();
  //   sendSignInLinkToEmail(auth, "antarcticdepths71@gmail.com", actionCodeSettings)
  //     .then(() => {
  //       // The link was successfully sent. Inform the user.
  //       // Save the email locally so you don't need to ask the user for it again
  //       // if they open the link on the same device.
  //       window.localStorage.setItem(
  //         "emailForSignIn",
  //         "antarcticdepths71@gmail.com"
  //       );
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ...
  //     });

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
