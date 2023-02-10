import { Inter } from "@next/font/google";
import { Text, Stack, Heading, Highlight } from "@chakra-ui/react";
import MainContainer from "components/mainContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MainContainer keywords="Best employee">
        <main>
          <Stack spacing={3} marginX="10%">
            <Text fontSize="6xl">
             never Use Next.js and Chakra UI before
            </Text>
            <Text fontSize="lg">
              I have a solid understanding of front-end technologies such as
              HTML, CSS, JavaScript, and React, and I have extensive experience
              in creating responsive and interactive web applications. I have a
              keen eye for design and an ability to turn designs into
              pixel-perfect and functional websites. I am comfortable working in
              an Agile environment and have a strong ability to collaborate with
              cross-functional teams, including designers, backend developers,
              and project managers
            </Text>
            <Text fontSize="3xl">
              Im Frontend dev at
              <a className="link" href="https://neobis.kg">
                {" "}
                Neobis
              </a>
            </Text>

            <Text fontSize="lg">
              Thank you for considering my application. I look forward to the
              opportunity to further discuss my qualifications and how I can
              contribute to your company.
            </Text>
          </Stack>
        </main>
        <style jsx>{`
          .link {
            font-weight: bold;
            color: #20daa5;
          }
          .link:hover {
            opacity: 50%;
          }
        `}</style>
      </MainContainer>
    </>
  );
}
