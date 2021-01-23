import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";

import AuthContext from "./app/auth/context";
import { Theme } from "./app/components";
import useLoadAssets from "./app/hooks/useLoadAssets";
import { AppNavigator, AuthNavigator, navigationTheme } from "./app/navigation";
import { OfflineNotice } from "./app/screens";

const App = () => {
  const { assetsLoaded, setAssetsLoaded, loadAssetsAsync } = useLoadAssets();
  const [user, setUser] = useState();

  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setAssetsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Theme>
        <OfflineNotice />
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </Theme>
    </AuthContext.Provider>
  );
};

export default App;
