import React from 'react';
import { View, Button, Text } from 'react-native';
import { Icon, Container, Header, Content, Left } from 'native-base';

class Home extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default Home;