import {
  Box,
  Card,
  Center,
  HStack,
  Heading,
  Pressable,
  Text,
} from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Container from "../components/Container";

export default function HomeScreen({ navigation }: any) {
  return (
    <Container>
      <Box justifyContent="space-around" h={"90%"}>
        <Box alignItems="flex-end" px={15}>
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <Ionicons name="settings-sharp" color={"white"} size={24} />
          </Pressable>
        </Box>
        <Center>
          <Heading color="white" size="5xl">
            NEVER
          </Heading>
          <Heading color="white" size="5xl">
            HAVE I
          </Heading>
          <Heading color="white" size="5xl">
            EVER
          </Heading>
        </Center>
        <Center gap={24}>
          <Pressable onPress={() => navigation.navigate("Deck")}>
            <Card
              flexDirection="row"
              gap={25}
              alignItems="center"
              justifyContent="flex-start"
              w="65%"
            >
              <Ionicons name="play-circle" color={"black"} size={24} />
              <Heading size="2xl" textAlign="center" w={"70%"}>
                PLAY
              </Heading>
            </Card>
          </Pressable>
          <Pressable>
            <Card
              flexDirection="row"
              gap={25}
              alignItems="center"
              justifyContent="center"
              w="60%"
            >
              <FontAwesome6 name="users" size={24} color="black" />
              <Heading size="2xl">MULTIPLAYER</Heading>
            </Card>
          </Pressable>
          <Pressable>
            <Card
              flexDirection="row"
              gap={25}
              alignItems="center"
              justifyContent="center"
              w="60%"
            >
              <FontAwesome6 name="gamepad" size={24} color="black" />
              <Heading size="2xl">HOW TO PLAY</Heading>
            </Card>
          </Pressable>
        </Center>
        <HStack justifyContent="space-between">
          <Card
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap={5}
            bg="transparent"
            shadowColor="transparent"
          >
            <MaterialCommunityIcons name="rocket" size={24} color="white" />
            <Box
              borderWidth={1}
              borderColor="white"
              borderRadius={20}
              py={2}
              px={4}
            >
              <Text color="white" fontSize={"$xs"}>
                FOLLOW US
              </Text>
            </Box>
          </Card>
          <Card
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap={5}
            bg="transparent"
            shadowColor="transparent"
          >
            <MaterialCommunityIcons name="pac-man" size={24} color="white" />
            <Box
              borderWidth={1}
              borderColor="white"
              borderRadius={20}
              py={2}
              px={4}
            >
              <Text color="white" fontSize={"$xs"}>
                MORE GAMES
              </Text>
            </Box>
          </Card>
        </HStack>
      </Box>
    </Container>
  );
}
