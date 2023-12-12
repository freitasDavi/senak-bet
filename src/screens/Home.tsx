import { Avatar, AvatarFallbackText, Box, CloseIcon, HStack, Icon, Text, VStack } from "@gluestack-ui/themed";
import { Navbar } from "../components/Navbar";

export function Home() {
    return (
        <>
            <Box width="100%" height="100%" justifyContent="center" alignItems="center" backgroundColor="$roxao">
                <VStack space="lg">
                    <Box borderRadius="$lg" bgColor="$roxinho">
                    <Text color="$branquinha" size="xl" alignSelf="center">Última aposta!</Text>
                    <Box w="$96" h="$32" borderRadius="$lg" justifyContent="center" alignItems="center" >
                        <HStack space="2xl" reversed={false}>

                                <Avatar bgColor="$rosinha" size="xl" borderRadius="$full">
                                    <AvatarFallbackText>Santos</AvatarFallbackText>
                                </Avatar>

                                <Text color="$rosinha" size="6xl" >2 - 1</Text>

                            <Avatar bgColor="$rosinha" size="xl" borderRadius="$full">
                                <AvatarFallbackText>Amazonas</AvatarFallbackText>
                            </Avatar>

                        </HStack>
                    </Box>
                    </Box>

                    <Box w={"$80"} h={"$80"} bgColor="$roxinho">
                        <Text color="$rosinha">
                            Salve
                        </Text>
                    </Box>
                </VStack>
            </Box>
            <Navbar />
        </>
    )
}