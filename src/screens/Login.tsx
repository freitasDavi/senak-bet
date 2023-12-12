import {
    Box, Button, Text, VStack, ButtonText, Pressable, FormControl, FormControlLabel, FormControlLabelText, Input, InputField,
    FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorText,
} from "@gluestack-ui/themed";
import { Image } from "react-native";

export function Login({ navigation }) {
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
                        <FormControlLabelText color="$white">Email</FormControlLabelText>
                    </FormControlLabel>
                    <Input>
                        <InputField type="text" color="$blueGray300" defaultValue="12345" placeholder="email@mail.com" />
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
                        <InputField color="$blueGray300" placeholder="Digite sua senha" type="password" />
                    </Input>
                </FormControl>
            </Box>

            <Box mt="$12" w="100%" flexDirection="row" justifyContent="space-between" alignItems="flex-end">
                <Pressable onPress={() => navigation.navigate("Cadastro")}>
                    <Text color="$white">Cadastre-se</Text>
                </Pressable>
                <Button size="md" variant="solid" bg="$rosinha">
                    <ButtonText>Login</ButtonText>
                </Button>
            </Box>


        </VStack>
    )
}