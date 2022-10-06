import {
  AcsInputSearch,
  AcsTabs,
  AisFilter,
  AisMoreVertical,
} from "@akkurateio/ds";
import { Box, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import PageLayout from "../../layouts/PageLayout";

const Tabs: NextPage = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <PageLayout title={"Tabs"}>
      <VStack spacing={4} width={"full"}>
        <Heading>Tabs</Heading>

        <HStack alignItems={"center"} width={"full"}>
          <Flex flex={1}>
            <Heading>Tickets</Heading>
          </Flex>

          <Flex flex={2}>
            <AcsTabs
              colorScheme={"primary"}
              tabNameArray={["Tab 1", "Tab 2", "Tab 3"]}
              tabContentArray={[
                <Box key={1} h={"50vh"}>
                  Tab 1 content
                </Box>,
                <Box key={2} h={"50vh"}>
                  Tab 2 content
                </Box>,
                <Box key={3} h={"50vh"}>
                  Tab 3 content
                </Box>,
              ]}
            />
          </Flex>

          <Flex alignItems={"center"} flex={1}>
            <AcsInputSearch value={search} handleChange={setSearch} />
            <AisFilter boxSize={7} />
            <AisMoreVertical boxSize={7} />
          </Flex>
        </HStack>
      </VStack>
    </PageLayout>
  );
};

export default Tabs;
