import { ComponentStyleConfig } from "@chakra-ui/react";

export const ButtonTheme: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    color: "white",
    bg: "red.600",
    _hover: {},
    _active: {},
    _focus: {},
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    solid: {
      bg: "red.600",
      _hover: {
        backgroundColor: "#3464CB",
      },
      _active: {
        backgroundColor: "#3464CB",
      },
      _focus: {
        backgroundColor: "#3464CB",
      },
    },
    outlinedButton: {},
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
