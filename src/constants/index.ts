import { IconType } from "react-icons";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaGlasses } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { TbDeviceTv } from "react-icons/tb";
import { TbPuzzle } from "react-icons/tb";
import { FiEdit3 } from "react-icons/fi";
import { TfiComments } from "react-icons/tfi";
import { PiCalendarDotsBold } from "react-icons/pi";
import { CiTrophy } from "react-icons/ci";
import { SiRefine } from "react-icons/si";
import { CgShoppingBag } from "react-icons/cg";
import { TbBrandTelegram } from "react-icons/tb";

interface INav {
  title: string;
  subItems?: Array<ISubNav>;
}

export interface ISubNav {
  link?: string;
  title: string;
  caption?: string;
  icon: IMenuIcon;
}

interface IMenuIcon {
  color: "blue" | "green" | "cyan" | "yellow" | "pink" | "indigo";
  Icon: IconType;
}

export const nav: Array<INav> = [
  {
    title: "Open-source",
    subItems: [
      {
        icon: {
          Icon: IoDocumentTextOutline,
          color: "blue",
        },
        title: "Documentation",
        caption: "Everything you need to get started.",
        link: "https://refine.dev/docs/",
      },
      {
        icon: {
          Icon: FaGlasses,
          color: "cyan",
        },
        title: "Awesome Refine",
        caption: "Repository of awesome things.",
        link: "https://github.com/refinedev/awesome-refine",
      },
      {
        icon: {
          Icon: CiGlobe,
          color: "indigo",
        },
        title: "Templates",
        caption: "Ready-made examples for your project.",
        link: "https://refine.dev/templates/",
      },
      {
        icon: {
          Icon: TbDeviceTv,
          color: "green",
        },
        title: "Tutorial",
        caption: "Create your first refine application.",
        link: "https://refine.dev/tutorial/essentials/intro/",
      },
      {
        icon: {
          Icon: TbPuzzle,
          color: "pink",
        },
        title: "Integration",
        caption: "Discover the refone ecosystem.",
        link: "https://refine.dev/integrations/",
      },
      {
        icon: {
          Icon: FiEdit3,
          color: "yellow",
        },
        title: "Blog",
        caption: "Articles about web development.",
        link: "https://refine.dev/blog/",
      },
    ],
  },
  {
    title: "Enterprise",
  },
  {
    title: "Community",
    subItems: [
      {
        icon: {
          Icon: TfiComments,
          color: "green",
        },
        title: "Contributing",
        caption: "Join open-source contributors.",
        link: "https://refine.dev/docs/guides-concepts/contributing/",
      },
      {
        icon: {
          Icon: PiCalendarDotsBold,
          color: "indigo",
        },
        title: "Refine Week",
        caption: "Weekly projects to practice refine.",
        link: "https://refine.dev/week-of-refine/",
      },
      {
        icon: {
          Icon: CiTrophy,
          color: "yellow",
        },
        title: "Hackathons",
        caption: "Compete in hackathons and earn prizes!",
        link: "https://github.com/refinedev/refine/blob/master/hackathon/refine-hackathon.md",
      },
    ],
  },
  {
    title: "Company",
    subItems: [
      {
        icon: {
          Icon: SiRefine,
          color: "cyan",
        },
        title: "About Refine",
        caption: "Team & company information.",
        link: "https://refine.dev/about/",
      },
      {
        icon: {
          Icon: CgShoppingBag,
          color: "green",
        },
        title: "Swag Store",
        caption: "T-shirts, caps & more!",
        link: "https://store.refine.dev",
      },
      {
        icon: {
          Icon: TbBrandTelegram,
          color: "pink",
        },
        title: "Meet Refine",
        caption: "Call us for any questions.",
        link: "https://form.typeform.com/to/Z9wS06kE",
      },
    ],
  },
];
