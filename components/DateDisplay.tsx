import { Box, Text } from "@chakra-ui/react";
import dayjs, { Dayjs } from "dayjs";
import { FunctionComponent } from "react";
import { capitalizeFirstLetter } from "../helpers/utils";

interface IProps {
  date: Dayjs;
}

const DateDisplay: FunctionComponent<IProps> = ({ date }) => {
  return (
    <Box textAlign={"center"} width={"fit-content"}>
      <Text>{capitalizeFirstLetter(dayjs(date).format("MMM"))}</Text>
      <Text>{dayjs(date).format("DD")}</Text>
    </Box>
  );
};

export default DateDisplay;
