import { AcsModal } from "@akkurateio/ds";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import BtnSolidPrimary from "../BtnSolidPrimary";

interface IProps {}

const UserModal: FunctionComponent<IProps> = ({}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Box>
        <BtnSolidPrimary
          text={"Check the user"}
          action={() => setIsOpen(!isOpen)}
        />
      </Box>

      <AcsModal
        title={"Modal"}
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
        hasCloseBtn={true}
        body={
          <Box>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quisquam, perspiciatis consequatur vero itaque ducimus aliquam hic
              illum voluptates quas a et dignissimos quia repellat iste sequi
              non ipsum minima sint! Perferendis delectus nesciunt
            </Text>
          </Box>
        }
        footer={
          <Flex justifyContent={"space-between"} width={"full"}>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
            <Button onClick={() => setIsOpen(false)}>Vue</Button>
          </Flex>
        }
        size={"lg"}
      />
    </>
  );
};

export default UserModal;
