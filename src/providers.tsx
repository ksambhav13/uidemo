"use client";

import { Theme } from "@radix-ui/themes";

import { AuthProvider } from "./AuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Theme accentColor="teal" scaling="100%">
      <AuthProvider>{children}</AuthProvider>
    </Theme>
  );
}
