import { useState, useEffect } from "react";
import { useStore } from "../store";

declare global {
  interface Window {
    loadPyodide: () => Promise<any>;
  }
}

export const usePyodide = () => {
  const [pyodide, setPyodide] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const { code, setOutput, setError } = useStore();

  const handleRunCode = async () => {
    if (pyodide) {
      try {
        setError(null);
        const printOutput: string[] = [];
        pyodide.globals.set("print", (...args: any[]) => {
          const result = args.join(" ");
          printOutput.push(result);
          setOutput(printOutput.join("\n"));
        });
        await pyodide.runPythonAsync(code);
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    }
  };

  useEffect(() => {
    const load = async () => {
      if (!window.loadPyodide) {
        console.error("Pyodide script not loaded.");
        return;
      }
      const pyodideInstance = await window.loadPyodide();
      setPyodide(pyodideInstance);
      setLoading(false);
    };
    load();
  }, []);

  return { pyodide, loading, handleRunCode };
};
