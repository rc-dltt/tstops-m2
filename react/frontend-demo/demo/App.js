import { React, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { TouchableWithoutFeedback, Keyboard, View} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LoginPage';
import client from './apolloClient';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  console.log(loggedIn, 'login')

  return (
    <ApolloProvider client={client}>
      <PaperProvider>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View> */}
      {loggedIn ? <LandingPage /> : <LoginPage onLogin={handleLogin} />}
      {/* </View>
      </TouchableWithoutFeedback> */}
      </PaperProvider>
    </ApolloProvider>
  );
};

export default App;