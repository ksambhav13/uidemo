import type { Metadata } from "next";
import { Providers } from "../providers";
import "@radix-ui/themes/styles.css";

export const metadata: Metadata = {
  title: "Demo App",
  description: "Generated for boilerplate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
