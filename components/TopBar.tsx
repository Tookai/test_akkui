import { AcsInputSearch, AisFilter, AisMoreVertical } from "@akkurateio/ds";
import { Heading, HStack } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import TopBarTabBtn from "./TopBarTabBtn";

interface IProps {
  title: string;
  tabsList?: { name: string; route: string }[];
  searchText?: string;
  setSearchText?: (value: string) => void;
}

const TopBar: FunctionComponent<IProps> = ({
  title,
  tabsList,
  searchText,
  setSearchText,
}) => {
  const [search, setSearch] = useState<string>("");

  return (
    <HStack
      width={"full"}
      bg={"gray.200"}
      px={4}
      height={"64px"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Heading>{title}</Heading>

      <HStack spacing={4} h={"full"}>
        {tabsList &&
          tabsList.map((tab, index) => <TopBarTabBtn key={index} tab={tab} />)}
      </HStack>

      <HStack spacing={4} alignItems={"center"}>
        {setSearchText && (
          <AcsInputSearch
            value={searchText}
            handleChange={setSearchText}
            placeholder={"Rechercher"}
            pb={0}
          />
        )}

        <AisFilter boxSize={6} />

        <AisMoreVertical boxSize={6} />
      </HStack>
    </HStack>
  );
};

export default TopBar;
