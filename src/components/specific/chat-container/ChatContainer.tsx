import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Card from "../../common/card/Card";
import { color } from "framer-motion";
import InputBox from "../input-box/InputBox";

const ChatContainer = () => {
  return (
    <Flex
      className="chat-container"
      maxW={"900px"}
      m={"auto"}
      direction={"column"}
    >
      <Flex
        className="greet"
        m={"50px 0px"}
        fontSize={"56px"}
        color={"#c4c7c5"}
        fontWeight={"500"}
        padding={"20px"}
        direction={"column"}
      >
        <Text as={"span"}>Hey, Dev.</Text>
        <Text>How can i assist you today?</Text>
      </Flex>
      <Box className="cards">
        <Card />
      </Box>
      <InputBox />
    </Flex>
  );
};

export default ChatContainer;
