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
    const totalSickLeave = data?.total;
    `,
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
