import {
  IconButton,
  IconButtonProps,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export interface ColorModeSwitcherProps
  extends Omit<IconButtonProps, "aria-label"> {}

const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props: any) => {
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
