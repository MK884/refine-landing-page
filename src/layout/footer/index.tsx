import { ProductHunt } from "@/components";
import { links } from "@/constants";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaGithub, FaLinkedin, FaRedditAlien } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { SiRefine } from "react-icons/si";
import style from "./style.module.scss";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.row_1}>
            <a href="">
              <SiRefine size={32} />
            </a>
            <a
              href={links.productHunt}
              target="_blank"
              className={style.producthunt}
            >
              <ProductHunt />
            </a>
          </div>
          <div className={style.row_2}>
            <div className={style.info}>
              <div className={style.title}>Refine Development Inc.</div>
              <div className={style.flex}>
                <a>256 Chapman Road STE 105-4 Newark, DE 19702</a>
                <a href="mailto:info@refine.dev" target="_blank">
                  info@refine.dev
                </a>
              </div>
            </div>
            <div className={style.resource}>
              <div className={style.title}>Resources</div>
              <div className={style.flex}>
                <a href={links.quickStart} target="_blank">
                  Getting Started
                </a>
                <a href={links.tutorial} target="_blank">
                  Tutorials
                </a>
                <a href={links.blog} target="_blank">
                  Blog
                </a>
                <a href={links.reactAdmin} target="_blank">
                  React Admin Panel
                </a>
              </div>
            </div>
            <div className={style.product}>
              <div className={style.title}>Product</div>
              <div className={style.flex}>
                <a href={links.enterprise} target="_blank">
                  Enterprise
                </a>
                <a href={links.templates} target="_blank">
                  Templates
                </a>
                <a href={links.integrations} target="_blank">
                  Integrations
                </a>
              </div>
            </div>
            <div className={style.company}>
              <div className={style.title}>Company</div>
              <div className={style.flex}>
                <a href={links.about} target="_blank">
                  About
                </a>
                <a href={links.store} target="_blank">
                  Store
                </a>
                <a href={links.contact} target="_blank">
                  Contact Us
                </a>
              </div>
            </div>
            <div className={style.social}>
              <div className={style.title}>Join us on</div>
              <div className={style.flex_row}>
                <a href={links.github} target="_blank">
                  <FaGithub size={24} />
                </a>
                <a href={links.discord} target="_blank">
                  <FaDiscord size={24} />
                </a>
                <a href={links.reddit} target="_blank">
                  <FaRedditAlien size={24} />
                </a>
                <a href={links.twitter} target="_blank">
                  <BsTwitterX size={24} />
                </a>
                <a href={links.linkedin} target="_blank">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.end}>
        <div className={style.box}>
          <div className={style.action}>
            <a href="">Privacy Policy</a>
            <a href="">License</a>
          </div>
          <div className={style.action}>
            <p>
              © 2024, Refine Landing Page Copy. Merchant khalid{" "}
              <FaRegHeart size={16} />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
