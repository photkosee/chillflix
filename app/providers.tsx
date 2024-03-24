"use client";

import { NextUIProvider } from "@nextui-org/react";
import { AuthContextProvider } from "./AuthContext";
import { Provider } from "react-redux";
import store from "./store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </AuthContextProvider>
    </Provider>
  );
}
