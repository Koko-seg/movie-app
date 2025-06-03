import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";

export const Image = ({ src }) => {
  return <AsyncImage src={src} style={{ height: 340 }} Transition={Blur} />;
};
