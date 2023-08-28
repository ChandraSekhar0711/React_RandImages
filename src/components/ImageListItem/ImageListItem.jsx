import { DownloadIcon } from "@chakra-ui/icons";
import "./ImageListItem.css";
import { saveAs } from "file-saver";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
export function ImageListItem({ image }) {
  async function downloadImage() {
    console.log("downloading");
    const imageResponse = await fetch(image.download_url);
    const imageBlob = await imageResponse.blob();
    saveAs(imageBlob, image.author + "_" + image.id);
  }
  return (
    <Card maxW="sm">
      <CardBody>
        <Link href={image.url} isExternal>
          <Image
            src={image.download_url}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            height="250px"
            width="500px"
          />
        </Link>

        <HStack direction="row" justify="space-between">
          <Image src={image.download_url} className="card_thumb" />
          <VStack>
            <Text size="md" fontSize="x-large">
              {image.author}
            </Text>
            <Text>
              {image.height} x {image.width}
            </Text>
          </VStack>
        </HStack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={downloadImage}
            className="button"
          >
            <DownloadIcon />
            &nbsp;&nbsp;Download
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
