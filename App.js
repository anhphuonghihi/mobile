import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawNavigation from "./src/navigations/DrawNavigation";
function App() {
  return (
    <NavigationContainer>
      <DrawNavigation />
    </NavigationContainer>
  );
}

export default App;
