import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Cadastro } from "../screens/Cadastro";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useAuthStore from "../stores/AuthStore";
import { Bolinha } from "../screens/Bolinha";

import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


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
                <Stack.Screen name="Home" component={TabTOP} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}

function TabTOP() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName = "";

                switch (route.name) {
                    case "Home":
                        iconName = focused ? "home" : "home-outline";
                        break;
                    case "Bolao":
                        iconName = focused ? "basket" : "basket-outline";
                        break;
                    case "Apostas":
                        iconName = focused ? "ios-football" : "ios-football-outline";
                        break;
                }

                return <Ionicons name={iconName ? iconName : 'home'} size={size} color={color} />
            },
            headerShown: false
        })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Bolao" component={Bolinha} />
            <Tab.Screen name="Apostas" component={Bolinha} />
        </Tab.Navigator>
    )
}