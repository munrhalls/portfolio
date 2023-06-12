import styled from "styled-components";
import "./MainReusables.css";
import { ReactNode } from "react";
import { Container, Row, Col, Card, Image, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import dojoImg from "./../public/assets/graphics/dojoImg1.png";
import f1 from "./../public/assets/graphics/f1.png";

interface H1ImageProps {
  src: string;
  alt: string;
}

interface Props {
  children: ReactNode;
}

interface TextProps {
  text: string;
}

interface ImageProps {
  src: string;
  alt: string;
}

// MOSTLY FOR HOMEPAGE
export function H1Image({ src, alt }: H1ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      rounded
      style={{ height: "2.5rem", width: "2.5rem", marginRight: "1rem" }}
    />
  );
}

export function CustomAccordionHeader({ text }: TextProps) {
  return (
    <Accordion.Header>
      <H1Image src={dojoImg} alt="dojo image" />
      <span>{text}</span>
    </Accordion.Header>
  );
}

export function ProjectLessonsHeader({ children }: Props) {
  return (
    <h3 style={{ fontSize: "1rem", textDecoration: "underline" }}>
      {children}
    </h3>
  );
}

export function CustomParagraphsGroup({ children }: Props) {
  return (
    <div
      style={{
        border: "1px solid #fff",
        borderRadius: "5px",
        background: "#fff",
        marginBottom: "1rem",
        padding: "1.25rem 2rem .5rem",
      }}
    >
      {children}
    </div>
  );
}

export const MetricLiItem = styled.li`
  display: flex;
  align-items: center;
`;

export const MetricText = styled.span`
  color: #000;
  white-space: pre-line;
  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
  @media (max-width: 768px) {
    font-size: 0.61rem;
  }
`;

export const MetricScore = styled.span`
  width: 1.8rem;
  @media (max-width: 768px) {
    width: 1.5rem;
  }
  @media (max-width: 576px) {
    font-size: 0.75rem;
    width: 1.25rem;
  }

  color: #fff;
  border: 1px solid black;
  border-radius: 50%;

  display: inline-block;
  text-align: center;
  padding-bottom: 0.05rem;
  margin-left: auto;
  margin-right: 0.15rem;
`;

export const MetricScoreColors = [
  "red",
  "darkorange",
  "grey",
  "darkmagenta",
  "blue",
];

export function CustomCardImage({ src, alt }: ImageProps) {
  return <Card.Img src={src} alt={alt} />;
}

// MOSTLY FOR CONTENT PAGE
export const CustomFormLabel = styled(Form.Label)`
  background: #fff;
  width: 6rem;
  color: #000;
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  font-weight: bold;
  opacity: 0.51;

  @media screen and (max-width: 768px) {
    width: 6rem;
  }
`;

export const CustomFormCheck = styled(Form.Check)`
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: 0.81rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
export const CustomFormCheckLabel = styled(Form.Check.Label)``;

export const CustomFormCheckInput = styled(Form.Check.Input)`
  padding: 0.25rem;
  color: #fff !important;
  // #fff on checked
  background: ${({ checked }) =>
    checked ? "#fff !important" : "#000 !important"};
  // #fff on checked
  border: ${({ checked }) =>
    checked ? "3px solid #fff !important" : "1px solid #fff !important"};
  cursor: pointer;
  z-index: 10;
`;

interface EncasingContentProps {
  children: React.ReactNode;
}

interface EncasingTitleProps {
  title: string;
}

export function EncasingTitle({ title }: EncasingTitleProps) {
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

export function EncasingContent({ children }: EncasingContentProps) {
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
