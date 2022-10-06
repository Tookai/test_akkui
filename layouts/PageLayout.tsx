import { AisSubvitamineFilled } from "@akkurateio/ds";
import { Flex, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { FunctionComponent } from "react";
import SideNavBtn from "../components/SideNavBtn";
import SideNavList from "../components/SideNavList";
import TopBar from "../components/TopBar";
import UserAvatar from "../components/UserAvatar";

interface IProps {
  children: React.ReactNode;
  title: string;
  tabsList?: { name: string; route: string }[];
  searchText?: string;
  setSearchText?: (value: string) => void;

  withHeader?: boolean;
}

const PageLayout: FunctionComponent<IProps> = ({
  children,
  title,
  tabsList,
  searchText,
  setSearchText,
  withHeader = true,
}) => {
  return (
    <Flex width={"100vw"} height={"100vh"} overflow={"hidden"}>
      <Head>
        <title>{title}</title>
      </Head>
      <VStack height={"full"} width={"64px"} bg={"primary.500"}>
        <VStack flex={1} width={"full"} justifyContent={"space-between"} pt={4}>
          <SideNavBtn
            icon={<AisSubvitamineFilled boxSize={8} color={"white"} />}
            label={"Subvitamine"}
            route={"/"}
          />
          <SideNavList />
        </VStack>
        <Flex flex={1} alignItems={"flex-end"} pb={4}>
          <UserAvatar user={{ firstname: "Thibaut", lastname: "Orcel" }} />
        </Flex>
      </VStack>
      <VStack flex={1} alignItems={"flex-start"} spacing={0}>
        {withHeader && (
          <TopBar
            title={title}
            tabsList={tabsList}
            searchText={searchText}
            setSearchText={setSearchText}
          />
        )}
        <VStack
          flex={1}
          width={"full"}
          alignItems={"flex-start"}
          px={4}
          pb={10}
          overflowY={"scroll"}
        >
          {children}
        </VStack>
      </VStack>
    </Flex>
  );
};

export default PageLayout;
