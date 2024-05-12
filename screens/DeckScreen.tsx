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
import DeckCard from "../components/deck/DeckCard";
import { Feather } from "@expo/vector-icons";
import FilterCard from "../components/deck/filters/FilterCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DeckScreen({ navigation }: any) {
  return (
    <Container>
      <Box justifyContent="space-between" px={20} h={"95%"}>
        <HStack justifyContent="space-between" pt={20}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Ionicons name="arrow-back-circle-sharp" size={24} color="white" />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Settings")}>
            <Ionicons name="settings-sharp" size={24} color="white" />
          </Pressable>
        </HStack>
        <HStack justifyContent="center">
          <Heading color="white" textAlign="center" size="3xl">
            CHOOSE DECK
          </Heading>
        </HStack>
        <HStack justifyContent="space-between" alignContent="center">
          <DeckCard title={"PARTY AND FUN"} />
          <DeckCard title={"FOOD"} />
          <DeckCard title={"RELATIONSHIPS"} locked />
        </HStack>
        <Box>
          <Card backgroundColor="#fff" p={0}>
            <Box
              flexDirection="row"
              justifyContent="space-around"
              alignItems="center"
              backgroundColor={"#0003"}
              p={15}
            >
              <Feather name="lock" size={24} color="white" />
              <Box justifyContent="space-around">
                <Box>
                  <Text>EXPLORE</Text>
                  <Text>PRIMIUM DECKS</Text>
                </Box>
                <Box
                  flexDirection="row"
                  mt={5}
                  p={1}
                  px={3}
                  borderWidth={1}
                  borderRadius={20}
                  borderEndWidth={2}
                >
                  <Text size="xs">STARTING FROM</Text>
                  <Text size="xs">&#x20b9; 120.00</Text>
                </Box>
              </Box>
              <DeckCard title={"DIRTY"} />
            </Box>
          </Card>
        </Box>
        <Box gap={10}>
          <Heading color="white" size="2xl" pl={20}>
            FILTERS
          </Heading>
          <Box
            justifyContent="space-around"
            alignItems="center"
            w={"100%"}
            gap={10}
          >
            <FilterCard
              title="FUNNY"
              number="10"
              icon={
                <MaterialCommunityIcons
                  name="emoticon-lol-outline"
                  size={24}
                  color="black"
                />
              }
            />
            <FilterCard
              title="AWKWARD"
              number="70"
              icon={
                <MaterialCommunityIcons
                  name="emoticon-neutral-outline"
                  size={24}
                  color="black"
                />
              }
            />
            <FilterCard
              title="ADULT"
              number="90"
              icon={
                <MaterialCommunityIcons
                  name="emoticon-devil-outline"
                  size={24}
                  color="black"
                />
              }
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
