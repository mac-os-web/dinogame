// Chromium 내부 리소스 대체 shim (ES module alias로 매핑)
// ./dino/ 폴더의 ts 파일들이 chrome://resources/js/*.js를 import하는데,
// 브라우저에선 존재하지 않으므로 vite alias로 이 파일을 대체.

// Chromium이 window에 주입하는 전역 필드 타입 확장 (no-op stub)
declare global {
  interface Window {
    initializeEasterEggHighScore?: (highScore: number) => void;
    errorPageController?: {
      trackEasterEgg: () => void;
      updateEasterEggHighScore: (score: number) => void;
      resetEasterEggHighScore: () => void;
      trackClick: (eventType: number) => void;
    };
  }
}

export function assert<T>(condition: T, message?: string): asserts condition {
  if (!condition) {
    throw new Error(message ?? "Assertion failed");
  }
}

// loadTimeData: Chromium이 페이지에 주입하는 설정 저장소.
// 웹에선 쓸 수 없으니 기본값 돌려주는 stub.
export const loadTimeData = {
  valueExists(_key: string): boolean {
    return false;
  },
  getValue(_key: string): string {
    return "";
  },
  getBoolean(_key: string): boolean {
    return false;
  },
  getString(_key: string): string {
    return "";
  },
};
