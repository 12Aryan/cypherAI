import {
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Drawer,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { MdOutlineHelpOutline, MdOutlineHistory } from "react-icons/md";
import { RiSettings3Line } from "react-icons/ri";
import { SlMenu } from "react-icons/sl";
import { TiMessage } from "react-icons/ti";

export interface DrawerLayoutProps {
  handleSidebarPromptClick: (prompt: any) => void;
  previousPrompts: any;
  handleNewChatClick: () => void;
  collapseSidebar: boolean;
  // handleCollapseSidebar: () => void;
}

export const DrawerLayout = ({
  handleSidebarPromptClick,
  previousPrompts,
  handleNewChatClick,
}: // handleCollapseSidebar,
DrawerLayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();

  return (
    <>
      <Box
        cursor={"pointer"}
        ref={btnRef}
        onClick={onOpen}
        bg={"#0F1C2E"}
        height={"fit-content"}
        position={"absolute"}
        zIndex={2}
        top={"31px"}
        left={"20px"}
      >
        <SlMenu color="#9dabc7" size={"20px"} />
      </Box>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"#9dabc7"} />
          <DrawerBody bg={"#1f2b3e"}>
            <Flex
              direction={"column"}
              height={"100%"}
              justify={"space-between"}
            >
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
                  mt={"25%"}
                  w={"100%"}
                  onClick={() => {
                    handleNewChatClick();
                    onClose();
                  }}
                >
                  <Box>
                    <HiOutlinePlus color="#cee8ff" />
                  </Box>
                  {<Text color={"#9dabc7"}>{"New chat"}</Text>}
                </Flex>
                {
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
                        previousPrompts?.map((prompt: any, index: number) => (
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
                            onClick={() => {
                              handleSidebarPromptClick(prompt);
                              onClose();
                            }}
                          >
                            <Box>
                              <TiMessage color={"#9dabc7"} size={"24px"} />
                            </Box>
                            <Text color={"#9dabc7"}>
                              {prompt.slice(0, 18)}...
                            </Text>
                          </Flex>
                        ))}
                    </Flex>
                  </Flex>
                }
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
                    <MdOutlineHelpOutline color="#9dabc7" size={"25px"} />
                  </Box>
                  {<Text color={"#9dabc7"}>{"Help"}</Text>}
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
                    <MdOutlineHistory color="#9dabc7" size={"25px"} />
                  </Box>
                  {<Text color={"#9dabc7"}>{"Activity"}</Text>}
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
                    <RiSettings3Line color="#9dabc7" size={"25px"} />
                  </Box>
                  {<Text color={"#9dabc7"}>{"Settings"}</Text>}
                </Flex>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
