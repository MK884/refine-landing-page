import React from "react";
import style from "./style.module.scss";

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
