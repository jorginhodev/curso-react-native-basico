import { createStackNavigator } from "react-navigation";

import Main from "./pages/main";
import Product from "./pages/product";

export default createStackNavigator(
  {
    Main,
    Product
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#da552f"
      },
      headerTitleStyle: {
        textAlign: "center",
        alignSelf: "center",
        flex: 1
      },
      headerTintColor: "#fff"
    }
  }
);
