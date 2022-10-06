import { Text, VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface IProps {
  exchange: {
    number: number | string;
  };
}

const Exchange: FunctionComponent<IProps> = ({ exchange }) => {
  return (
    <VStack>
      <Text fontSize={"xs"} lineHeight={0} opacity={0.5}>
        Échange{exchange.number > 1 ? "s" : ""}
      </Text>
      <Text>{exchange.number}</Text>
    </VStack>
  );
};

export default Exchange;
