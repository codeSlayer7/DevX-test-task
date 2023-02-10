import { getPosts } from "../../api";
import { IPhoto } from "../../interfaces";
import { ReactElement } from "react";
import { GetStaticProps } from "next";
import Cards from '../../components/Cards'
import { Flex, Spacer, Box } from "@chakra-ui/react";
import MainContainer from "components/mainContainer";
interface Props {
  postData: any;
}

function CardsPage({ postData }: Props) {
  return (
    <MainContainer keywords="cards as blogs">
      <Flex gap={6} flexWrap="wrap" justifyContent="center">
        {postData.map((el: IPhoto) => (
          <Box w="20%" key={el.id}>
            <Cards cards={el} />
          </Box>
        ))}
      </Flex>
    </MainContainer>
  );
}

export default CardsPage;

export const getStaticProps: GetStaticProps = async () => {
  let data = await getPosts();
  let postData: Array<IPhoto> = [];
  postData = data;

  return {
    props: { postData },
  };
};
