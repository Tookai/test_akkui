import {
  AisBug,
  AisEnterprise,
  AisIntervention,
  AisJustice,
  AisKey,
  AisTimeline,
} from "@akkurateio/ds";
import { VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import SideNavBtn from "./SideNavBtn";

interface IProps {}

const SideNavList: FunctionComponent<IProps> = ({}) => {
  return (
    <VStack width={"full"} spacing={4} mt={10}>
      <SideNavBtn icon={<AisBug boxSize={8} />} label={"App"} route={"/"} />
      <SideNavBtn
        icon={<AisTimeline boxSize={8} />}
        label={"Dashboard"}
        route={"/dashboard"}
      />
      <SideNavBtn
        icon={<AisIntervention boxSize={8} />}
        label={"Login"}
        route={"/login"}
      />
      <SideNavBtn
        icon={<AisKey boxSize={8} />}
        label={"Contact"}
        route={"/contact"}
      />
      <SideNavBtn
        icon={<AisJustice boxSize={8} />}
        label={"Tabs"}
        route={"/tabs"}
      />
      <SideNavBtn
        icon={<AisEnterprise boxSize={8} />}
        label={"App"}
        route={"/"}
      />
    </VStack>
  );
};

export default SideNavList;
