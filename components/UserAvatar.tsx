import { Avatar } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

interface IProps {
  user: {
    firstname: string;
    lastname: string;
    avatar?: string;
  };
}

const UserAvatar: FunctionComponent<IProps> = ({ user }) => {
  const router = useRouter()

  return (
    <Avatar
      cursor={"pointer"}
      onClick={() => router.push("/profile")}
      bg={"gray.200"}
      color={"primary.500"}
      name={`${user.firstname} ${user.lastname}`}
      src={user.avatar ? user.avatar : ""}
    />
  );
};

export default UserAvatar;
