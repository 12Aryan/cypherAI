import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import { assets } from "../../../assets/assets";

const InputBox = () => {
  return (
    <Box
      className="main-bottom"
      position={"absolute"}
      bottom={0}
      width={"100%"}
      maxW={"900px"}
      p={"0px 20px"}
      margin={"auto"}
    >
      <Flex
        className="input-box"
        align={"center"}
        justifyContent={"space-between"}
        gap={"20px"}
        bg={"#f0f4f9"}
        p={"10px 20px"}
        borderRadius={"50px"}
      >
        <Input
          type="text"
          flex={1}
          bg={"transparent"}
          border={"none"}
          outline={"none"}
          p={"8px"}
          placeholder="Enter a prompt here"
          _focusVisible={{ border: "none !important", outline: "none" }}
        />
        <Flex align={"center"} gap={"15px"}>
          <Image width={"24px"} cursor={"pointer"} src={assets.gallery_icon} />
          <Image width={"24px"} cursor={"pointer"} src={assets.mic_icon} />
          <Image width={"24px"} cursor={"pointer"} src={assets.send_icon} />
        </Flex>
      </Flex>
      <Text>
        Cypher is evolving, it may display inaccurate info sometimes, do cross
        check with other trusted sources
      </Text>
    </Box>
  );
};

export default InputBox;
