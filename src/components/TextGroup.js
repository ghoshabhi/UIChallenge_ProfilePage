import React from "react";
import { Text as T, G } from "react-native-svg";

const TextGroup = () => (
  <G key="title">
    <T
      textAnchor="middle"
      alignmentBaseline="text-bottom"
      fontSize="20"
      fontWeight="bold"
    >
      70%
    </T>
    <T
      key="subtitle"
      fontSize="12"
      textAnchor="middle"
      alignmentBaseline="text-top"
    >
      eficacy
    </T>
  </G>
);

export default TextGroup;
