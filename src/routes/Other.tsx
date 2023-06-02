import { Container, Row, Col, Image } from "react-bootstrap";
import { poemsData } from "../assets/poems/poemsData";
import f1 from "./../assets/graphics/f1.png";

interface EncasingContentProps {
  children: React.ReactNode;
}

interface EncasingTitleProps {
  title: string;
}

function EncasingTitle({ title }: EncasingTitleProps) {
  return (
    <h2 style={{ position: "relative", color: "#fff", padding: "1.5rem" }}>
      {title}
      <div
        style={{
          position: "absolute",
          top: "0",
          bottom: "0",

          right: ".5rem",
          color: "#fff",
          borderLeft: "3px solid #fff",
          borderRight: "3px solid #fff",
          height: "125%",
          width: "3rem",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          wordBreak: "break-all",
        }}
      >
        <div style={{ animation: "drift 22.5s ease-out infinite" }}>
          <Image
            style={{ height: "3rem", width: "2rem", borderRadius: "5px" }}
            src={f1}
            alt={"abcd"}
          />
        </div>
      </div>
      <style>
        {`
          @keyframes drift {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-50%);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </h2>
  );
}

function EncasingContent({ children }: EncasingContentProps) {
  return (
    <div style={{ background: "#fff" }}>
      <Container className="pt-3">
        <Row>
          <Col>{children}</Col>
        </Row>
      </Container>
    </div>
  );
}

function Other() {
  return (
    <Container fluid style={{ background: "#fff" }} className={" pt-3 pb-3"}>
      <Row className="justify-content-center mt-3 mb-5">
        <Col xs={7} sm={5} md={4} lg={4} xl={2}>
          <h1>My poetry</h1>
        </Col>
      </Row>
      {poemsData.map((poem) => (
        <Row className="justify-content-center" key={poem.title}>
          <Col xs={7} sm={5} md={4} lg={4} xl={2}>
            {poem.content}
            <hr className="mt-5 mb-5" />
          </Col>
        </Row>
      ))}
      <Row style={{ background: "#000" }}>
        <Col>
          <EncasingTitle
            title={"Learning software development"}
          ></EncasingTitle>
          <EncasingContent>
            <h3>Point 1</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              quae veniam delectus quo voluptates, pariatur nulla repudiandae
              hic corrupti itaque eveniet. Corporis voluptate dolorum iure neque
              veritatis illum atque quasi!
            </p>
            <h3>Point 2</h3>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              quae veniam delectus quo voluptates, pariatur nulla repudiandae
              hic corrupti itaque eveniet. Corporis voluptate dolorum iure neque
              veritatis illum atque quasi!Why
            </p>
            <h3>Point 3</h3>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              quae veniam delectus quo voluptates, pariatur nulla repudiandae
              hic corrupti itaque eveniet. Corporis voluptate dolorum iure neque
              veritatis illum atque quasi!How did it go
            </p>
          </EncasingContent>
        </Col>
      </Row>
    </Container>
  );
}

export default Other;
