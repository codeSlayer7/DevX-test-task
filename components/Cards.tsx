import {
  Card as CardChakra,
  Image,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Heading,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { IPhoto } from "interfaces";
import Link from "next/link";

interface Props {
  cards: IPhoto;
}

function Cards ({ cards }: Props) {
  const { id, title, body } = cards;
  return (
    <>
      <CardChakra maxW="sm" key={id} h="60vh">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title?.substring(0,20)}</Heading>
            <Text>{body?.substring(0,40)}</Text>
           
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link href={`/cards/${id}`} >
              <Button variant="ghost" colorScheme="blue">
                See single page
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </CardChakra>
    </>
  );
}

export default Cards;
