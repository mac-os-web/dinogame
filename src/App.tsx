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
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-neutral-900">
      <div
        id={CONTAINER_ID}
        className="h-[150px] w-full max-w-[600px]"
      />
    </div>
  );
}
