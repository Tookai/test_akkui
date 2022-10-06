import { Button } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface IProps {
  text: string;
  action: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const BtnSolidPrimary: FunctionComponent<IProps> = ({
  text,
  action,
  isLoading,
  isDisabled,
}) => {
  return (
    <Button
      variant={"solid"}
      colorScheme={"primary"}
      onClick={action}
      isLoading={isLoading}
      isDisabled={isDisabled}
    >
      {text}
    </Button>
  );
};

export default BtnSolidPrimary;
