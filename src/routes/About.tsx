import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h1>Hello. I am a junior frontend web developer. </h1>
          <p>You can learn a few things about me on this page.</p>
          <h2>Learning software development</h2>
          <p>How it began</p>
          <p>Why</p>
          <p>How did it go</p>
          <h2>Interests in the world of software development</h2>
          <p>Mention DS & ALGO</p>
          <p>Geometries & gestalts</p>
          <p>Dev rate</p>
          <p>Conceptual exploration</p>
          <h2>Other interests</h2>
          <h3>Poetry</h3>
          <p>brief intro</p>
          <ul>
            <li>Poem 1</li>
            <li>Poem 2</li>
            <li>Poem 3</li>
          </ul>
          <h3>Chess</h3>
          <p>about chess brief</p>
          <h3>Starcraft: Brood War</h3>
          <p>about, brief</p>
          <h3>Books</h3>
          <ul>
            list
            <li>book 1</li>
            <li>book 2</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
