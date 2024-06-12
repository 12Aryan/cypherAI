import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { assets } from "../../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import {
  chatWithAI,
  createNewChat,
  getPreviousPrompts,
} from "../../../redux/ChatWithAISlice";
import { store } from "../../../main-store/store";
import { SlMenu } from "react-icons/sl";
import { MdOutlineHelpOutline, MdOutlineHistory } from "react-icons/md";
import { FaGear } from "react-icons/fa6";

const Sidebar = () => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const previousPrompts = useSelector(getPreviousPrompts);
  const [collapseSidebar, setCollapseSidebar] = useState(false);

  const handleCollapseSidebar = () => {
    setCollapseSidebar(!collapseSidebar);
  };

  const handleSidebarPromptClick = (prompt: string) => {
    dispatch(chatWithAI(prompt));
  };

  const handleNewChatClick = () => {
    dispatch(createNewChat());
  };

  return (
    <Flex
      className="sidebar"
      minH={"100vh"}
      bg={"#1f2b3e"}
      direction={"column"}
      justify={"space-between"}
      p={"25px 15px"}
    >
      <Flex direction={"column"}>
        <Flex className="collapse-sidebar" pl={"10px"}>
          {/* <Image
            src={assets.menu_icon}
            onClick={handleCollapseSidebar}
            cursor={"pointer"}
          /> */}
          <Box onClick={handleCollapseSidebar} cursor={"pointer"}>
            <SlMenu color="#c4d6fb" size={"20px"} />
          </Box>
        </Flex>
        <Flex className="sidebar-body" direction={"column"}>
          <Flex
            className="new-chat"
            align={"center"}
            gap={"10px"}
            p={"10px 15px"}
            bg={"#0F1C2E"}
            color={"grey"}
            cursor={"pointer"}
            borderRadius={"50px"}
            mt={"50%"}
            w={"100%"}
            onClick={handleNewChatClick}
          >
            <Box>
              <Image src={assets.plus_icon} />
            </Box>
            {collapseSidebar && <Text color={"#c4d6fb"}>{"New chat"}</Text>}
          </Flex>
          {collapseSidebar && (
            <Flex className="recent" direction={"column"}>
              <Flex m={"30px 0px 20px 0px"} color={"#c4d6fb"}>
                Recent
              </Flex>
              <Flex
                direction={"column"}
                className="recent-chat-items"
                maxH={"350px"}
                overflowY={"auto"}
              >
                {previousPrompts &&
                  previousPrompts?.length > 0 &&
                  previousPrompts?.map((prompt, index) => (
                    <Flex
                      key={index}
                      className="recent-entry"
                      align={"center"}
                      gap={"10px"}
                      p={"10px"}
                      pr={"40px"}
                      borderRadius={"50px"}
                      color={"#282828"}
                      cursor={"pointer"}
                      _hover={{ bg: "#e2e2e2" }}
                      onClick={() => handleSidebarPromptClick(prompt)}
                    >
                      <Box>
                        <Image src={assets.message_icon} />
                      </Box>
                      <Text>{prompt.slice(0, 18)}...</Text>
                    </Flex>
                  ))}
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
            {/* <Image
              src={assets.question_icon}
              bg={"linear-gradient(90deg, #4d648d, #acc2ef)"}
              borderRadius={"50%"}
            /> */}
            <MdOutlineHelpOutline color="#c4d6fb" size={"25px"} />
          </Box>
          {collapseSidebar && <Text color={"#c4d6fb"}>{"Help"}</Text>}
        </Flex>
        <Flex cursor={"pointer"} align={"center"} gap={"10px"} pl={"10px"}>
          <Box>
            {/* <Image
              src={assets.history_icon}
              bg={"linear-gradient(90deg, #4d648d, #acc2ef)"}
              borderRadius={"50%"}
            /> */}
            <MdOutlineHistory color="#c4d6fb" size={"25px"} />
          </Box>
          {collapseSidebar && <Text color={"#c4d6fb"}>{"Activity"}</Text>}
        </Flex>
        <Flex cursor={"pointer"} align={"center"} gap={"10px"} pl={"10px"}>
          <Box>
            {/* <Image
              src={assets.question_icon}
              bg={"linear-gradient(90deg, #4d648d, #acc2ef)"}
              borderRadius={"50%"}
            /> */}
            <FaGear color="#c4d6fb" size={"20px"} />
          </Box>
          {collapseSidebar && <Text color={"#c4d6fb"}>{"Settings"}</Text>}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
