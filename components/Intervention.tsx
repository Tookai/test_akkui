import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface IProps {
  intervention: {
    number: number | string;
    time: string;
  };
}

const Intervention: FunctionComponent<IProps> = ({ intervention }) => {
  return (
    <VStack>
      <Text fontSize={"xs"} lineHeight={0} opacity={0.5}>
        Intervention{intervention.number > 1 ? "s" : ""}
      </Text>
      <HStack
        divider={
          <Divider
            h={"1rem"}
            borderWidth={1}
            borderColor={"gray.300"}
            orientation={"vertical"}
          />
        }
      >
        <Text>{intervention.number}</Text>
        <Text>{intervention.time}</Text>
      </HStack>
    </VStack>
  );
};

export default Intervention;
