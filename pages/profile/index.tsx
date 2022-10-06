import { AisMoreVertical } from "@akkurateio/ds";
import { Box, Checkbox, Heading, HStack, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import type { NextPage } from "next";
import DateDisplay from "../../components/DateDisplay";
import Exchange from "../../components/Exchange";
import Intervention from "../../components/Intervention";
import TagCustom from "../../components/TagCustom";
import PageLayout from "../../layouts/PageLayout";

const Profile: NextPage = () => {
  return (
    <PageLayout title={`Profile`}>
      <Heading>Profile</Heading>

      <TagCustom text="Danger" type="danger" />
      <TagCustom text="Dark" type="dark" />
      <TagCustom text="Warning" type="warning" />
      <TagCustom text="Primary" type="primary" />

      <HStack
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"full"}
        spacing={6}
      >
        <HStack spacing={6}>
          <Checkbox />
          <DateDisplay date={dayjs("04/21/1996")} />
        </HStack>

        <Box flex={1}>
          <Text>{"#4221"} - Service Google à vérifier</Text>
          <Text fontSize={"xs"}>
            Dernière réponse du 15/02/2022 à 13:26 de Laurent Frizon
          </Text>
        </Box>

        <TagCustom text="Nouveau" type="danger" />

        <TagCustom text="Priorité haute" type="danger" />

        <Intervention intervention={{ number: 2, time: "3,25h" }} />

        <Exchange exchange={{ number: 2 }} />

        <AisMoreVertical boxSize={6} />
      </HStack>
    </PageLayout>
  );
};

export default Profile;
