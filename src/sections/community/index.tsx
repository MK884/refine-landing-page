import { useTheme } from "@/context";
import style from "./style.module.scss";

interface ICard {
  title: string;
  caption: string;
  href?: string;
}

const cardData: Array<ICard> = [
  {
    title: "28.4K",
    caption: "Stars on GitHub",
    href: "https://github.com/refinedev/refine",
  },
  {
    title: "8K+",
    caption: "Projects on production, including large enterprises",
  },
  {
    title: "32K+",
    caption: "Active developers in our open-source community",
  },
  {
    title: "200K+",
    caption: "End users are using apps built with Refine",
  },
];

function Community() {
  const { theme } = useTheme();

  const investorsSrc =
    theme === "dark"
      ? "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/investors-2-dark.png"
      : "https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/investors-2.png";

  return (
    <section className={style.section}>
      <div className={style.box}>
        <h2>
          Feel the power of a great <span>community</span>.
        </h2>
      </div>
      <div className={style.box_2}>
        <div className={style.grid}>
          {cardData?.map((card, idx) => (
            <Card {...card} key={idx} />
          ))}
        </div>
        <div className={style.container}>
          <img src={investorsSrc} alt="investors" loading="lazy" />
          <div className={style.text}>
            <p>
              Backed by <span>Y Combinator</span> (YC S23), {" "}
              <span>500 Emerging Europe</span> and <span> Senovo</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;

const Card = ({ caption, href, title }: ICard) => {
  return (
    <a className={style.card} href={href}>
      <div className={style.title}>{title}</div>
      <p className={style.caption}>{caption}</p>
    </a>
  );
};
