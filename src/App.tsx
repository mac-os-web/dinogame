import { useEffect } from "react";
import { Runner } from "./dino/offline";
import "./dino/runner.css";

const CONTAINER_ID = "dino-container";

function ensureDom() {
  if (!document.getElementById("offline-resources")) {
    const resDiv = document.createElement("div");
    resDiv.id = "offline-resources";
    resDiv.style.display = "none";

    const img1x = document.createElement("img");
    img1x.id = "offline-resources-1x";
    img1x.src = "/100-offline-sprite.png";
    resDiv.appendChild(img1x);

    const img2x = document.createElement("img");
    img2x.id = "offline-resources-2x";
    img2x.src = "/200-offline-sprite.png";
    resDiv.appendChild(img2x);

    document.body.appendChild(resDiv);
  }

  if (!document.querySelector(".icon-offline")) {
    const icon = document.createElement("div");
    icon.className = "icon icon-offline";
    icon.style.display = "none";
    document.body.appendChild(icon);
  }
}

export default function App() {
  useEffect(() => {
    ensureDom();
    try {
      Runner.getInstance();
    } catch {
      Runner.initializeInstance(`#${CONTAINER_ID}`);
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white p-6 dark:bg-neutral-900">
      <header className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
          🦖 T-Rex Playground
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Space / ↑ : jump &nbsp;·&nbsp; ↓ : duck &nbsp;·&nbsp; Enter : restart
        </p>
      </header>

      <div
        id={CONTAINER_ID}
        className="relative overflow-hidden rounded-lg border border-neutral-300 shadow-lg dark:border-neutral-600"
        style={{ width: 600, height: 150 }}
      />

      <footer className="text-xs text-neutral-400">
        Chromium <code>offline.ts</code> 원본 TypeScript 소스 기반
      </footer>
    </div>
  );
}
