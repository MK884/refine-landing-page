import { Button, CodeBlock, ReactLogo } from "@/components";
import { links, packages, UIPackages } from "@/constants";
import { useTheme } from "@/context";
import React from "react";
import { CiCircleChevRight } from "react-icons/ci";
import {
  a11yDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import style from "./style.module.scss";

const codes = `import { useGetIdentity, useList } from "@refinedev/core";
    
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
    const totalSickLeave = data?.total;`;

function Packages() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.box}>
          <h2>
            Start <span>faster</span>, maintain <span>easier</span>, manage{" "}
            <span>complexity</span>.
          </h2>
        </div>
        <div className={style.box_2}>
          <div className={style.container}>
            <div className={style.linear_gradient} />
            <div className={style.packages}>
              <div className={style.slide}>
                <Carousel>
                  <>
                    {UIPackages?.map((item, idx) => (
                      <PackageCard {...item} key={idx} />
                    ))}
                  </>
                </Carousel>
              </div>
              <div className={style.slide}>
                <Carousel direction="rtl">
                  <>
                    {packages?.map((item, idx) => (
                      <PackageCard {...item} key={idx} />
                    ))}
                  </>
                </Carousel>
              </div>
            </div>
            <div className={style.info}>
              <div className={style.title}>
                <h4>Seamless connectivity</h4>
              </div>
              <div className={style.action}>
                <h6>
                  Out-of-the box integrations for 15+ services including custom
                  REST and GraphQL API’s.
                </h6>
                <Button
                  text="All integrations"
                  Icon={CiCircleChevRight}
                  onClick={() => window.open(links.integrations, "_blank")}
                  variant="outline"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.container_2}>
        <div className={style.box_1}>
          <div className={style.thumbnail}>
            <div className={style.bg_cover} />
            <div className={style.items}></div>
          </div>
          <div className={style.details}>
            <h6>Wheel? Already invented.</h6>
            <div className={style.actions}>
              <p>
                Start with a well-structured boilerplate, built around the
                industry’s best practices.
              </p>
              <Button
                text="Learn more"
                onClick={() => {}}
                Icon={CiCircleChevRight}
                variant="outline"
              />
            </div>
          </div>
        </div>
        <div className={`${style.box_1} ${style.box_2}`}>
          <div className={style.thumbnail}>
            <div className={style.logo}>
              <ReactLogo />
            </div>
            <div className={style.code_editor}>
              <div className={style.code}>
                <CodeBlock
                  showLineNumbers={true}
                  style={isDark ? a11yDark : oneLight}
                >
                  {codes}
                </CodeBlock>
                <CodeBlock
                  showLineNumbers={true}
                  style={isDark ? a11yDark : oneLight}
                >
                  {codes}
                </CodeBlock>
              </div>
            </div>
          </div>
          <div className={style.details}>
            <h6>100% Pure React code</h6>
            <div className={style.actions}>
              <p>
                Don’t get locked-in to proprietary, black-box solutions. With
                Refine you have always 100% control over your project.
              </p>
              <Button
                text="Refine on GitHub"
                onClick={() => window.open(links.github, "_blank")}
                Icon={CiCircleChevRight}
                variant="outline"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;

export const PackageCard = ({ Icon, name, npmCommand }: IPackage) => {
  return (
    <div className={style.card}>
      <div>{Icon}</div>
      <div className={style.name}>{name}</div>
      <div className={style.indicator}>
        <div className={style.command}>{npmCommand}</div>
      </div>
    </div>
  );
};

export const Carousel = ({
  children,
  direction = "ltr",
  speed = 50,
}: {
  direction?: "ltr" | "rtl";
  speed?: number;
  children: React.ReactElement;
}) => {
  const animationDuration = `${speed}s`;
  const animationDirection = direction === "ltr" ? "normal" : "reverse";
  return (
    <div className={style.carousel}>
      {Array(2) // Duplicate items for continuous effect
        .fill(children)
        .map((item, index) => (
          <div
            className={style.slider}
            style={{
              animationDuration,
              animationDirection,
            }}
            key={index}
          >
            {item}
          </div>
        ))}
    </div>
  );
};
