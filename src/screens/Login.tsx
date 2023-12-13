import {
    Box, Button, Text, VStack, ButtonText, Pressable, FormControl, FormControlLabel, FormControlLabelText, Input, InputField,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { Image } from "react-native";
import { api } from "../utils/api/base";
import { AxiosError } from "axios";
import useAuthStore from "../stores/AuthStore";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router";

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function Login({ navigation }: Props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setLoginInfo } = useAuthStore(state => state);

    const onClickLogin = async () => {
        if (username === '' || password === '') {
            alert('Preencha todos os campos!');
            return;
        }

        try {
            const response = await api.post('/auth/signin', {
                username,
                password,
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
            <Image
                source={require('../../assets/logo.png')}
                style={{
                    width: 200,
                    height: 200,
                    objectFit: 'contain',

                }}
            />

            <Box h="$16" w="$72" mt="$12">
                <FormControl
                    size="sm"
                >
                    <FormControlLabel mb="$1" >
                        <FormControlLabelText color="$white">Username</FormControlLabelText>
                    </FormControlLabel>
                    <Input>
                        <InputField
                            value={username}
                            onChangeText={setUsername}
                            type="text" color="$blueGray300" placeholder="Digite seu usuário" />
                    </Input>
                </FormControl>
            </Box>

            <Box h="$16" w="$72">
                <FormControl
                    size="md"
                >
                    <FormControlLabel mb="$1">
                        <FormControlLabelText color="$white">
                            Senha
                        </FormControlLabelText>
                    </FormControlLabel>
                    <Input w="100%">
                        <InputField
                            value={password}
                            onChangeText={setPassword}
                            color="$blueGray300" placeholder="Digite sua senha" type="password" />
                    </Input>
                </FormControl>
            </Box>

            <Box mt="$12" w="100%" flexDirection="row" justifyContent="space-between" alignItems="flex-end">
                <Pressable onPress={() => navigation.navigate("Cadastro")}>
                    <Text color="$white">Cadastre-se</Text>
                </Pressable>
                <Button onPress={onClickLogin} size="md" variant="solid" bg="$rosinha">
                    <ButtonText>Login</ButtonText>
                </Button>
            </Box>


        </VStack>
    )
}