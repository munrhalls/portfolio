import "./MainReusables.css";
import { ReactNode } from "react";
import { Image } from "react-bootstrap";
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

export function H1Image({ src, alt }: H1ImageProps) {
  return (
    <Image
      src={src}
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
