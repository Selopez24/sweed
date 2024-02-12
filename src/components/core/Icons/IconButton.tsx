import React, { ReactElement } from "react";
import { Button } from "@rneui/base";

interface Props {
  onPress: () => void;
  icon: ReactElement;
}

const IconButton = ({ icon, onPress }: Props) => (
  <Button onPress={onPress} type="clear" icon={icon} />
);
export default IconButton;
