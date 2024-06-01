import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { assets } from "../../../assets/assets";

const Navbar = () => {
  return (
    <Flex
      className="nav"
      align={"center"}
      justify={"space-between"}
      fontSize={"22px"}
      padding={"20px"}
      color={"#585858"}
      w={"100%"}
      h={"80px"}
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
