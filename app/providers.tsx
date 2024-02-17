"use client";

import { NextUIProvider } from "@nextui-org/react";
import { AuthContextProvider } from "./AuthContext";
import { store } from "./store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </AuthContextProvider>
    </Provider>
  );
}
