import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "theme";

export default function Providers(props) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <BrowserRouter {...props} />
    </ChakraProvider>
  );
}
