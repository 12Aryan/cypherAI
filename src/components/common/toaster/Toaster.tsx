import { Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { hideToast } from "../../../redux/SharedSlice";
import { store } from "../../../main-store/store";

const Toaster = ({ toastMessage }: { toastMessage: string }) => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const handleToasterCloseClick = (): void => {
    dispatch(hideToast());
  };
  return (
    <Flex
      bg={"#F49B95"}
      color={"#E14035"}
      position={"absolute"}
      zIndex={"999"}
      right={"80px"}
      top={"60px"}
      align={"center"}
      justify={"space-between"}
      p={"10px 16px"}
      gap={"15px"}
      borderRadius={"8px"}
      boxShadow={"0px 1px 4px 0px #63657333"}
      width={{ smMobile: "220px", tablet: "350px" }}
    >
      <Flex color={"#E14035"}>{toastMessage}</Flex>
      <Flex
        cursor={"pointer"}
        fontSize={"28px"}
        h={"25px"}
        w={"25px"}
        align={"center"}
        justify={"end"}
        onClick={() => handleToasterCloseClick()}
      >
        {"×"}
      </Flex>
    </Flex>
  );
};

export default Toaster;
