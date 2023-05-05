import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth } from "../../backend/firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useAppDispatch, useAppSelector } from "./../../hooks/hooks";
import { setLoggedIn, setLoggedOut } from "./authSlice";

function Authentication() {
  const authStatus = useAppSelector((state) => state.auth.value);
  const dispatch = useAppDispatch();

  onAuthStateChanged(auth, (user) => {
    console.log("onAuthStateChanged runs, before condish");
    if (user) {
      dispatch(setLoggedIn());
    } else {
      dispatch(setLoggedOut());
    }
  });

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    console.log("Email:", email);
    console.log("Password:", password);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(setLoggedIn());
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  function handleLogout(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        dispatch(setLoggedOut());
      })
      .catch((error) => {
        console.log("Error");
      });
  }

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          {authStatus ? (
            <>
              <Form onSubmit={handleLogout} className="text-center mb-3">
                <Form.Group className="mb-3">
                  <Form.Label>Logged in.</Form.Label>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Log out
                </Button>
              </Form>
            </>
          ) : (
            <Form onSubmit={handleLogin} className="text-center mb-3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Authentication;
