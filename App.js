import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./src/containers/home";
import Details from "./src/containers/details";

const Stack = createNativeStackNavigator();

function App(){
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'Home' }}
          />
          <Stack.Screen 
              options={({ route }) => ({ title: route.params.name })}
              component={Details}  name={'Details'}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;