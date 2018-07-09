import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import {Text} from 'react-native';
import { Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

import { Root } from 'native-base';
import Home from '../screens/Home';
import BookDetail from '../screens/BookDetail';
import SideMenu from '../components/SideMenu';

const Stack = createStackNavigator(
  {
    Home: Home,
    Details: BookDetail,
  },
  {
    // navigationOptions:({navigation})=> ({
    //   // headerLeft: <Text onPress={() => navigation.openDrawer()}>Menu</Text>
    //
    // }),
    headerMode: 'none',
    initialRouteName: 'Home',
  }
);

const App = createDrawerNavigator (
  {
    Stack: Stack
  },
  {
    contentComponent: SideMenu,
  }
)


export default () => (
  <Root>
    <App />
  </Root>
);
