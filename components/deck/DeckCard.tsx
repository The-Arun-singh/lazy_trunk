import { Box, Card, Center, Text, VStack } from "@gluestack-ui/themed";
import WavyHeader from "./WavyHeader";
import { Dimensions, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function DeckCard({ title, locked }: any) {
  return (
    <VStack maxWidth={"30%"} minWidth={"30%"}>
      <Box style={{ position: "relative" }}>
        <Center
          style={{ position: "absolute", zIndex: 2 }}
          w={"100%"}
          h={"100%"}
        >
          {locked ? <Feather name="lock" size={24} color="white" /> : ""}
        </Center>
        <Card borderRadius={"$full"} bg={locked ? "#888" : "#fff"}>
          {/* <WavyHeader
          customStyles={styles.svgCurve}
          // customHeight={10}
          // customTop={100}
          customBgColor="green"
          customWavePattern="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        /> */}
          <Text textAlign="center">{title}</Text>
        </Card>
      </Box>
      <Box
        borderWidth={1}
        borderColor={locked ? "#fffa" : "white"}
        borderRadius={50}
        mt={10}
        bg="brown"
      >
        <Box
          bg={locked ? "#0008" : "transparent"}
          w={"100%"}
          py={1}
          px={10}
          borderRadius={50}
        >
          <Text color={locked ? "#fffa" : "white"} textAlign="center">
            PLAY
          </Text>
        </Box>
      </Box>
    </VStack>
  );
}

const styles = StyleSheet.create({
  // rest of the styles
  svgCurve: {
    // position: "absolute",
    // width: "100%",
    // width: "100%",
  },
});
