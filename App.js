import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import React, { useEffect, useState } from "react";

import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { Theme } from "./app/components";
import useLoadAssets from "./app/hooks/useLoadAssets";
import {
  AppNavigator,
  AuthNavigator,
  navigationRef,
  navigationTheme,
} from "./app/navigation";
import { OfflineNotice } from "./app/screens";

const App = () => {
  const { assetsLoaded, setAssetsLoaded, loadAssetsAsync } = useLoadAssets();
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    restoreUser();
  }, [isReady]);

  if (!assetsLoaded || !isReady) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => {
          setAssetsLoaded(true);
          setIsReady(true);
        }}
        onError={console.warn}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Theme>
        <OfflineNotice />
        <NavigationContainer ref={navigationRef} theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </Theme>
    </AuthContext.Provider>
  );
};

export default App;
