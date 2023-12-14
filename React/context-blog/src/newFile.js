import React from "react";
import App from "./App";
import { root } from ".";

root.render(
  // eslint-disable-next-line react/jsx-no-undef
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
