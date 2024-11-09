type Theme = "light" | "dark";

interface ITabs {
  title: string;
  body?: React.ReactElement;
}

interface IItems {
  id: number;
  src: string;
  code: string;
  flexDirection?: React.CSSProperties["flexDirection"];
}