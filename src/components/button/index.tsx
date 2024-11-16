import { npm_command } from "@/constants";
import React from "react";
import { IconType } from "react-icons";
import { MdDone } from "react-icons/md";
import style from "./style.module.scss";

interface IButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "fill" | "outline";
  text: string;
  Icon: IconType;
  IconsStyle?: React.CSSProperties;
  styles?: React.CSSProperties;
  IconSize?: number;
  classNames?: string;
}

function Button({
  Icon,
  onClick,
  text,
  variant = "fill",
  IconsStyle = {},
  IconSize = 20,
  classNames = "",
  styles = {},
}: IButtonProps) {
  if (variant === "fill") {
    return (
      <button
        onClick={onClick}
        className={`${style.btn} ${style.fill} ${classNames}`}
        style={styles}
      >
        <Icon size={IconSize} style={IconsStyle} />
        {text}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${style.btn} ${style.outline} ${classNames}`}
      style={styles}
    >
      {text}
      <Icon size={IconSize} style={IconsStyle} />
    </button>
  );
}

export default Button;

export const NpmButton = () => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);

  const handleClickNpm = () => {
    setIsClicked(true);
    navigator.clipboard.writeText(npm_command);
    setTimeout(() => setIsClicked(false), 5000);
  };
  return (
    <button className={style.npm_btn} onClick={handleClickNpm}>
      <span data-text={npm_command} className={style.npm}>
        {npm_command}
        {isClicked && (
          <>
            <span className={style.copy} data-text="copied to clipboard!">
              copied to clipboard!
            </span>
          </>
        )}
      </span>
      <div className={style.bg} />
      {isClicked && (
        <div className={style.icon}>
          <MdDone size={14} />
        </div>
      )}
    </button>
  );
};
