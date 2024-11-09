import React from "react";
import style from "./style.module.scss";
import { CodeBlock, DotWave } from "@/components";
import { FaChevronRight } from "react-icons/fa";

const items: Array<IItems> = [
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
    flexDirection: "column",
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
    flexDirection: "row-reverse",
  },
  {
    id: 6,
    src: "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/user_avatar.png",
    code: `import { useGetIdentity } from "@refinedev/core";

const { data: identity } = useGetIdentity();`,
    flexDirection: "row-reverse",
  },
];

function CRM() {
  const [isHover, setIsHover] = React.useState<boolean>(false);

  return (
    <div className={style.box}>
      <img
        src="https://refine.ams3.cdn.digitaloceanspaces.com/website/static/showcase-images/crm/base-render.png"
        alt="crm application"
        className={style.banner}
      />
      <div
        className={style.blur}
        style={{ display: isHover ? "block" : "none" }}
      />
      {items?.map((item) => {
        return (
          <div
            key={item.id}
            className={`${style[`item_${item.id}`]} ${style.item}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{
              flexDirection: item?.flexDirection ?? "row",
            }}
          >
            <img src={item.src} />
            <DotWave
              classNames={style.dot}
              styles={{ display: isHover ? "none" : "block" }}
            />
            <div className={style.code_editor}>
              <CodeBlock>{item.code}</CodeBlock>
            </div>
          </div>
        );
      })}
      <button className={style.demo_btn}>
        <a href="https://example.crm.refine.dev/" target="_blank">
          <p>See live demo</p>
          <div className={style.indicator}>
            <FaChevronRight size={10} />
          </div>
        </a>
      </button>
    </div>
  );
}

export default CRM;
