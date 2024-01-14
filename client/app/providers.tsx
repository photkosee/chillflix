"use client";

import { NextUIProvider } from "@nextui-org/react";
import { AuthContextProvider } from "./AuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthContextProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </AuthContextProvider>
  );
}
