import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";

import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { Theme } from "./app/components";
import useLoadAssets from "./app/hooks/useLoadAssets";
import { AppNavigator, AuthNavigator, navigationTheme } from "./app/navigation";
import { OfflineNotice } from "./app/screens";

const App = () => {
  const { assetsLoaded, setAssetsLoaded, loadAssetsAsync } = useLoadAssets();
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;

    setUser(jwtDecode(token));
  };

  useEffect(() => {
    restoreToken();
  }, []);

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
