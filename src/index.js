import { AppContextProvider } from "./context/AppContext";
import { ChakraProvider } from "@chakra-ui/react";

import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ChakraProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </ChakraProvider>
);
