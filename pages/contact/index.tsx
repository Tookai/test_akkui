import { AcsInputPhone, AcsInputText, AcsInputTextArea } from "@akkurateio/ds";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import PageLayout from "../../layouts/PageLayout";

interface IProps {}

const Contact: NextPage = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const router = useRouter();

  return (
    <PageLayout title={"Contact"}>
      <Flex
        flex={1}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Heading>Contact</Heading>

        <Flex flexDir={"column"} width={"50%"}>
          <AcsInputText
            label="Email"
            placeholder="Email"
            value={email}
            handleChange={setEmail}
          />

          <AcsInputPhone label="Phone" value={phone} handleChange={setPhone} />

          <AcsInputTextArea
            label="Message"
            placeholder="Message"
            value={message}
            handleChange={setMessage}
            maxLength={1000}
          />

          <Button
            variant={"outline"}
            colorScheme={"secondary"}
            onClick={() => router.push("/dashboard")}
          >
            Envoyer
          </Button>
        </Flex>
      </Flex>
    </PageLayout>
  );
};

export default Contact;
