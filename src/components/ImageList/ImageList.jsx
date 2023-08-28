import { ImageListItem } from "../ImageListItem/ImageListItem";
import "./ImageList.css";
import { Flex, WrapItem } from "@chakra-ui/react";
export function ImageList({ imageList }) {
  return (
    <Flex direction="row" wrap="wrap" justify="center" gap="25">
      {imageList.map((image) => (
        <WrapItem key={image.id}>
          <ImageListItem image={image} />
        </WrapItem>
      ))}
    </Flex>
  );
}
