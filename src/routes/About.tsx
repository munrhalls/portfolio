import { Container, Row, Col } from "react-bootstrap";

function EncasingTitle({ title }) {
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
          animation: "drift 10s linear infinite",
        }}
      >
        abcdefg
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

function EncasingContent({ children }) {
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

function About() {
  return (
    <Container fluid style={{ background: "#fff" }} className={"pt-3 pb-3"}>
      <Row>
        <Col>
          <h1>Hello. I am a junior frontend web developer. </h1>
          <p>Briefly introducing myself.</p>
        </Col>
      </Row>

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
      <Row>
        <Col>
          <h2>Interests in the world of software development</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quae
            veniam delectus quo voluptates, pariatur nulla repudiandae hic
            corrupti itaque eveniet. Corporis voluptate dolorum iure neque
            veritatis illum atque quasi!Mention DS & ALGO
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quae
            veniam delectus quo voluptates, pariatur nulla repudiandae hic
            corrupti itaque eveniet. Corporis voluptate dolorum iure neque
            veritatis illum atque quasi!Geometries & gestalts
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quae
            veniam delectus quo voluptates, pariatur nulla repudiandae hic
            corrupti itaque eveniet. Corporis voluptate dolorum iure neque
            veritatis illum atque quasi!Dev rate
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quae
            veniam delectus quo voluptates, pariatur nulla repudiandae hic
            corrupti itaque eveniet. Corporis voluptate dolorum iure neque
            veritatis illum atque quasi!Conceptual exploration
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Other interests</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Poetry</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quae
            veniam delectus quo voluptates, pariatur nulla repudiandae hic
            corrupti itaque eveniet. Corporis voluptate dolorum iure neque
            veritatis illum atque quasi!brief intro
          </p>
          <ul>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              quae veniam delectus quo voluptates, pariatur nulla repudiandae
              hic corrupti itaque eveniet. Corporis voluptate dolorum iure neque
              veritatis illum atque quasi!brief introPoem 1
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              quae veniam delectus quo voluptates, pariatur nulla repudiandae
              hic corrupti itaque eveniet. Corporis voluptate dolorum iure neque
              veritatis illum atque quasi!brief introPoem 2
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              quae veniam delectus quo voluptates, pariatur nulla repudiandae
              hic corrupti itaque eveniet. Corporis voluptate dolorum iure neque
              veritatis illum atque quasi!brief introPoem 3
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <h3>Chess</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            accusantium nemo libero expedita minus et saepe, molestiae
            consequuntur totam tenetur a cum eius ut iste architecto obcaecati
            nostrum quisquam incidunt! about chess brief
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <h3>Starcraft: Brood War</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            accusantium nemo libero expedita minus et saepe, molestiae
            consequuntur totam tenetur a cum eius ut iste architecto obcaecati
            nostrum quisquam incidunt! about, brief
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Books</h3>
          <ul>
            list
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              quae veniam delectus quo voluptates, pariatur nulla repudiandae
              hic corrupti itaque eveniet. Corporis voluptate dolorum iure neque
              veritatis illum atque quasi!brief introbook 1
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              quae veniam delectus quo voluptates, pariatur nulla repudiandae
              hic corrupti itaque eveniet. Corporis voluptate dolorum iure neque
              veritatis illum atque quasi!brief introbook 2
            </li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Performance psychology</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse est
            veniam delectus repellendus placeat, ipsum, at non odit consequatur
            maiores quaerat vel modi libero adipisci, quasi quos cumque dolorum
            quidem.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Cognitive biases</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse est
            veniam delectus repellendus placeat, ipsum, at non odit consequatur
            maiores quaerat vel modi libero adipisci, quasi quos cumque dolorum
            quidem.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Philosophy in terms of the practical and actionable</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse est
            veniam delectus repellendus placeat, ipsum, at non odit consequatur
            maiores quaerat vel modi libero adipisci, quasi quos cumque dolorum
            quidem.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Science, as a tool (most basic level, of course)</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse est
            veniam delectus repellendus placeat, ipsum, at non odit consequatur
            maiores quaerat vel modi libero adipisci, quasi quos cumque dolorum
            quidem.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Cross-domain overlaps</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse est
            veniam delectus repellendus placeat, ipsum, at non odit consequatur
            maiores quaerat vel modi libero adipisci, quasi quos cumque dolorum
            quidem.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>The art of learning, expressing oneself</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse est
            veniam delectus repellendus placeat, ipsum, at non odit consequatur
            maiores quaerat vel modi libero adipisci, quasi quos cumque dolorum
            quidem.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
