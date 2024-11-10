type Theme = "light" | "dark";

interface ITabs {
  title: string;
  body?: React.ReactElement;
}

interface IItems {
  id: number;
  src: string;
  code: string;
}

interface ITabBody {
  src: string;
  name: string;
  href: string;
  btnName: string;
  items: Array<IItems>;
}

interface IIcons {
  id: number;
  icon?: React.ReactElement;
}