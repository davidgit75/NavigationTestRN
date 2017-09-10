import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, Button } from 'native-base';

class UserDetails extends Component {
  static navigationOptions = props => ({
    title: `${props.navigation.state.params.user.username}'s Profile`
  })

  render() {
    const { user } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>User Details</Text>
        <Text>{JSON.stringify(user)}</Text>
      </View>
    );
  }
}

export { UserDetails };
