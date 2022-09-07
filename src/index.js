import { ChakraProvider } from "@chakra-ui/react";

import { createRoot } from "react-dom/client";

import App from "./App";
import Layout from "./components/Layout";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ChakraProvider>
    <Layout>
      <App />
    </Layout>
  </ChakraProvider>
);
