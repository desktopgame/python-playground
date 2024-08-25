import React, { useEffect, useState, useRef, useCallback } from "react";
import { useStore } from "@/store/useStore";

import Loader from "@/components/loader";

export default function Terminal() {
  const { output, error, setOutput, isPyodideLoading, runCode, pipInstall } =
    useStore();
  const [terminalCode, setTerminalCode] = useState<string>("");
  const outputRef = useRef<HTMLPreElement>(null);

  const scrollToBottom = useCallback(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [output, scrollToBottom]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const code = formData.get("terminalCode") as string;
      if (code.trim()) {
        if (code.includes("pip install")) {
          pipInstall(code);
        } else {
          setOutput(code);
          await runCode(code);
        }
        setTerminalCode("");
      }
    },
    [runCode, setOutput, pipInstall]
  );

  if (isPyodideLoading) {
    return (
      <div className="p-4">
        <Loader text="Downloading Python" />
      </div>
    );
  }

  return (
    <pre
      ref={outputRef}
      className="h-full w-full overflow-x-auto bg-background px-4 py-1"
    >
      <code
        className={`w-full font-mono text-sm ${error ? "text-red-500" : "text-foreground"}`}
      >
        {error || output}
        <br />
        <form className="flex items-center gap-1" onSubmit={handleSubmit}>
          <p>&gt;&gt;</p>
          <input
            value={terminalCode}
            name="terminalCode"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTerminalCode(e.target.value)
            }
            className="w-full border-none bg-transparent text-foreground outline-none"
            autoComplete="off"
            placeholder="..."
          />
        </form>
      </code>
    </pre>
  );
}
