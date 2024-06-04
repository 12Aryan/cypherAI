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
      zIndex={2}
      right={"20px"}
      top={"15px"}
      align={"center"}
      justify={"space-between"}
      p={"10px 16px"}
      gap={"15px"}
      borderRadius={"8px"}
    >
      <Flex>{toastMessage}</Flex>
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
