import { Box, ScrollView, View } from "@gluestack-ui/themed";
import React, { ReactNode } from "react";
import { ViewProps } from "react-native";
import Gradient from "../assets/Icons/Gradient";

interface ContainerProps extends ViewProps {
  children: ReactNode;
}

export default function Container({ children, ...props }: ContainerProps) {
  return (
    <Box flex={1} backgroundColor="$black" {...props}>
      <ScrollView
        style={{ height: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box
          position="absolute"
          $base-h={500}
          $base-w={500}
          $lg-h={700}
          $lg-w={700}
        >
          <Gradient />
        </Box>
        {children}
      </ScrollView>
    </Box>
  );
}
