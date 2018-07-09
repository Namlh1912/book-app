import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import {Text} from 'react-native';
import { Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

import { Root } from 'native-base';
import Home from '../screens/Home';
import BookDetail from '../screens/BookDetail';
import Page1 from '../screens/Page1';

const Stack = createStackNavigator(
  {
    Home: Home,
    Details: BookDetail,
  },
  {
    navigationOptions:({navigation})=> ({
      title: 'Welcome to Book Store',
      headerLeft: <Text onPress={() => navigation.openDrawer()}>Menu</Text>
    }),
    initialRouteName: 'Home',
  }
);

const App = createDrawerNavigator (
  {
    Stack: Stack
  },
  {
    contentComponent: Page1,
    drawerWidth: 300,
  }
)


export default () => (
  <Root>
    <App />
  </Root>
);
