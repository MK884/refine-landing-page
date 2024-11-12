import Amazon from "@/assets/amazon.svg?react";
import Atlassion from "@/assets/atlassian.svg?react";
import Autodesk from "@/assets/autodesk.svg?react";
import Cisco from "@/assets/cisco.svg?react";
import Deloitte from "@/assets/deloitte.svg?react";
import Ibm from "@/assets/ibm.svg?react";
import Ably from "@/assets/icons/ably.svg?react";
import Airtable from "@/assets/icons/airtable.svg?react";
import AntDesign from "@/assets/icons/ant_design.svg?react";
import Appwrite from "@/assets/icons/appwrite.svg?react";
import ChakraUI from "@/assets/icons/chakra_ui.svg?react";
import Directus from "@/assets/icons/directus.svg?react";
import Elide from "@/assets/icons/elide.svg?react";
import ElideGraphql from "@/assets/icons/elide_graphql.svg?react";
import Firebase from "@/assets/icons/firebase.svg?react";
import GraphQL from "@/assets/icons/graphql.svg?react";
import Hasura from "@/assets/icons/hasura.svg?react";
import HeadlessUI from "@/assets/icons/headless_ui.svg?react";
import HookForm from "@/assets/icons/hook_form.svg?react";
import HyGraph from "@/assets/icons/hygraph.svg?react";
import JsonAPi from "@/assets/icons/json_api.svg?react";
import Kbar from "@/assets/icons/kbar.svg?react";
import Mantine from "@/assets/icons/mantine.svg?react";
import MaterialUI from "@/assets/icons/material_ui.svg?react";
import Medusa from "@/assets/icons/medusa.svg?react";
import NextJS from "@/assets/icons/nextjs.svg?react";
import NextJSCRUD from "@/assets/icons/nextjs_crud.svg?react";
import NextJSQuery from "@/assets/icons/nextjs_query.svg?react";
import Remix from "@/assets/icons/remix.svg?react";
import Sanity from "@/assets/icons/sanity.svg?react";
import ShadcnUI from "@/assets/icons/shadcn_ui.svg?react";
import SQLite from "@/assets/icons/sql_lite.svg?react";
import Strapi from "@/assets/icons/strapi.svg?react";
import Supabase from "@/assets/icons/supabase.svg?react";
import TailwindCSS from "@/assets/icons/tailwind.svg?react";
import Intel from "@/assets/intel.svg?react";
import Jp from "@/assets/jp-morgan.svg?react";
import Meta from "@/assets/meta.svg?react";
import Oracle from "@/assets/oracle.svg?react";
import Salesforce from "@/assets/salesforce.svg?react";
import Upwork from "@/assets/upwork.svg?react";
import { IconType } from "react-icons";
import { CgMenuLeft, CgShoppingBag } from "react-icons/cg";
import { CiGlobe, CiTrophy } from "react-icons/ci";
import { FaShieldAlt } from "react-icons/fa";
import { FaGlasses } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { GrMagic } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiCalendarDotsBold } from "react-icons/pi";
import { SiGoogleforms, SiRefine } from "react-icons/si";
import {
  TbBrandTelegram,
  TbDeviceTv,
  TbPuzzle,
  TbTableFilled,
} from "react-icons/tb";
import { TfiComments } from "react-icons/tfi";
import { TiChartBar } from "react-icons/ti";

export interface INav {
  title: string;
  subItems?: Array<ISubNav>;
}

export interface ISubNav {
  link?: string;
  title: string;
  caption?: string;
  icon: IMenuIcon;
}

interface IButtons {
  name: string;
  Icon: IconType;
  activeColor: string;
  content: React.ReactElement;
  lightSrc: string;
  darkSrc: string;
  lightCode: string;
  darkCode: string;
}

interface IMenuIcon {
  color: "blue" | "green" | "cyan" | "yellow" | "pink" | "indigo";
  Icon: IconType;
}

export const npm_command = "npm create refine-app@latest";

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
          Icon: TbDeviceTv,
          color: "green",
        },
        title: "Tutorial",
        caption: "Create your first refine application.",
        link: "https://refine.dev/tutorial/essentials/intro/",
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
          Icon: TbPuzzle,
          color: "pink",
        },
        title: "Integration",
        caption: "Discover the refone ecosystem.",
        link: "https://refine.dev/integrations/",
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

export const img = [
  {
    src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/base-render.png",
  },
  {
    src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/finefoods/base_render-2.png",
  },
  {
    src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/hr2/base_render.png",
  },
  {
    src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/devops/base_render.png",
  },
];

export const tabsData: Array<ITabBody> = [
  {
    src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/base-render.png",
    name: "crm application",
    btnName: "See live demo",
    href: "https://example.crm.refine.dev/",
    items: [
      {
        id: 1,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/sidebar_navigation.png",
        code: `import { useMenu } from "@refinedev/core";
    import { Link } from "react-router-dom";
    
    const { menuItems } = useMenu();
    
    return menuItems.map((item) => (
        <Link to={item.route}>
            {item.icon}
            {item.label}
        </Link>
    ));`,
      },
      {
        id: 2,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/number_of_companies.png",
        code: `import { useList } from "@refinedev/core";
    
              const { data: { total } } = useList({
                  resource: "companies"
              });`,
      },
      {
        id: 3,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/upcoming_events.png",
        code: `import { useList } from "@refinedev/core";
    
    const { data } = useList({
        resource: "events",
        sorters: [
            { field: "start_date", order: "asc" },
        ],
    });`,
      },
      {
        id: 4,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/search_bar.png",
        code: `import { RefineKbar } from "@refinedev/kbar";
    
    <RefineKbar />`,
      },
      {
        id: 5,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/latest_activities.png",
        code: `import { useTable } from "@refinedev/core";
    
    const { data } = useTable({
        resource: "activities",
        pagination: {
            current: 1,
            pageSize: 5,
        },
    });`,
      },
      {
        id: 6,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/user_avatar.png",
        code: `import { useGetIdentity } from "@refinedev/core";
    
    const { data: identity } = useGetIdentity();`,
      },
    ],
  },
  {
    src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/finefoods/base_render-2.png",
    name: "e-commerce application",
    btnName: "See live demo",
    href: "https://example.crm.refine.dev/",
    items: [
      {
        id: 7,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/finefoods/menu-2.png",
        code: `import { Refine } from "@refinedev/core";
    
    <Refine
        resources={[
            {
                name: "stores",
                meta: { ... },
            }
            {
                name: "products",
                meta: { parent: "stores" },
            },
            {
                name: "categories",
                meta: { parent: "stores" },
            }
        ]}
    >
        ...
    </Refine>`,
      },
      {
        id: 8,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/finefoods/map-2.png",
        code: `iimport { useShow } from "@refinedev/core";
    
    const { data } = useShow({
        liveMode: "auto"
    });
    
    return <Map {...data} />;`,
      },
      {
        id: 9,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/finefoods/language-2.png",
        code: `import { useSetLocale, useGetLocale } from "@refinedev/core";
    
    const currentLanguage = useGetLocale();
    const setLanguage = useSetLocale();
    
    const onChange = (language: string) => {
        setLanguage(language);
    };`,
      },
      {
        id: 10,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/finefoods/actions-2.png",
        code: `import { useResource, useUpdate } from "@refinedev/core";
    
    const { id }  = useResource();
    const { mutate } = useUpdate();
    
    const onReject = () => mutate({
        resource: “orders”,
        id,
        values: {
            status: “rejected”,
        },
    });`,
      },
    ],
  },
  {
    src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/hr2/base_render.png",
    name: "hr application",
    btnName: "Templates",
    href: "https://refine.dev/templates/",
    items: [
      {
        id: 11,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/hr2/menu.png",
        code: `import { useMenu, Link, CanAccess } from "@refinedev/core";
    import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
    
    const Sider = () => {
      const { menuItems, selectedKey } = useMenu();
      return (
          <List>
            {menuItems.map((item) => (
              <CanAccess key={item.key} action="list" resource={item.name}>
                <ListItem>
                  <ListItemButton component={Link} selected={selectedKey === item.key} to={item.route}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.label}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </CanAccess>
            ))}
          </List>
      );
    };`,
      },
      {
        id: 12,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/hr2/notifications.png",
        code: `import { useList } from "@refinedev/core";
    
    const { data } = useList({
        resource: "notifications",
        liveMode: "auto",
        filters: [
            {
                field: "isRead",
                operator: "eq",
                value: false
            },
        ]
    });`,
      },
      {
        id: 13,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/hr2/sick-leave.png",
        code: `import { useGetIdentity, useList } from "@refinedev/core";
    
    const { data: { employeeId } } = useGetIdentity();
    
    const { data } = useList({
      resource: "time-offs", 
      pagination: { current: 1, pageSize: 1 },
      filters: [
        {
          field: "employeeId",
          operator: "eq",
          value: employeeId,
        },
        {
          field: "status",
          operator: "eq",
          value: "approved",
        },
        {
          field: "type",
          operator: "eq",
          value: "sick-leave",
        },
      ],
    });
    const totalSickLeave = data?.total;`,
      },
      {
        id: 14,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/hr2/poll.png",
        code: `import { useList } from "@refinedev/core";
    
    const { data } = useList({
      resource: "polls",
      filters: [{ field: "status", operator: "eq", value: "active" }],
      pagination: { current: 1, pageSize: 1 },
      liveMode: "auto",
    });`,
      },
      {
        id: 15,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/hr2/request-time-off.png",
        code: `import { CreateButton } from "@refinedev/mui";
    import { TimeOffIcon } from "@/icons";
    
    <CreateButton resource="time-offs" startIcon={<TimeOffIcon />}>
      Request Time Off
    </CreateButton>`,
      },
    ],
  },
  {
    src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/devops/base_render.png",
    name: "Devops application",
    btnName: "Templates",
    href: "https://refine.dev/templates/",
    items: [
      {
        id: 16,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/devops/table.png",
        code: `import { useTable } from "@refinedev/react-table";
    
    const columns = [
        {
            id: "name",
            header: "Name",
            accessorKey: "name",
        },
        {
            id: "cpu",
            header: "CPU(cores)",
            accessorKey: "cpu",
        },
        // ...
    ];
    
    const table = useTable({
        columns,
        refineCoreProps: {
            liveMode: "auto",
        }
    });`,
      },
      {
        id: 17,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/devops/actions.png",
        code: `import { useDelete, useResource } from "@refinedev/core";
    
    const { id } = useResource();
    const { mutate } = useDelete();
    
    const onDelete = () => {
        mutate({
            resource: "pods",
            id,
        });
    }`,
      },
      {
        id: 18,
        src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/devops/form.png",
        code: `import { useModalForm } from "@refinedev/react-hook-form";
    
    useModalForm({
        refineCoreProps: {
            resource: “pods”,
            liveMode: “manual”,
            queryMeta: {
                populate: [
                    "labels",
                    "conditions",
                ],
            },
        }
    });`,
      },
    ],
  },
];

export const companies: Array<IIcons> = [
  {
    id: 1,
    icon: <Amazon />,
  },
  {
    id: 2,
    icon: <Atlassion />,
  },
  {
    id: 3,
    icon: <Autodesk />,
  },
  {
    id: 4,
    icon: <Cisco />,
  },
  {
    id: 5,
    icon: <Deloitte />,
  },
  {
    id: 6,
    icon: <Ibm />,
  },
  {
    id: 7,
    icon: <Intel />,
  },
  {
    id: 8,
    icon: <Jp />,
  },
  {
    id: 9,
    icon: <Meta />,
  },
  {
    id: 10,
    icon: <Oracle />,
  },
  {
    id: 11,
    icon: <Salesforce />,
  },
  {
    id: 12,
    icon: <Upwork />,
  },
];

export const features: Array<IButtons> = [
  {
    activeColor: "red",
    content: <>tables</>,
    Icon: TbTableFilled,
    name: "tables",
    darkSrc:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/datatables-ui-dark.png",
    lightSrc:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/datatables-ui-light.png",
    lightCode:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/datatables-code.png",
    darkCode:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/datatables-code-dark.png",
  },
  {
    activeColor: "orange",
    content: <>lists</>,
    Icon: CgMenuLeft,
    name: "lists",
    darkSrc:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/list-ui-dark.png",
    lightSrc:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/list-ui-light.png",
    lightCode:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/list-code.png",
    darkCode:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/list-code-dark.png",
  },
  {
    activeColor: "yellow",
    content: <>charts</>,
    Icon: TiChartBar,
    name: "charts",
    darkSrc:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/charts-ui-dark.png",
    lightSrc:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/charts-ui-light.png",
    lightCode:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/charts-code.png",
    darkCode:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/charts-code-dark.png",
  },
  {
    activeColor: "cyan",
    content: <>form</>,
    Icon: SiGoogleforms,
    name: "form",
    darkSrc:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/forms-ui-dark.png",
    lightSrc:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/forms-ui-light.png",
    lightCode:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/forms-code.png",
    darkCode:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/forms-code-dark.png",
  },
  {
    activeColor: "blue",
    content: <>wizard</>,
    Icon: GrMagic,
    name: "wizard",
    darkSrc:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/wizards-ui-dark.png",
    lightSrc:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/wizards-ui-light.png",
    lightCode:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/wizards-code.png",
    darkCode:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/wizards-code-dark.png",
  },
  {
    activeColor: "purple",
    content: <>authentication</>,
    Icon: FaShieldAlt,
    name: "authentication",
    darkSrc:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/authentication-ui.png",
    lightSrc:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/authentication-ui-light.png",
    lightCode:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/authentication-code.png",
    darkCode:
      "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/sweet-spot/authentication-code-dark.png",
  },
];

export const UIPackages: Array<IPackage> = [
  {
    Icon: <Firebase />,
    name: "Firebase",
    npmCommand: "npm i refine-firebase",
  },
  {
    Icon: <Ably />,
    name: "Ably",
    npmCommand: "npm i @refinedev/ably",
  },
  {
    Icon: <Airtable />,
    name: "Airtable",
    npmCommand: "npm i @refinedev/airtable",
  },
  {
    Icon: <Appwrite />,
    name: "Appwrite",
    npmCommand: "npm i @refinedev/appwrite",
  },
  {
    Icon: <Directus />,
    name: "Directus",
    npmCommand: "npm i @tspvivek/refine-directus",
  },
  {
    Icon: <Elide />,
    name: "Elide",
    npmCommand: "npm i elide-simple-rest",
  },
  {
    Icon: <ElideGraphql />,
    name: "Elide GraphQL",
    npmCommand: "npm i elide-simple-graphql",
  },
  {
    Icon: <Hasura />,
    name: "Hasura",
    npmCommand: "npm i @refinedev/hasura",
  },
  {
    Icon: <HookForm />,
    name: "Hook Form",
    npmCommand: "npm i @refinedev/react-hook-form",
  },
  {
    Icon: <AntDesign />,
    name: "Ant Design",
    npmCommand: "npm i @refinedev/antd",
  },
  {
    Icon: <MaterialUI />,
    name: "Material UI",
    npmCommand: "npm i @refinedev/mui",
  },
  {
    Icon: <Mantine />,
    name: "Mantine",
    npmCommand: "npm i @refinedev/mantine",
  },
  {
    Icon: <ChakraUI />,
    name: "Chakra UI",
    npmCommand: "npm i @refinedev/chakra-ui",
  },
  {
    Icon: <ShadcnUI />,
    name: "Shadcn/ui",
    npmCommand: "npx shadcn-ui init",
  },
  {
    Icon: <TailwindCSS />,
    name: "Tailwind CSS",
    npmCommand: "npx tailwindcss init",
  },
  {
    Icon: <HeadlessUI />,
    name: "Headless UI",
    npmCommand: "npm i @headlessui/react",
  },
];

export const packages: Array<IPackage> = [
  {
    Icon: <GraphQL />,
    name: "GraphQL",
    npmCommand: "npm i @refinedev/graphql",
  },
  {
    Icon: <Kbar />,
    name: "Kbar",
    npmCommand: "npm i @refinedev/kbar",
  },
  {
    Icon: <Medusa />,
    name: "Medusa",
    npmCommand: "npm i @refinedev/medusa",
  },
  {
    Icon: <NextJSCRUD />,
    name: "NextJS CRUD",
    npmCommand: "npm i @refinedev/nestjsx-crud",
  },
  {
    Icon: <NextJSQuery />,
    name: "NextJS-query",
    npmCommand: "npm i @refinedev/nestjs-query",
  },
  {
    Icon: <NextJS />,
    name: "NextJS",
    npmCommand: "npm i @refinedev/nextjs-router",
  },
  {
    Icon: <Remix />,
    name: "Remix",
    npmCommand: "npm i @refinedev/remix-router",
  },
  {
    Icon: <Strapi />,
    name: "Strapi",
    npmCommand: "npm i @refinedev/strapi-v4",
  },
  {
    Icon: <Supabase />,
    name: "Supabase",
    npmCommand: "npm i @refinedev/supabase",
  },
  {
    Icon: <HyGraph />,
    name: "Hygraph",
    npmCommand: "npm i @acomagu/refine-hygraph",
  },
  {
    Icon: <Sanity />,
    name: "Sanity",
    npmCommand: "npm i refine-sanity",
  },
  {
    Icon: <SQLite />,
    name: "SQLite",
    npmCommand: "npm i refine-sqlite",
  },
  {
    Icon: <JsonAPi />,
    name: "JSON:API",
    npmCommand: "npm i refine-jsonapi",
  },
];
