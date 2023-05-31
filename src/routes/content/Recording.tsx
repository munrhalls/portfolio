import audioFile from "./../../assets/recordings/Nathan-Fake-Outhouse.mp3";
import recordingSymbol from "./../../assets/recordingSymbol.png";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Recording() {
  return (
    <Card className="d-flex">
      <Card.Img
        style={{ padding: "1.5rem" }}
        variant="top"
        src={recordingSymbol}
      />
      <Card.Body className="flex-column">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          <audio src={audioFile} controls className="d-block w-100"></audio>
        </Card.Text>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Recording;
