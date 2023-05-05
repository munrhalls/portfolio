import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

import { auth } from "../../backend/firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useAppDispatch, useAppSelector } from "./../../hooks/hooks";
import { useState } from "react";
import { setLoggedIn, setLoggedOut } from "./authSlice";

function Authentication() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [loginDisabled, setLoginDisabled] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);

  const authStatus = useAppSelector((state) => state.auth.value);
  const dispatch = useAppDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setLoggedIn());
    } else {
      dispatch(setLoggedOut());
    }
  });

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(setLoggedIn());

        setLoginDisabled(true);
        setTimeout(() => {
          setLoginDisabled(false);
        }, 10000);
        setIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(errorMessage);

        setLoginAttempts(loginAttempts + 1);
        if (loginAttempts >= 4) {
          setLoginDisabled(true);
          setTimeout(() => {
            setLoginDisabled(false);
            setLoginAttempts(0);
          }, 30000);
        }

        setIsLoading(false);
      });
  }

  function handleLogout(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    signOut(auth)
      .then(() => {
        dispatch(setLoggedOut());
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }

  return (
    <Container>
      <Row className="justify-content-center align-items-center mt-5">
        <Col xs={10} sm={8} md={6} lg={3} className="text-center">
          {loginDisabled && !authStatus && (
            <Alert variant="warning">
              Login possibility is paused for 10 seconds.
            </Alert>
          )}
          {!loginDisabled && isLoading ? (
            <Spinner animation="border" className="mt-3" />
          ) : authStatus ? (
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
              <Button variant="primary" type="submit" disabled={loginDisabled}>
                Submit
              </Button>
              <Form.Group className="mt-3 mb-3">
                {error && (
                  <Form.Text className="text-danger">{error}</Form.Text>
                )}
              </Form.Group>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Authentication;
