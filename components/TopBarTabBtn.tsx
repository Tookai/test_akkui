import { HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

interface IProps {
  tab: {
    name: string;
    route: string;
  };
}

const TopBarTabBtn: FunctionComponent<IProps> = ({ tab }) => {
  const router = useRouter();

  console.log(router.asPath);
  console.log(tab.route);

  return (
    <HStack
      height={"full"}
      px={2}
      borderTopWidth={"4px"}
      borderBottomWidth={"4px"}
      borderTopColor={"transparent"}
      borderBottomColor={
        router.asPath === tab.route ? "primary.500" : "transparent"
      }
      cursor={"pointer"}
      onClick={() => router.push(tab.route)}
    >
      <Text>{tab.name}</Text>
    </HStack>
  );
};

export default TopBarTabBtn;
