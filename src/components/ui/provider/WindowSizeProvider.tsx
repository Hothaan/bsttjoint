import { createContext, useContext, ReactNode } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

const WindowSizeContext = createContext<{
  width: number;
  height: number;
} | null>(null);

export function WindowSizeProvider({ children }: { children: ReactNode }) {
  const windowSize = useWindowSize();
  return (
    <WindowSizeContext.Provider value={windowSize}>
      {children}
    </WindowSizeContext.Provider>
  );
}

export function useWindowSizeContext() {
  const context = useContext(WindowSizeContext);
  if (!context) {
    throw new Error(
      "useWindowSizeContext must be used within a WindowSizeProvider"
    );
  }
  return context;
}
