import { Box, Card, Heading, Icon, Switch, Text } from "@gluestack-ui/themed";
import { useState } from "react";

export default function FilterCard({ icon, title, number }: any) {
  const [enable, setEnable] = useState<boolean>(false);

  return (
    <Box w={"100%"}>
      <Card
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        p={10}
        px={20}
        w={"100%"}
      >
        <Box gap={20} flexDirection="row" alignItems="center">
          {icon}
          <Box>
            <Heading color="black">{title} </Heading>
            <Text size="sm">{number} CARDS</Text>
          </Box>
        </Box>
        <Switch value={enable} onToggle={() => setEnable(!enable)} />
      </Card>
    </Box>
  );
}
