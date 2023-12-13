import { Box, Button, ButtonText, FormControl, FormControlLabel, FormControlLabelText, Input, InputField, LinearGradient, Text } from "@gluestack-ui/themed";
import { useState } from "react";
import { AxiosError } from "axios";
import { api } from "../utils/api/base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router";

type Props = NativeStackScreenProps<RootStackParamList, 'NovoRelogio'>;

export function Bolao({ navigation }: Props) {

    const [nomeRelogio, setNomeRelogio] = useState('');
    const [valorHora, setValorHora] = useState('');

    const onClickIniciar = async () => {
        if (nomeRelogio === "" || valorHora === "") {
            alert("É necessário preencher os campos!")
            return
        }

        try {
            await api.post('/relogio', {
                nome: nomeRelogio,
                valor: valorHora
            })

            navigation.navigate('Home')
        } catch (error) {
            if (error instanceof AxiosError) {
                alert(error.message)
                return
            }
            alert("Erro não identificado!")
        }

    }

    return (
        <Box h="100%" py="$16" px="$12" alignItems="center" bg="$roxao">
            <Box py="$16" px="$12">
                <Text color="$white" mb="$1">Iniciar relógio</Text>
            </Box>

            <Box h="$16" w="$72" mt="$12">
                <FormControl
                    size="sm"
                >
                    <FormControlLabel mb="$1" >
                        <FormControlLabelText color="$white">Descrição</FormControlLabelText>
                    </FormControlLabel>
                    <Input>
                        <InputField
                            value={nomeRelogio}
                            onChangeText={setNomeRelogio}
                            type="text" color="$blueGray300" placeholder="Descrição" />
                    </Input>
                </FormControl>
            </Box>

            <Box h="$16" w="$72" mt="$12">
                <FormControl
                    size="sm"
                >
                    <FormControlLabel mb="$1" >
                        <FormControlLabelText color="$white">Valor hora</FormControlLabelText>
                    </FormControlLabel>
                    <Input>
                        <InputField
                            value={valorHora}
                            onChangeText={setValorHora}
                            type="text" color="$blueGray300" placeholder="Valor da hora de serviço" />
                    </Input>
                </FormControl>
            </Box>

            <Box mt="$12" w="100%" flexDirection="row" justifyContent="center" alignItems="center">
                <Button onPress={onClickIniciar} size="md" variant="solid" bg="$rosinha">
                    <ButtonText>Iniciar relógio</ButtonText>
                </Button>
            </Box>
        </Box>

    )
}