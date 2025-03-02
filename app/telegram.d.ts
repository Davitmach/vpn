// telegram.d.ts
declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready: () => void;
        MainButton: {
          setText: (text: string) => void;
        };
      };
    };
  }
}

export {}; // Для корректного определения глобального пространства имен
