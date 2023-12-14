
import { Box, Icon, Text, VStack, ClockIcon, ButtonText } from "@gluestack-ui/themed";
import { Button } from "@gluestack-ui/themed";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router";
import { useEffect, useState } from "react";
import useAuthStore from "../stores/AuthStore";
import { api } from "../utils/api/base";

type Relogio = {
    id: number;
    nomeServico: string;
    valorHora: number;
    inicio: Date;
    fim: Date;
    completo: boolean
}

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function Home({ navigation }: Props) {
    const userData = useAuthStore(state => state.userData);
    const [ativo, setAtivo] = useState<Relogio>();
    const [data, setData] = useState<Relogio[]>([]);

    useEffect(() => {
        if (userData !== null) {
            async function teste() {
                const response = await api.get("/relogio/" + userData?.id || "1");

                setData(response.data);

                const ativo = response.data.find((relogio: Relogio) => relogio.completo === false);
                setAtivo(ativo);
            }

            teste();
        }
    }, [userData])

    const onClickAtualizar = async () => {
        const response = await api.get("/relogio/" + userData?.id || "1");

        setData(response.data);

        const ativo = response.data.find((relogio: Relogio) => relogio.completo === false);
        setAtivo(ativo);
    }

    const pararRelogio = async (id: number) => {
        await api.put("/relogio/pararRelogio/" + id,)

        const response = await api.get("/relogio/" + userData?.id || "1");

        setData(response.data);

        setAtivo(undefined);
    }

    return (
        <VStack space="md" alignItems="center" bg="$roxao" h="100%" w="100%">
            <Box w="$48" h="$48" marginBottom="$8">
                <Icon as={ClockIcon} m="$2" w="$48" h="$48" color="$branquinha" />
            </Box>


            <Button bg="$rosinha" onPress={onClickAtualizar}>
                <ButtonText fontWeight="bold" color="$branquinha">ATUALIZAR</ButtonText>
            </Button>
            <Button bg="$rosinha" onPress={() => navigation.navigate("NovoRelogio")}>
                <ButtonText fontWeight="bold" color="$branquinha">NOVO</ButtonText>
            </Button>


            {ativo && (
                <Box>
                    <Text color="$white" size="2xl" my="$2">Relógio ativo</Text>
                    <Box bg="$rosinha"
                        justifyContent="space-between"
                        w="$96" h="$32"
                        bg="$rosinha"
                        borderRadius="$xl"
                        marginBottom="$4"
                        p="$4">
                        <Box
                            alignItems="flex-start"
                            flexDirection="row"
                            justifyContent="space-between"
                        >
                            <Text fontWeight="bold" color="$branquinha" size="2xl">{ativo.nomeServico.toUpperCase()}</Text>
                            <Text color="$branquinha" size="lg">R$ {ativo.valorHora}</Text>
                        </Box>

                        <Box flexDirection="row" justifyContent="space-between" alignItems="flex-end" >

                            <Text color="$branquinha" size="md">Inicio: {new Date(ativo.inicio).toDateString()}</Text>
                            <Button bg="$branquinha" onPress={() => pararRelogio(ativo.id)}>
                                <ButtonText color="$rosinha">Parar</ButtonText>
                            </Button>

                        </Box>
                    </Box>
                </Box>
            )}

            <Text color="$white" size="2xl" my="$2">Últimos relógios</Text>
            {data.map((relogio, index) => (
                <Box justifyContent="space-between"
                    w="$96" h="$32"
                    bg={index % 2 === 0 ? "$rosinha" : "$branquinha"}
                    borderRadius="$xl"
                    marginBottom="$4"
                    p="$4"
                >
                    <Box
                        alignItems="flex-start"
                        flexDirection="row"
                        justifyContent="space-between"
                    >
                        <Text fontWeight="bold" color={index % 2 === 0 ? "$branquinha" : "$rosinha"} size="2xl">{relogio.nomeServico.toUpperCase()}</Text>
                        <Text color={index % 2 === 0 ? "$branquinha" : "$rosinha"} size="lg">R$ {relogio.valorHora}</Text>
                    </Box>

                    <Box flexDirection="row" justifyContent="space-between" alignItems="flex-end" >
                        <Box flexDirection="column">
                            <Text color={index % 2 === 0 ? "$branquinha" : "$rosinha"} size="md">Inicio: {new Date(relogio.inicio).toDateString()}</Text>
                            <Text color={index % 2 === 0 ? "$branquinha" : "$rosinha"} size="md">Fim: {
                                relogio.fim === null ? "Ainda não finalizado" : new Date(relogio.fim).toISOString()
                            }</Text>
                        </Box>
                        <Text fontWeight="bold" color={index % 2 === 0 ? "$branquinha" : "$rosinha"} size="lg">Total: R$ {relogio.valorHora}</Text>
                    </Box>

                </Box>
            ))}
        </VStack>
    )
}