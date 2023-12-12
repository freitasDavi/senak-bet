import { Box, Pressable, Text } from "@gluestack-ui/themed";

export function Home({ navigation }) {
    return (
        <Box width="100%" height="100%" justifyContent="center" alignItems="center" backgroundColor="$roxao">
            <Pressable bg="$rosinha" onPress={() => navigation.navigate('Login')}>
                <Text px="$5" py="$2" color="$white">
                    Login
                </Text>
            </Pressable>

        </Box>
    )
}