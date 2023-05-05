import WebApplications from "./WebApplications";
import Websites from "./Websites";
import LearningProjects from "./LearningProjects";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ButtonGroup, Button, Navbar, Image } from "react-bootstrap";
import f0 from "./../../assets/.f0.png";
import f1 from "./../../assets/f1.png";
import f2 from "./../../assets/f2.png";

function Software() {
  const [selectedButton, setSelectedButton] = useState<string>("section1");

  useEffect(() => {
    const handleScroll = () => {
      const section1 = document.getElementById("section1");
      const section2 = document.getElementById("section2");
      const section3 = document.getElementById("section3");
      if (
        section1 &&
        section1.offsetTop <= window.pageYOffset &&
        window.pageYOffset < section2.offsetTop
      ) {
        setSelectedButton("section1");
      } else if (
        section2 &&
        section2.offsetTop <= window.pageYOffset &&
        window.pageYOffset < section3.offsetTop
      ) {
        setSelectedButton("section2");
      } else if (section3 && section3.offsetTop <= window.pageYOffset) {
        setSelectedButton("section3");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = (section: string) => {
    setSelectedButton(section);
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar
        style={{
          borderRadius: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          style={{
            width: "33.33%",
            background: "black",
            outline: "none",
            borderRadius: 0,
          }}
          className="d-flex flex-column align-items-center"
          variant="dark"
          onClick={() => handleButtonClick("section1")}
        >
          <Image
            className="mt-1 mb-2"
            style={
              selectedButton === "section1"
                ? { boxShadow: "0 3px 3px 3px orange" }
                : {}
            }
            roundedCircle
            src={f0}
            alt="Circle"
            width={32}
            height={32}
          />
          <span className="d-none d-sm-block mt-2">Websites</span>
        </Button>

        <Button
          style={{
            width: "33.33%",
            background: "black",
            outline: "none",
            borderRadius: 0,
          }}
          className="d-flex flex-column align-items-center"
          variant="dark"
          onClick={() => handleButtonClick("section2")}
        >
          <Image
            className="mt-1 mb-2"
            style={
              selectedButton === "section2"
                ? { boxShadow: "0 3px 3px 3px blue" }
                : {}
            }
            roundedCircle
            src={f1}
            alt="Circle"
            width={32}
            height={32}
          />
          <span className="d-none d-sm-block mt-2">Applications</span>
        </Button>
        <Button
          style={{
            width: "33.33%",
            background: "black",
            outline: "none",
            borderRadius: 0,
          }}
          className="d-flex flex-column align-items-center"
          variant="dark"
          onClick={() => handleButtonClick("section3")}
        >
          <Image
            className="mt-1 mb-2"
            style={
              selectedButton === "section3"
                ? { boxShadow: "0 3px 3px 3px magenta" }
                : {}
            }
            roundedCircle
            src={f2}
            alt="Circle"
            width={32}
            height={32}
          />
          <span className="d-none d-sm-block mt-2">Learning</span>
        </Button>
      </Navbar>

      <Container>
        <Row>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <WebApplications />
          </Col>
        </Row>
        <Row>
          <Col>
            <Websites />
          </Col>
        </Row>
        <Row>
          <Col>
            <LearningProjects />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Software;
