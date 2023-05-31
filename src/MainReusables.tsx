import styled from "styled-components";
import "./MainReusables.css";
import { ReactNode } from "react";
import { Card, Image } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import dojoImg from "./assets/graphics/dojoImg1.png";

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
