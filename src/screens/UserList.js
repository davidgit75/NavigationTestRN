import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Container, Content, List, ListItem, Left, Body, Right, Card, Icon, Button } from 'native-base';
import users from '../users.json';

class UserList extends Component {
  state = {
    message: 'Test'
  };

  renderUsers() {
    const OS = Platform.OS;
    if (users.length <= 0) {
      <Card>
        <Text>No users</Text>
      </Card>
    }
    return (
      <List>
        {users.map((user, index) => (
          <ListItem key={index} icon>
            <Left>
              <Icon name='person' />
            </Left>
            <Body><Text>{user.username}</Text></Body>
            <Right>
              <Button transparent light onPress={() => this.props.navigation.navigate('UserDetails', { user })}>
                <Icon ios='ios-arrow-dropright' android='md-arrow-dropright' style={{ color: '#000' }} />
              </Button>
            </Right>
          </ListItem>
        ))}
      </List>
    );
  }

  render() {
    return (
      <Container>
        <Content style={styles.content}>
          {this.renderUsers()}
        </Content>
      </Container>
    );
  }
}

const styles = {
  avatar: {
    width: 40,
    height: 40,
    padding: 10,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  content: {
    marginTop: 10
  }
};

export { UserList };
