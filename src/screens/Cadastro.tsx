import { Box, VStack, ButtonText, Button, Text, Pressable, FormControl, FormControlLabel, FormControlLabelText, Input, InputField } from "@gluestack-ui/themed";
import { useState } from "react";
import { api } from "../utils/api/base";
import { AxiosError } from "axios";
import useAuthStore from "../stores/AuthStore";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router";

type Props = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;

export function Cadastro({ navigation }: Props) {
    const [email, setEmail] = useState('');
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setLoginInfo } = useAuthStore(state => state);

    const onClickRegister = async () => {
        if (email === '' || userName === '' || password === '') {
            alert('Preencha todos os campos!');
            return;
        }

        try {
            const response = await api.post('/auth/register', {
                username: userName,
                email,
                password,
                role: ['user']
            });

            setLoginInfo(
                response.data.token,
                response.data.refreshToken,
                {
                    email: response.data.email,
                    name: response.data.username,
                }
            );

            navigation.navigate("Home");

        } catch (err) {
            if (err instanceof AxiosError) {
                alert(err.message);
                return;
            }

            alert("Opa, algo deu errado!, tente novamente mais tarde");
        }
    }

    return (
        <VStack h="100%" py="$16" px="$12" alignItems="center" space="md" bg="$roxao">
            <Box h="$16" w="$72" mt="$12">
                <FormControl
                    size="sm"
                >
                    <FormControlLabel mb="$1">
                        <FormControlLabelText color="$white">Username</FormControlLabelText>
                    </FormControlLabel>
                    <Input>
                        <InputField
                            value={userName}
                            onChangeText={setUsername}
                            type="text" color="$blueGray300" placeholder="tkn" />
                    </Input>
                </FormControl>
            </Box>
            <Box h="$16" w="$72" mt="$4">
                <FormControl
                    size="sm"
                >
                    <FormControlLabel mb="$1" >
                        <FormControlLabelText
                            color="$white">Email</FormControlLabelText>
                    </FormControlLabel>
                    <Input>
                        <InputField value={email}
                            onChangeText={setEmail} type="text" color="$blueGray300" placeholder="email@mail.com" />
                    </Input>
                </FormControl>
            </Box>
            <Box h="$16" w="$72" mt="$4">
                <FormControl
                    size="sm"
                >
                    <FormControlLabel mb="$1" >
                        <FormControlLabelText color="$white">Password</FormControlLabelText>
                    </FormControlLabel>
                    <Input>
                        <InputField value={password}
                            onChangeText={setPassword} type="password" color="$blueGray300" placeholder="*******" />
                    </Input>
                </FormControl>
            </Box>
            <Box mt="$12" w="100%" flexDirection="row" justifyContent="space-between" alignItems="flex-end">
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text color="$white">Voltar</Text>
                </Pressable>
                <Button onPress={onClickRegister} size="md" variant="solid" bg="$rosinha">
                    <ButtonText>Salvar</ButtonText>
                </Button>
            </Box>
        </VStack>
    )
}