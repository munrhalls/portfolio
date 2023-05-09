import { Image } from "react-bootstrap";

interface H1ImageProps {
  src: string;
  alt: string;
}

export function H1Image({ src, alt }: H1ImageProps) {
  return <Image src={src} style={{ height: "2.5rem", width: "2.5rem" }} />;
}
