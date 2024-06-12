import { Flex, Image, Text } from "@chakra-ui/react";
import { assets } from "../../../assets/assets";

const Navbar = () => {
  return (
    <Flex
      className="nav"
      align={"center"}
      justify={"space-between"}
      fontSize={"22px"}
      padding={"20px"}
      color={"#c4d6fb"}
      w={"100%"}
      h={"80px"}
      bg={"#0F1C2E"}
    >
      <Text>Cypher</Text>
      <Image
        h={"40px"}
        w={"40px"}
        borderRadius={"50%"}
        src={assets.user_icon}
      />
    </Flex>
  );
};

export default Navbar;
