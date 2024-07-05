"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ParallaxProvider>{children}</ParallaxProvider>;
    </NextUIProvider>
  );
}
