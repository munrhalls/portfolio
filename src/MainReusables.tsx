import "./MainReusables.css";
import { ReactNode } from "react";
import { Image } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

interface H1ImageProps {
  src: string;
  alt: string;
}

interface Props {
  children: ReactNode;
}

export function H1Image({ src, alt }: H1ImageProps) {
  return <Image src={src} style={{ height: "2.5rem", width: "2.5rem" }} />;
}

export function CustomAccordionHeader({ children }: Props) {
  return <Accordion.Header>{children}</Accordion.Header>;
}
