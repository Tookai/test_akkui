import { Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import PageLayout from "../layouts/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout title={""}>
      <Heading>Index</Heading>
    </PageLayout>
  );
};

export default Home;
