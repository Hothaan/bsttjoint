import { useState, useEffect } from "react";

export function useWindowSize() {
  // 초기 상태를 null로 설정하여 Hydration Mismatch 방지
  const [windowSize, setWindowSize] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });

  useEffect(() => {
    // 클라이언트에서만 실행되도록 설정
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // 초기 설정

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
