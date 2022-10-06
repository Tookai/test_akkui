import { AcsInputPassword, AcsInputText } from "@akkurateio/ds";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import PageLayout from "../../layouts/PageLayout";

const Login: NextPage = ({}) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  return (
    <PageLayout title={"login"}>
      <Flex
        flex={1}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Heading>Login</Heading>

        <Flex flexDir={"column"} width={"50%"}>
          <AcsInputText
            label={"Username"}
            placeholder={"Username"}
            value={username}
            handleChange={setUsername}
          />

          <AcsInputPassword
            label={"Password"}
            placeholder={"Password"}
            value={password}
            handleChange={setPassword}
          />

          <Button
            variant={"solid"}
            colorScheme={"primary"}
            onClick={() => router.push("/contact")}
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </PageLayout>
  );
};

export default Login;
