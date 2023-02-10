import Head from "next/head";
import { ReactNode } from "react";
import A from "./A";
import { Container, Flex, HStack, Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  keywords: string;
}
const MainContainer = ({ children, keywords }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="Want to pass interview" content={keywords} key="DevX" />
        <meta key={"bakyt test, nextjs" + keywords}></meta>
        <title>DevX Task</title>
      </Head>

      <Flex
        className="navbar"
        h="10vh"
        backgroundColor="teal.500"
        justifyContent="center"
      >
        <HStack spacing="24px">
         
            <A href={"/"} text="Home" />

            <A href={"/cards"} text="Cards" />
        </HStack>
      </Flex>
      <Container maxW="100vw" marginTop="8vh">
        <div>{children}</div>
      </Container>
     
    </>
  );
};

export default MainContainer;
