import { useCallback } from "react";
import { useStore } from "@/store/useStore";

// import MonacoEditor, { type OnMount } from "@monaco-editor/react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode"
import { pythonLanguage } from "@codemirror/lang-python"
// import Loader from "@/components/loader";

export default function Editor() {
  const { code, setCode } = useStore();

  const handleCodeOnChange = useCallback(
    (value: string | undefined) => {
      if (value) {
        setCode(value);
      }
    },
    [setCode]
  );

  return (
    <div className="h-full w-full overflow-hidden rounded-lg shadow-lg">
      <ReactCodeMirror
        value={code}
        onChange={handleCodeOnChange}
        theme={vscodeDark}
        extensions={[pythonLanguage]}
        height="100%"
        className="h-full w-full"
        autoFocus={true}
      />
    </div>
  );
}
