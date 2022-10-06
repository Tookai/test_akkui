import { HStack, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

interface IProps {
  icon: React.ReactNode;
  label: string;
  route: string;
}

const SideNavBtn: FunctionComponent<IProps> = ({ icon, label, route }) => {
  const router = useRouter();

  return (
    <Tooltip label={label} placement="right">
      <HStack
        cursor={"pointer"}
        width={"full"}
        color={"white"}
        onClick={() => router.push(route)}
        justifyContent={"center"}
        py={2}
        borderLeftWidth={"4px"}
        borderRightWidth={"4px"}
        borderLeftColor={
          router.pathname === "/"
            ? "transparent"
            : router.pathname.startsWith(route === "/" ? "zzz" : route)
            ? "white"
            : "transparent"
        }
        borderRightColor={"transparent"}
      >
        {icon}
      </HStack>
    </Tooltip>
  );
};

export default SideNavBtn;
