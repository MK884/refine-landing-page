import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface IProps extends SyntaxHighlighterProps {}

function CodeBlock({ children, ...rest }: IProps) {
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
      {...rest}
    >
      {children}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
