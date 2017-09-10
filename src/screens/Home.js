import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, Button, Container, Content, Header, Left, Body, Right } from 'native-base';

class Home extends Component {
  static navigationOptions = {
    title: 'Home Screen'
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent light onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon ios='ios-menu' android="md-menu" style={{fontSize: 24, color: '#000'}}/>
            </Button>
          </Left>

          <Body>
            <Text>Home</Text>
          </Body>

          <Right></Right>
        </Header>

        <Content>
          <Text>Home</Text>
        </Content>
      </Container>
    );
  }
}

export { Home };
