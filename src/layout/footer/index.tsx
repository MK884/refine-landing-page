import React from "react";
import style from "./style.module.scss";
import { SiRefine } from "react-icons/si";
import { ProductHunt } from "@/components";
import { FaRegHeart } from "react-icons/fa6";
import { NewBtn } from "../header";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

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
              href="https://www.producthunt.com/posts/refine-3?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-refine-3"
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
                <a
                  href="https://refine.dev/docs/getting-started/quickstart/"
                  target="_blank"
                >
                  Getting Started
                </a>
                <a
                  href="https://refine.dev/tutorial/essentials/intro/"
                  target="_blank"
                >
                  Tutorials
                </a>
                <a href="https://refine.dev/blog/" target="_blank">
                  Blog
                </a>
                <a href="https://reactadminpanel.com/" target="_blank">
                  React Admin Panel
                </a>
              </div>
            </div>
            <div className={style.product}>
              <div className={style.title}>Product</div>
              <div className={style.flex}>
                <a href="https://refine.dev/enterprise/" target="_blank">
                  Enterprise
                </a>
                <a href="https://refine.dev/templates/" target="_blank">
                  Templates
                </a>
                <a href="https://refine.dev/integrations/" target="_blank">
                  Integrations
                </a>
              </div>
            </div>
            <div className={style.company}>
              <div className={style.title}>Company</div>
              <div className={style.flex}>
                <a href="https://refine.dev/about/" target="_blank">
                  About
                </a>
                <a href="https://store.refine.dev/" target="_blank">
                  Store
                </a>
                <a href="https://form.typeform.com/to/H54hLD9r" target="_blank">
                  Contact Us
                </a>
              </div>
            </div>
            <div className={style.social}>
              <div className={style.title}>Join us on</div>
              <div className={style.flex_row}>
                <a href="https://github.com/refinedev/refine" target="_blank">
                  <FaGithub size={24} />
                </a>
                <a href="https://discord.com/invite/refine" target="_blank">
                  <FaDiscord size={24} />
                </a>
                <a href="https://www.reddit.com/r/refine/" target="_blank">
                  <FaRedditAlien size={24} />
                </a>
                <a href="https://x.com/refine_dev" target="_blank">
                  <BsTwitterX size={24} />
                </a>
                <a href="https://x.com/refine_dev" target="_blank">
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
