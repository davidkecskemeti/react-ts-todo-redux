import { Button, Grid } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";

export interface TopBarProps {}

const TopBar: React.FC<TopBarProps> = () => {
  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button>Load</Button>
    </Grid>
  );
};

export default TopBar;
