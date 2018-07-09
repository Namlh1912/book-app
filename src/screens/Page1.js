import React, { Component } from 'react';
import {ScrollView, Text, View} from 'react-native';

class Page1 extends Component{
  render(){
    return(
      <View >
        <ScrollView>
          <View>
            <Text >
              Section 1
            </Text>
            <View >
              <Text>
                Page1
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Page1;