import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://920e2e3cf42c.ngrok.io/api",
  },
  staging: {
    apiUrl: "http://920e2e3cf42c.ngrok.io/api",
  },
  prod: {
    apiUrl: "http://920e2e3cf42c.ngrok.io/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
