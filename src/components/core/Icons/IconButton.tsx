import { Button } from "@rneui/base";
import React, { ReactElement } from "react";
import { GestureResponderEvent } from "react-native";

interface Props {
  onPress: (event: GestureResponderEvent) => void;
  icon: ReactElement;
}

const IconButton = ({ icon, onPress }: Props) => {
  return <Button onPress={onPress} type="clear" icon={icon} />;
};
export default IconButton;
