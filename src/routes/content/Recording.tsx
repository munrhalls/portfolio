import audioFile from "./../../assets/recordings/Nathan-Fake-Outhouse.mp3";
import recordingSymbol from "./../../assets/graphics/recordingSymbol.png";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Recording() {
  return (
    <Card className="d-flex mb-3">
      <Card.Header
        style={{ fontSize: "1.25rem", fontWeight: "bold" }}
        className="d-flex align-items-center justify-content-between"
      >
        Audio recording
        <Card.Img
          style={{ maxWidth: "2.5rem" }}
          variant="top"
          src={recordingSymbol}
        />
      </Card.Header>
      <Card.Body className="flex-column">
        <Card.Title>Lorem title of audio entry</Card.Title>
        <Card.Text>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <audio src={audioFile} controls className="d-block w-100"></audio>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Recording;
