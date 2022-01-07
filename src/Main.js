import React from "react";
import "react-native-gesture-handler";
import {
  Provider as PaperProvider,
  DarkTheme as PaperDark,
  DefaultTheme as PaperDefault,
} from "react-native-paper";
import { useTheme } from "./contexts/ThemeProvider";
import { getLoading } from "./contexts/LoadingProvider";
import Loader from "./components/Loader";
import RootStack from "./navigations/RootStack";

const Main = () => {
  const isDark = useTheme();
  const isLoading = getLoading();

  return (
    <PaperProvider theme={isDark ? PaperDark : PaperDefault}>
      {isLoading ? <Loader /> : <RootStack />}
    </PaperProvider>
  );
};

export default Main;
