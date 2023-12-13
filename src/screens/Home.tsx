import { Box, Icon, Text, VStack, ClockIcon } from "@gluestack-ui/themed";
import Json from "../mock/service-mockup.json";

export function Home({ navigation }) {
    return (
        <Box width="100%" height="100%" alignItems="center" backgroundColor="$roxao">
           <VStack space="md" alignItems="center">
                <Box w="$64" h="$64" marginBottom="$8">
                    <Icon as={ClockIcon} m="$2" w="$64" h="$64" color="$branquinha" />
                </Box>

                {Json.dados.map((relogio, index) => (
                <Box w="$96" h="$48" bg={index%2 === 0 ? "$rosinha" : "$branquinha"} borderRadius="$xl" marginBottom="$4">
                    <Box
                    alignItems="flex-start" 
                    flexDirection="row" 
                    justifyContent="space-between" 
                    margin="$2"
                    > 
                        <Text color={index%2 === 0 ? "$branquinha" : "$rosinha"} size="2xl">{relogio.nomeServico}</Text>
                        <Text color={index%2 === 0 ? "$branquinha" : "$rosinha"} size="2xl">{relogio.valor}</Text>
                    </Box>
                </Box>
                    ))} 
           </VStack>
        </Box>
    )
}