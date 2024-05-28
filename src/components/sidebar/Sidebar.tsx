import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <Flex
      className="sidebar"
      minH={"100vh"}
      bg={"#f0f4f9"}
      direction={"column"}
    >
      <Box>
        <Image src={assets.menu_icon} />
      </Box>
      <Flex className="sidebar-header">
        <Flex>
          <Box>
            <Image src={assets.plus_icon} />
          </Box>
          <Text>{"New chat"}</Text>
        </Flex>
      </Flex>
      <Flex className="sidebar-body">
        <Flex>
          <Box>
            <Image src={assets.message_icon} />
          </Box>
          <Text>{"What is react ..."}</Text>
        </Flex>
      </Flex>
      <Flex className="sidebar-footer"></Flex>
      <Flex>
        <Box>
          <Image src={assets.question_icon} />
        </Box>
        <Text>{"Help"}</Text>
      </Flex>
      <Flex>
        <Box>
          <Image src={assets.history_icon} />
        </Box>
        <Text>{"Activity"}</Text>
      </Flex>
      <Flex>
        <Box>
          <Image src={assets.question_icon} />
        </Box>
        <Text>{"Settings"}</Text>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
