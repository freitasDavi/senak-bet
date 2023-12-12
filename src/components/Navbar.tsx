import { Box, Text, View } from "@gluestack-ui/themed";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export function Navbar() {

    function Home() {
        return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home</Text>
        </View>
        );
    }

    function Bolao() {
        return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home</Text>
        </View>
        );
    }

    const Tab = createBottomTabNavigator();

    return (
        <Box width={'100%'}>
            
        </Box>
    )
}