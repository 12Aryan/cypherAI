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
      <Text ml={{ smMobile: "40px",
          mobile: "45px",
          tablet: "0",
          laptop: "0",
          laptopL: "0",
          desktop: "0",
          desktopL: "0",}}>Cypher</Text>
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
