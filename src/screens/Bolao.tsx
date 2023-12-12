import { AddIcon, Box, Button, ButtonIcon, ButtonText, FormControl, FormControlLabel, FormControlLabelText, Input, InputField, LinearGradient, Text } from "@gluestack-ui/themed";
import { useState } from "react";
import { Pressable, TextInput } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export function Bolao({navigate}){

    const [nomeBolao, setNomeBolao] = useState('');

    return(
        <Box h="100%" py="$16" px="$12" alignItems="center" bg="$roxao">
            <Box py="$16" px="$12">
            <Text color="$white" mb="$1">Criar Liga</Text>
            </Box>

            <Box h="$16" w="$72" mt="$12">
                <FormControl
                    size="sm"
                >
                    <FormControlLabel mb="$1" >
                        <FormControlLabelText color="$white">Nome do bolão</FormControlLabelText>
                    </FormControlLabel>
                    <Input>
                        <InputField
                            value={nomeBolao}
                            onChangeText={setNomeBolao}
                            type="text" color="$blueGray300" placeholder="Digite o nome da sua liga" />
                    </Input>
                </FormControl>
            </Box>
                
            <Box mt="$12" w="100%" flexDirection="row" justifyContent="space-between" alignItems="flex-end">
                <Pressable onPress={() => navigation.navigate("Home")}>
                    <Text color="$white">Criar</Text>
                </Pressable>
                <Button onPress={onClickLogin} size="md" variant="solid" bg="$rosinha">
                    <ButtonText>Login</ButtonText>
                </Button>
            </Box>
        </Box>

    )
}