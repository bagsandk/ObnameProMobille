import { NavigationContainer } from '@react-navigation/native';
import {
    CardStyleInterpolators,
    createStackNavigator,
    TransitionPresets
} from '@react-navigation/stack';
import React from 'react';
import { Home, Scan, Splash } from '../screen';

const Stack = createStackNavigator();
const Router = () => {
  const [isloading, setloading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  if (isloading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
