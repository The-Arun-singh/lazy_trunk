import {
  Box,
  Card,
  HStack,
  Heading,
  Pressable,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import Container from "../components/Container";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Switch } from "@gluestack-ui/themed";
import { useState } from "react";

export default function SettingsScreen({ navigation }: any) {
  const [enable, setEnable] = useState<boolean>(false);

  return (
    <Container>
      <Box h={"90%"} justifyContent="space-around">
        <VStack gap={30}>
          <HStack bg="black" py={10}>
            <Box justifyContent="center" w={"15%"} pl={10}>
              <Pressable onPress={() => navigation.navigate("Home")}>
                <Ionicons
                  name="arrow-back-circle-sharp"
                  size={34}
                  color="white"
                />
              </Pressable>
            </Box>
            <Box justifyContent="center" w={"85%"}>
              <Heading
                fontWeight={"$extrabold"}
                textAlign="center"
                size="3xl"
                color="white"
              >
                SETTINGS
              </Heading>
            </Box>
          </HStack>

          <HStack justifyContent="space-between" px={20}>
            <Box bg="black" p={5} borderRadius={"$full"}>
              <MaterialCommunityIcons
                name="music-circle"
                size={30}
                color="white"
              />
            </Box>
            <Box bg="black" p={5} borderRadius={"$full"}>
              <MaterialCommunityIcons
                name="information"
                size={30}
                color="white"
              />
            </Box>
          </HStack>
        </VStack>
        <VStack gap={15} px={20}>
          <Card flexDirection="row" justifyContent="space-between">
            <Text>Languages</Text>
            <HStack alignItems="center" gap={3}>
              <Text>Eng (US)</Text>
              <Fontisto name="caret-right" size={24} color="black" />
            </HStack>
          </Card>
          <Card flexDirection="row" justifyContent="space-between">
            <HStack alignItems="center" gap={5}>
              <Octicons name="star-fill" size={24} color="black" />
              <Text>Kid Mode</Text>
            </HStack>
            <HStack alignItems="center" gap={5}>
              <Text>{!enable ? "OFF" : "ON"}</Text>
              <Switch
                size="md"
                value={enable}
                onToggle={() => setEnable(!enable)}
                p={0}
              />
            </HStack>
          </Card>
          <Card flexDirection="row" justifyContent="space-between">
            <HStack alignItems="center" gap={5}>
              <FontAwesome5 name="hand-holding-usd" size={24} color="black" />
              <Text>Purchases</Text>
            </HStack>
            <HStack alignItems="center" gap={5}>
              <Fontisto name="caret-right" size={24} color="black" />
            </HStack>
          </Card>
        </VStack>
        <HStack justifyContent="space-between" px={20}>
          <Card bg="transparent" shadowColor="transparent" p={5}>
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              bg="black"
              borderRadius={5}
              p={3}
              px={10}
              gap={5}
            >
              <Ionicons name="game-controller" size={24} color="white" />
              <Box borderRadius={2} py={2} px={4}>
                <Text color="white" fontSize={"$xs"}>
                  MORE GAMES
                </Text>
              </Box>
            </Box>
          </Card>
          <Card shadowColor="transparent" bg="transparent" p={5}>
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              bg="black"
              borderRadius={5}
              p={3}
              px={10}
              gap={5}
            >
              <MaterialCommunityIcons name="rocket" size={24} color="white" />
              <Box borderRadius={2} bg="black" py={2} px={4}>
                <Text color="white" fontSize={"$xs"}>
                  FOLLOW US
                </Text>
              </Box>
            </Box>
          </Card>
        </HStack>
      </Box>
    </Container>
  );
}
