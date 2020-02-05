import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {
  createStackNavigator,
  TransitionPresets,
} from 'react-navigation-stack';

// Stack Navigator screens
import ItemList from './ItemList';
import Item from './Item';

// Tab Navigator screens
import TabA from './TabA';
import TabB from './TabB';
import TabC from './TabC';

// Plain old component
import Plain from './Plain';
import Modal from './Modal';

// Stack Navigator
export const Stack = createStackNavigator(
  {
    ItemList: {
      screen: ItemList,
      navigationOptions: { title: 'Stack' },
    },
    Item: {
      screen: Item,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.title,
      }),
    },
  },
  {
    initialRouteName: 'ItemList',
  }
);

export const PlainStack = createStackNavigator(
  {
    Plain: { screen: Plain },
    Modal: {
      screen: Modal,
      navigationOptions: {
        cardOverlayEnabled: true,
        cardShadowEnabled: true,
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Plain',
    mode: 'modal',
    // headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.ModalPresentationIOS,
      // ...TransitionPresets.ModalSlideFromBottomIOS,
      // cardOverlayEnabled: true,
      // cardShadowEnabled: true,
      cardStyle: { backgroundColor: 'transparent' },
      gestureEnabled: true,
    },
  }
);

// Tab Navigator
export const Tabs = createMaterialTopTabNavigator(
  {
    TabA: { screen: TabA },
    TabB: { screen: TabB },
    TabC: { screen: TabC },
  },
  {
    initialRouteName: 'TabA',
    backBehavior: 'order',
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    order: ['TabA', 'TabB', 'TabC'],
    tabBarOptions: {
      activeTintColor: '#FFF',
      labelStyle: {
        fontSize: 16,
      },
      tabStyle: {
        width: '100%',
        paddingHorizontal: 40,
        paddingBottom: 30,
      },
      indicatorStyle: { backgroundColor: '#FF4A29' },
      upperCaseLabel: false,
      style: {
        backgroundColor: '#FF4A29',
        fontWeight: 'bold',
      },
    },
  }
);

export const Drawer = createDrawerNavigator({
  Stack: { screen: Stack },
  Tabs: { screen: Tabs },
  Plain: { screen: PlainStack },
});

const Root = createAppContainer(Drawer);

export default Root;
