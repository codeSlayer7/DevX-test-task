import { IPhoto } from "interfaces";
import MainContainer from "../../../components/mainContainer";
import { GetServerSideProps } from "next";
import { getOnePost } from "api";
import Card from "components/Card";

interface Props {
  card: IPhoto;
}

export default function CardItem({ card }: Props) {

  return (
    <MainContainer keywords="card">
      <Card card={card} />
    </MainContainer>
  );
}

export const getServerSideProps = async (context:any) => {
  let id = context?.params?.id;

  if (typeof id === "string") {
    let data = await getOnePost(id);
    let card: IPhoto;
    card = data;
    console.log(card);
    return {
      props: { card },
    };
  }
};
