import { Heading, Stack, Text, Flex, Box, Image } from "@chakra-ui/react";
import { IPhoto } from "interfaces";
interface Props {
  card: IPhoto;
}

function Card({ card }: Props) {
  return (
    <>
      <Flex w="100%" justifyContent='space-around' alignItems='center' >
        <Stack spacing={6} w="40%" >
          <Heading as="h1" size="4xl" noOfLines={1}>
            {card.title}
          </Heading>
          <Text fontSize="xl">{card.body}</Text>
        </Stack>

        <Image
          boxSize="400px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </Flex>
    </>
  );
}

export default Card;
