
import { Box, Icon, Text, VStack, ClockIcon, ButtonText } from "@gluestack-ui/themed";
import Json from "../mock/service-mockup.json";
import { Button } from "@gluestack-ui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router";


type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function Home({ navigation }: Props) {
    return (
           <VStack space="md" alignItems="center">
                <Box w="$48" h="$48" marginBottom="$8">
                    <Icon as={ClockIcon} m="$2" w="$48" h="$48" color="$branquinha" />
                </Box>

                <Button bg="$rosinha" onPress={() => navigation.navigate("Cadastro")}>
                    <ButtonText fontWeight="bold" color="$branquinha">NOVO</ButtonText>
                </Button>

                {Json.dados.map((relogio, index) => (
                <Box justifyContent="space-between"
                 w="$96" h="$32"
                  bg={index%2 === 0 ? "$rosinha" : "$branquinha"}
                   borderRadius="$xl"
                    marginBottom="$4"
                    p="$4"
                    >
                    <Box
                    alignItems="flex-start" 
                    flexDirection="row"
                    justifyContent="space-between" 
                    > 
                        <Text fontWeight="bold" color={index%2 === 0 ? "$branquinha" : "$rosinha"} size="2xl">{relogio.nomeServico.toUpperCase()}</Text>
                        <Text color={index%2 === 0 ? "$branquinha" : "$rosinha"} size="lg">{relogio.valor}</Text>
                    </Box>

                    <Box flexDirection="row" justifyContent="space-between" alignItems="flex-end" >
                        <Box flexDirection="column">
                            <Text color={index%2 === 0 ? "$branquinha" : "$rosinha"} size="md">Inicio: {relogio.inicio}</Text>
                            <Text color={index%2 === 0 ? "$branquinha" : "$rosinha"} size="md">Fim: {relogio.fim}</Text>
                        </Box>
                        <Text fontWeight="bold" color={index%2 === 0 ? "$branquinha" : "$rosinha"} size="lg">Total: R$ {relogio.valorCompleto}</Text>
                    </Box>

                </Box>
                    ))} 
           </VStack>
    )
}