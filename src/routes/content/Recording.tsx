import recordingSymbol from "./../../../public/assets/graphics/recordingSymbol.png";
import { Card } from "react-bootstrap";

interface RecordingSrcProps {
  recordingSrc: string;
}

function Recording({ recordingSrc }: RecordingSrcProps) {
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <audio src={recordingSrc} controls className="d-block w-100"></audio>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Recording;
