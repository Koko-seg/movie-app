import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";

export const Image = ({ src }) => {
  return (
    <AsyncImage
      src={src}
      style={{ width: "100", height: 440 }}
      Transition={Blur}
    />
  );
};
