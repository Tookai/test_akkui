import { AcsDrawer } from "@akkurateio/ds";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";

interface IProps {}

const UserDrawer: FunctionComponent<IProps> = ({}) => {
  const [drawer, setDrawer] = useState<boolean>(false);

  return (
    <Box>
      <Button onClick={() => setDrawer(!drawer)}>Ouvrir le drawer</Button>

      <AcsDrawer
        title={"Drawer"}
        isOpen={drawer}
        onClose={() => setDrawer(false)}
        placement={"right"}
        body={
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            incidunt maxime aspernatur tenetur distinctio nobis in recusandae?
            Repellat nihil placeat possimus provident ex sint fugiat, nam esse
          </Text>
        }
        footer={
          <Flex justifyContent={"space-between"} width={"full"}>
            <Button onClick={() => setDrawer(false)}>Close</Button>
            <Button onClick={() => setDrawer(false)}>Exemple</Button>
          </Flex>
        }
      />
    </Box>
  );
};

export default UserDrawer;
