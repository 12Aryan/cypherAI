import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.scss";
import { Provider } from "react-redux";
import { store } from "./main-store/store.ts";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "./styles/themes/Theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </Provider>
);
