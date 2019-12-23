import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignIn from './pages/SignIn';
import Dashboard from '~/pages/Dashboard';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: SignIn,
        App: Dashboard,
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
