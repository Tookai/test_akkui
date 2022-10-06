import { Box, Text } from "@chakra-ui/react";
import dayjs, { Dayjs } from "dayjs";
import { FunctionComponent } from "react";

interface IProps {
  date: Dayjs;
}

const DateMonthYear: FunctionComponent<IProps> = ({ date }) => {
  return (
    <Box width={"fit-content"}>
      <Text>{dayjs(date).format("MMMM YYYY").toUpperCase()}</Text>
    </Box>
  );
};

export default DateMonthYear;
