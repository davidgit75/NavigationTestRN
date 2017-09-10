import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Icon, Button } from 'native-base';
import { DrawerNavigator, StackNavigator, TabNavigator, DrawerItems } from 'react-navigation';

import { Home, UserList, UserDetails } from './screens';

const Stack = StackNavigator(
  {
    UserList: {
      screen: UserList,
      navigationOptions: ({ navigation }) =>  {
        return {
          title: 'User List',
          headerLeft: (
            <Button transparent light onPress={() => navigation.navigate('DrawerOpen')}>
              <Icon ios='ios-menu' android="md-menu" style={{fontSize: 24, color: '#000'}}/>
            </Button>
          )
        };
      }
    },
    UserDetails: {
      screen: UserDetails
    },
  }
);

const Tabs = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home'
      }
    },
    UserList: {
      screen: Stack,
      navigationOptions: {
        tabBarLabel: 'UserList'
      }
    }
  }
);

const ItemsDrawer = props => (
  <ScrollView>
    <View style={styles.headerDrawerStyle}>
      <Image
        source={require('./menu.jpeg')}
        style={styles.imageDrawer}
      />
    </View>
    <DrawerItems {...props} style={{ marginTop: -10 }} />
  </ScrollView>
);

const Drawer = DrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: <Icon name='home' style={{ fontSize: 24 }} />
      }
    },
    UserList: {
      screen: Stack,
      navigationOptions: {
        drawerLabel: 'UserList',
        drawerIcon: <Icon name='list' style={{ fontSize: 24 }} />
      }
    }
  },
  {
    contentComponent: props => <ItemsDrawer {...props} /> 
  }
);

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Stack />
      </View>
    );
  }
}

const styles = {
  headerDrawerStyle: {
    flex: 1,
  },
  imageDrawer: {
    width: 320,
    height: 160,
    resizeMode: 'cover'
  }
};

export default Drawer;
