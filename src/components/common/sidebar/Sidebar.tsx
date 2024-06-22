import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  chatWithAI,
  createNewChat,
  getPreviousPrompts,
} from "../../../redux/ChatWithAISlice";
import { store } from "../../../main-store/store";
import { SlMenu } from "react-icons/sl";
import { MdOutlineHelpOutline, MdOutlineHistory } from "react-icons/md";
import { HiOutlinePlus } from "react-icons/hi";
import { RiSettings3Line } from "react-icons/ri";
import { TiMessage } from "react-icons/ti";
import { DrawerLayout } from "../drawer/DrawerLayout";

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
    <>
      <Flex
        className="sidebar"
        minH={"100vh"}
        bg={"#1f2b3e"}
        direction={"column"}
        justify={"space-between"}
        p={"25px 15px"}
        transition={"width 0.2s ease"}
        width={collapseSidebar ? "250px" : "80px"}
        display={{
          base: "none",
          smMobile: "none",
          mobile: "none",
          tablet: "flex",
          laptop: "flex",
          laptopL: "flex",
          desktop: "flex",
          desktopL: "flex",
        }}
      >
        <Flex direction={"column"}>
          <Flex className="collapse-sidebar" pl={"10px"}>
            <Box onClick={handleCollapseSidebar} cursor={"pointer"}>
              <SlMenu color="#9dabc7" size={"20px"} />
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
              mt={collapseSidebar ? "15%" : "50%  "}
              w={"100%"}
              onClick={handleNewChatClick}
            >
              <Box>
                <HiOutlinePlus color="#cee8ff" />
              </Box>
              {collapseSidebar && <Text color={"#9dabc7"}>{"New chat"}</Text>}
            </Flex>
            {collapseSidebar && (
              <Flex className="recent" direction={"column"}>
                <Flex m={"30px 0px 20px 0px"} color={"#9dabc7"} pl={"15px"}>
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
                        _hover={{ bg: "#374357" }}
                        onClick={() => handleSidebarPromptClick(prompt)}
                      >
                        <Flex alignSelf={"baseline"}>
                          <TiMessage color={"#9dabc7"} size={"24px"} />
                        </Flex>
                        <Text color={"#9dabc7"}>{prompt.slice(0, 18)}...</Text>
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
          gap={"4px"}
          mb={"12px"}
        >
          <Flex
            cursor={"pointer"}
            _hover={{ bg: "#374357" }}
            align={"center"}
            gap={"10px"}
            borderRadius={"30px"}
            p={"8px 10px"}
            title="Currently inactive"
          >
            <Box>
              {/* <Image
              src={assets.question_icon}
              bg={"linear-gradient(90deg, #4d648d, #acc2ef)"}
              borderRadius={"50%"}
            /> */}
              <MdOutlineHelpOutline color="#9dabc7" size={"25px"} />
            </Box>
            {collapseSidebar && <Text color={"#9dabc7"}>{"Help"}</Text>}
          </Flex>
          <Flex
            cursor={"pointer"}
            _hover={{ bg: "#374357" }}
            align={"center"}
            gap={"10px"}
            borderRadius={"30px"}
            p={"8px 10px"}
            title="Currently inactive"
          >
            <Box>
              {/* <Image
              src={assets.history_icon}
              bg={"linear-gradient(90deg, #4d648d, #acc2ef)"}
              borderRadius={"50%"}
            /> */}
              <MdOutlineHistory color="#9dabc7" size={"25px"} />
            </Box>
            {collapseSidebar && <Text color={"#9dabc7"}>{"Activity"}</Text>}
          </Flex>
          <Flex
            cursor={"pointer"}
            _hover={{ bg: "#374357" }}
            align={"center"}
            gap={"10px"}
            borderRadius={"30px"}
            p={"8px 10px"}
            title="Currently inactive"
          >
            <Box>
              {/* <Image
              src={assets.question_icon}
              bg={"linear-gradient(90deg, #4d648d, #acc2ef)"}
              borderRadius={"50%"}
            /> */}
              <RiSettings3Line color="#9dabc7" size={"25px"} />
            </Box>
            {collapseSidebar && <Text color={"#9dabc7"}>{"Settings"}</Text>}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        display={{
          smMobile: "flex",
          mobile: "flex",
          tablet: "none",
          laptop: "none",
          laptopL: "none",
          desktop: "none",
          desktopL: "none",
        }}
        bg={"#0F1C2E"}
        position={"relative"}
      >
        <DrawerLayout
          handleSidebarPromptClick={handleSidebarPromptClick}
          previousPrompts={previousPrompts}
          handleNewChatClick={handleNewChatClick}
          collapseSidebar={collapseSidebar}
        />
      </Flex>
    </>
  );
};

export default Sidebar;
