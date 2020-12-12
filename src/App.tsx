import * as React from "react";
import { connect } from "react-redux";
import { Route, Router } from "react-router-dom";

import history from "./history";
import Nav from "./components/Nav";
import Pages from "./routes/Pages";
import { checkAuthentication } from "./actions/current";
import { ICurrent } from "./types";

interface IProps {
    checkAuthenticationConnect: () => void;
    isAuthenticated: boolean | null;
}

const App = ({
                 checkAuthenticationConnect,
                 isAuthenticated
             }: IProps) => {
    React.useEffect(() => {
        checkAuthenticationConnect();
    }, []);

    const app = isAuthenticated !== null ? (
        <Router history={history}>
            <Nav />
            <Route component={Pages} />
        </Router>
    ) : null;

    return (
        <div className="App">
            {app}
        </div>
    );
}

const mapStateToProps = (state: ICurrent) => ({
    isAuthenticated: state.isAuthenticated
});

const mapDispatchToProps = {
    checkAuthenticationConnect: checkAuthentication
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);





/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
*/
