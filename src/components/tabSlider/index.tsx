import React from "react";
import style from "./style.module.scss";
import { CodeBlock, DotWave } from "@/components";
import { FaChevronRight } from "react-icons/fa";

interface IPillPositions {
  left: number;
  width?: number;
}

function TabSlider({ data }: { data: Array<ITabs> }) {
  if (!data.length) return;

  const [pillPosition, setPillPosition] = React.useState<IPillPositions>({
    left: 0,
  });

  const [activeTab, setActiveTab] = React.useState<number>(0);

  const setInitialWidth = (width: number) => {
    if (!pillPosition.width) {
      setPillPosition((prev) => ({ ...prev, width }));
    }
  };

  return (
    <div className={style.container}>
      <div className={style.tabs}>
        {data?.map((tab, idx) => (
          <Tab
            key={tab.title}
            title={tab.title}
            setPosition={setPillPosition}
            onClick={() => setActiveTab(idx)}
            setWidth={setInitialWidth}
          />
        ))}
        <Pill position={pillPosition} />
      </div>
      <div className={style.body}>{data[activeTab].body}</div>
    </div>
  );
}

export default TabSlider;

const Tab = ({
  title,
  setPosition,
  onClick,
  setWidth,
}: {
  title: string;
  setPosition: React.Dispatch<React.SetStateAction<IPillPositions>>;
  onClick: () => void;
  setWidth: (width: number) => void;
}) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (!ref?.current) return;

    let left = ref.current.offsetLeft;
    let { width } = ref.current.getBoundingClientRect();
    setPosition({ left, width });
    onClick();
  };

  React.useEffect(() => {
    if (!ref?.current) return;
    let { width } = ref.current.getBoundingClientRect();
    setWidth(width);
  }, []);

  return (
    <button className={style.tab} ref={ref} onClick={handleClick}>
      <span>{title}</span>
    </button>
  );
};

const Pill = ({ position }: { position: IPillPositions }) => {
  return <div className={style.pill} style={position} />;
};

function TabBody({ item }: { item: ITabBody }) {
  const [isHover, setIsHover] = React.useState<boolean>(false);

  return (
    <div className={style.box}>
      <img src={item.src} alt={item.name} className={style.banner} />
      <div
        className={style.blur}
        style={{ display: isHover ? "block" : "none" }}
      />
      {item?.items?.map((item) => {
        return (
          <div
            key={item.id}
            className={`${style[`item_${item.id}`]} ${style.item}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
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
        <a href={item.href} target="_blank">
          <p>{item.btnName}</p>
          <div className={style.indicator}>
            <FaChevronRight size={10} />
          </div>
        </a>
      </button>
    </div>
  );
}

export { TabBody };
