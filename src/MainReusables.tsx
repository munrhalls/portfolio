import "./MainReusables.css";
import { ReactNode } from "react";
import { Card, Image } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import dojoImg from "./assets/dojoImg1.png";

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

export function CustomParagraphsGroup({ children }: Props) {
  return (
    <div
      style={{
        border: "1px solid #fff",
        borderRadius: "3rem",
        background: "#fff",
        marginBottom: "1rem",
        padding: "1.25rem 2rem .5rem",
      }}
    >
      {children}
    </div>
  );
}

export function CustomCardImage({ src, alt }: ImageProps) {
  return <Card.Img src={src} alt={alt} />;
}
