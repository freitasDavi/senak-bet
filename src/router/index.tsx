import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Bolao } from "../screens/Bolao";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Cadastro } from "../screens/Cadastro";
import useAuthStore from "../stores/AuthStore";

export type RootStackParamList = {
    Login: undefined;
    Cadastro: undefined;
    Home: undefined;
    NovoRelogio: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
    const { token } = useAuthStore(state => state);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={token ? "Home" : "Login"}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="NovoRelogio" component={Bolao} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}