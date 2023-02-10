import Link from "next/link";
import { Text } from "@chakra-ui/react";
interface Props {
  href: string;
  text: string;
}

export default function A({ text, href }: Props) {
  return (
    <Link href={href} >
      <div className="nav">
        <Text fontSize="4xl">{text}</Text>
      </div>
      <style jsx>{`
        .nav {
          font-weight: bold;
        }
        .nav:hover {
          opacity: 50%;
        }
      `}</style>
    </Link>
  );
}
