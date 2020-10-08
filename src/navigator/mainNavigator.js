import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2133377Navigator from '../features/BlankScreen2133377/navigator';
import BlankScreen1133376Navigator from '../features/BlankScreen1133376/navigator';
import BlankScreen0133375Navigator from '../features/BlankScreen0133375/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2133377: { screen: BlankScreen2133377Navigator },
BlankScreen1133376: { screen: BlankScreen1133376Navigator },
BlankScreen0133375: { screen: BlankScreen0133375Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
