import { Button, NpmButton } from "@/components";
import { CiPlay1 } from "react-icons/ci";
import style from "./syle.module.scss";

function GetStarted() {
  return (
    <section className={style.section}>
      <div className={style.box}>
        <h2>Get started now!</h2>
        <p>
          Choose your way to scaffold your project and start developing in
          seconds.
        </p>
      </div>
      <div className={style.container}>
        <div className={`${style.stage}`}>
          <div className={style.view}>
            <div className={style.title}>
              Use our online GUI to create, customize, and download.
            </div>
            <Button
              text="Try it in your browser"
              Icon={CiPlay1}
              onClick={() => {}}
            />
          </div>
        </div>
        <div className={`${style.stage}`}>
          <div className={style.view}>
            <div className={style.title}>
              Run the npm command in Terminal and follow the wizard
              instructions.
            </div>
            <NpmButton />
          </div>
        </div>

        <div className={style.or}>
          <span>OR</span>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
