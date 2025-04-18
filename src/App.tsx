import { useEffect } from "react";
import { useStore } from "@/store/useStore";

// import { getDecodedParam } from "@/lib/url";

import Editor from "@/components/editor/editor";
import ButtonsNav from "@/components/nav-buttons";
import Stats from "@/components/editor/stats";
import Terminal from "@/components/editor/terminal";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "@/components/ui/resizable";

export default function App() {
  const {
    direction,
    setCode,
    initializePyodide,
    finishAppLoad,
    pipInstall,
    isPyodideLoading,
    isAppLoading
  } = useStore();

  // Initialize Pyodide and ( set the code from URL params if present )
  useEffect(() => {
    const extractPipPackages = (code: string): string[] => {
      // eslint-disable-next-line
      const matches = [...code.matchAll(/^#\s*@pip\s+([\w\-]+)/gm)];
      return matches.map((m) => m[1]);
    };
    const initializeApp = async () => {
      await initializePyodide();

      try {
        const urlParams = new URLSearchParams(window.location.search);
        const gistId = urlParams.get("gist");
        const file = urlParams.get("file");
        if (gistId) {
          const url = `https://api.github.com/gists/${gistId}`;
          if (file) {
            const key = gistId + file;
            const cache = localStorage.getItem(key);
            if (cache !== null) {
              setCode(cache);
              for (const pipPackage of extractPipPackages(cache)) {
                await pipInstall(pipPackage);
              }
            } else {
              const res = await fetch(url);
              const gist = await res.json();
              const files = Object.values(gist.files) as any[];
              for (const fileItem of files) {
                if (fileItem.filename === file) {
                  setCode(fileItem.content);
                  for (const pipPackage of extractPipPackages(
                    fileItem.content
                  )) {
                    await pipInstall(pipPackage);
                  }
                  localStorage.setItem(key, fileItem.content);
                  break;
                }
              }
            }
          }
        }
      } finally {
        finishAppLoad();
      }
    };

    initializeApp();
  }, [initializePyodide, setCode]);

  if (isPyodideLoading || isAppLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="flex h-screen flex-col bg-background md:mx-2 md:pb-3">
      <ButtonsNav />
      <ResizablePanelGroup
        className="border-t border-accent md:rounded-lg md:border"
        direction={direction}
      >
        <ResizablePanel defaultSize={65}>
          <Editor />
        </ResizablePanel>
        <ResizableHandle className="border-[1px]" withHandle />
        <ResizablePanel defaultSize={35}>
          <Terminal />
        </ResizablePanel>
      </ResizablePanelGroup>
      <Stats />
    </main>
  );
}

function LoadingScreen() {
  return (
    <section className="absolute z-[999] flex h-screen w-full flex-col items-center justify-center gap-3 bg-background text-foreground">
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
        <img
          src="./images/logo.webp"
          alt="logo"
          className="h-52 w-52 animate-pulse"
        />
        <p className="sm:text-1xl mt-2 animate-pulse whitespace-pre-wrap text-center text-xl font-semibold tracking-tighter text-white">
          Loading...
        </p>
      </div>
    </section>
  );
}
