import * as React from "react";
import Providers from "utils/providers";
import Routes from "utils/routes";

export default function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}
