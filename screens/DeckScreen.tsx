import {
  Box,
  HStack,
  Heading,
  Pressable,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import Container from "../components/Container";
import { Ionicons } from "@expo/vector-icons";
import DeckCard from "../components/deck/DeckCard";

export default function DeckScreen({ navigation }: any) {
  return (
    <Container>
      <Box justifyContent="space-between" px={20}>
        <HStack justifyContent="space-between">
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Ionicons name="arrow-back-circle-sharp" size={34} color="white" />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Ionicons name="settings-sharp" size={34} color="white" />
          </Pressable>
        </HStack>
        <HStack justifyContent="center">
          <Heading color="white" textAlign="center" size="3xl">
            CHOOSE DECK
          </Heading>
        </HStack>
        <HStack>
          <DeckCard />
          <DeckCard />
          <DeckCard />
        </HStack>
      </Box>
    </Container>
  );
}
