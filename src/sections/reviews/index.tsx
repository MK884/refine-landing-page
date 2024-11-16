import { Button } from "@/components";
import { reviews } from "@/constants";
import React from "react";
import { CiCircleChevRight } from "react-icons/ci";
import style from "./style.module.scss";

function Reviews() {
  const [isRevealed, setIsRevealed] = React.useState<boolean>(false);

  const toggleRevealed = () => setIsRevealed((prev) => !prev);

  return (
    <section className={style.section}>
      <div className={style.box}>
        <h2>
          The <span>difference</span> that Refine makes
        </h2>
      </div>
      <div
        className={style.box_2}
        style={{ height: isRevealed ? "auto" : "20rem" }}
      >
        <div className={style.gallary}>
          {reviews?.map((item, idx) => (
            <Card {...item} key={idx} />
          ))}
        </div>
        <div
          className={style.action}
          style={{ backgroundImage: isRevealed ? "unset" : undefined }}
        >
          <div className={style.btn}>
            <Button
              text={isRevealed ? "Show less" : "Show more"}
              onClick={toggleRevealed}
              Icon={CiCircleChevRight}
              variant="outline"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;

const Card = ({ identity, name, review, avatarUrl, href }: IReviews) => {
  return (
    <div className={style.card}>
      <div className={style.box}>
        <p>{review}</p>
        <a href={href} target="_blank">
          <div className={style.avatar}>
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} loading="lazy" />
            ) : (
              <div className={style.logo}>{name?.slice(0, 1)}</div>
            )}
          </div>
          <div className={style.info}>
            <p className={style.name}>{name}</p>
            <p className={style.identity}>{identity}</p>
          </div>
        </a>
      </div>
    </div>
  );
};
