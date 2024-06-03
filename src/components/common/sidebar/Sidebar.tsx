import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { assets } from "../../../assets/assets";

const Sidebar = () => {
  const [collapseSidebar, setCollapseSidebar] = useState(false);

  const handleCollapseSidebar = () => {
    setCollapseSidebar(!collapseSidebar);
  };

  return (
    <Flex
      className="sidebar"
      minH={"100vh"}
      bg={"#f0f4f9"}
      direction={"column"}
      justify={"space-between"}
      p={"25px 15px"}
    >
      <Flex direction={"column"}>
        <Flex className="collapse-sidebar" pl={"10px"}>
          <Image
            src={assets.menu_icon}
            onClick={handleCollapseSidebar}
            cursor={"pointer"}
          />
        </Flex>
        <Flex className="sidebar-body" direction={"column"}>
          <Flex
            className="new-chat"
            align={"center"}
            gap={"10px"}
            p={"10px 15px"}
            bg={"#e6eaf1"}
            color={"grey"}
            cursor={"pointer"}
            borderRadius={"50px"}
            mt={"50%"}
            w={"100%"}
          >
            <Box>
              <Image src={assets.plus_icon} />
            </Box>
            {collapseSidebar && <Text>{"New chat"}</Text>}
          </Flex>
          {collapseSidebar && (
            <Flex className="recent" direction={"column"}>
              <Flex m={"30px 0px 20px 0px"}>Recent</Flex>
              <Flex
                className="recent-entry"
                align={"center"}
                gap={"10px"}
                p={"10px"}
                pr={"40px"}
                borderRadius={"50px"}
                color={"#282828"}
                cursor={"pointer"}
                _hover={{ bg: "#e2e2e2" }}
              >
                <Box>
                  <Image src={assets.message_icon} />
                </Box>
                <Text>{"What is react ..."}</Text>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
      <Flex
        className="sidebar-footer"
        direction={"column"}
        gap={"18px"}
        mb={"12px"}
      >
        <Flex cursor={"pointer"} align={"center"} gap={"10px"} pl={"10px"}>
          <Box>
            <Image src={assets.question_icon} />
          </Box>
          {collapseSidebar && <Text>{"Help"}</Text>}
        </Flex>
        <Flex cursor={"pointer"} align={"center"} gap={"10px"} pl={"10px"}>
          <Box>
            <Image src={assets.history_icon} />
          </Box>
          {collapseSidebar && <Text>{"Activity"}</Text>}
        </Flex>
        <Flex cursor={"pointer"} align={"center"} gap={"10px"} pl={"10px"}>
          <Box>
            <Image src={assets.question_icon} />
          </Box>
          {collapseSidebar && <Text>{"Settings"}</Text>}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
