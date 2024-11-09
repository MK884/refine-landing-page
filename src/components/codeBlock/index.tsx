import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeBlock({ children }: { children: string | string[] }) {
  return (
    <SyntaxHighlighter
      language={"typescript"}
      style={a11yDark}
      customStyle={{
        padding: "10px",
        transformOrigin: "top left",
        borderRadius: "1rem",
        background: "transparent",
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
