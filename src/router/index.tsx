import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Bolao } from "../screens/Bolao";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Cadastro } from "../screens/Cadastro";


const Stack = createNativeStackNavigator();


export function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Bolao"
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Bolao" component={Bolao} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}