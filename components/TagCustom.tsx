import { Tag } from "@chakra-ui/react";
import { FunctionComponent, useEffect, useState } from "react";

interface IProps {
  text: string;
  type:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const TagCustom: FunctionComponent<IProps> = ({ text, type }) => {
  const [color, setColor] = useState("blue");

  // switch case for different types of tags
  useEffect(() => {
    switch (type) {
      case "primary":
        setColor("primary");
        break;
      case "secondary":
        setColor("secondary");
        break;
      case "success":
        setColor("green");
        break;
      case "danger":
        setColor("red");
        break;
      case "warning":
        setColor("yellow");
        break;
      case "info":
        setColor("cyan");
        break;
      case "light":
        setColor("whiteAlpha");
        break;
      case "dark":
        setColor("blackAlpha");
        break;
      default:
        setColor("blue");
        break;
    }
  }, [type]);

  return (
    <Tag variant={"solid"} colorScheme={color} px={4} rounded={"full"}>
      {text}
    </Tag>
  );
};

export default TagCustom;
