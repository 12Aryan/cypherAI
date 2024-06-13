import { SimpleGrid, Flex, Text, Box } from "@chakra-ui/react";
import { chatCardsData } from "../../../global-data/GlobalData";
import { BsCompass } from "react-icons/bs";
import { RiCodeSSlashLine } from "react-icons/ri";
import { GoLightBulb } from "react-icons/go";
import { FiMessageSquare } from "react-icons/fi";

const Card = () => {
  const cardIcons = [<BsCompass color={'#8b9dc1'} size={'24px'}/>, <GoLightBulb color={'#8b9dc1'} size={'24px'} />,<FiMessageSquare color={'#8b9dc1'} size={'24px'} />,<RiCodeSSlashLine color={'#8b9dc1'} size={'24px'} />];

  return (
    <SimpleGrid
      columns={{ base: 1, mobile: 1, tablet: 2, laptop: 4 }}
      spacing="15px"
      padding="20px"
      width={{ base: "80%", mobile: "70%", tablet: "70%", laptop: "100%" }}
    >
      {chatCardsData &&
        chatCardsData.length &&
        chatCardsData.map((chatCard, index) => (
          <Flex
            key={index}
            // h={"200px"}
            h={{
              base: "130px",
              mobile: "130px",
              tablet: "130px",
              laptop: "200px",
            }}
            p={"15px"}
            bg={"linear-gradient(90deg, #1F3A5F, #374357)"}
            borderRadius={"10px"}
            position={"relative"}
            cursor={"pointer"}
            direction={"column"}
            _hover={{ bg: "linear-gradient(90deg, #1F3A5F, #4d648d)" }}
          >
            <Text color={"#c4d6fb"}>{chatCard?.title}</Text>
            <Flex align={"center"} width={"100%"} justify={"center"}>
              <Box
                pos={"absolute"}
                bottom={"15px"}
                right={"15px"}
                borderRadius={"50%"}
              >
                {cardIcons[index]}
              </Box>
              {/* <Image
                w={"35px"}
                p={"5px"}
                bg={"linear-gradient(90deg, #4d648d, #acc2ef)"}
                pos={"absolute"}
                bottom={"10px"}
                right={"10px"}
                src={chatCard?.url}
                borderRadius={"50%"}
              /> */}
            </Flex>
          </Flex>
        ))}
    </SimpleGrid>
  );
};

export default Card;
