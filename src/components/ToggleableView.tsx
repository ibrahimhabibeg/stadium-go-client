import React, { useState } from "react";
import { View } from "react-native";
import { Card, IconButton, Text } from "react-native-paper";
import type { StyleProp, ViewStyle } from "react-native";

const ToggleableView = ({
  title,
  children,
  isExpandedOnStart = false,
  style,
}: propsType) => {
  const [isExpanded, setIsExpanded] = useState(isExpandedOnStart);

  return (
    <View
      style={{
        width: "85%",
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <Card
        style={{
          width: "100%",
        }}
        contentStyle={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "center",
          width: "100%",
          paddingHorizontal: "5%",
        }}
        onPress={() => setIsExpanded((prevVal) => !prevVal)}
      >
        <Text style={{ width: "auto" }}>{title}</Text>
        <IconButton icon={isExpanded ? "arrow-up" : "arrow-down"} />
      </Card>
      {isExpanded && children}
    </View>
  );
};

type propsType = {
  title: string;
  children: React.JSX.Element;
  isExpandedOnStart?: boolean;
  style?: ViewStyle;
};

export default ToggleableView;
