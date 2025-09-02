import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";
import Link from "next/link";
import LogoIcon from "@/public/logo.svg";
import FacebookIcon from "@/public/facebook.svg";
import XIcon from "@/public/x.svg";
import LinkedinIcon from "@/public/linkedin.svg";
import { Divider } from "@/components";
import MailIcon from "@/public/mail.svg";
import PhoneIcon from "@/public/phone.svg";
import LocationIcon from "@/public/location.svg";


export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer {...props} className={cn(styles.footer, className)}>
      <div className={styles.container}>
        <nav className={styles["footer-menu"]}>
          <div className={styles["menu-left"]}>
            <Link
              href={"/"}
            >
              <LogoIcon className={styles.logo} />
            </Link>
            <ul className={styles["contacts"]}>
              <li className={styles["contacts-item"]}>
                <a href="#" className={styles["contacts-link"]}>
                  <MailIcon/>
                  hello@skillbridge.com
                </a>
              </li>
              <li className={styles["contacts-item"]}>
                <a href="#" className={styles["contacts-link"]}>
                  <PhoneIcon/>
                  +91 91813 23 2309
                </a>
              </li>
              <li className={styles["contacts-item"]}>
                <a href="#" className={styles["contacts-link"]}>
                  <LocationIcon/>
                  Somewhere in the World
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["menu-right"]}>
            <ul className={styles["list"]}>
              <li className={styles["item"]}><a href="#">About Us</a></li>
              <li className={styles["item"]}><a href="#">Company</a></li>
              <li className={styles["item"]}><a href="#">Achievements</a></li>
              <li className={styles["item"]}><a href="#">Our Goals</a></li>
            </ul>
            <ul className={cn(styles["social-list"], styles["list"])}>
              <li className={styles["item"]}><a href="#">Profiles</a></li>
              <li className={styles["social-item"]}><a href="#" className={styles["social-link"]}><FacebookIcon /></a></li>
              <li className={styles["social-item"]}><a href="#" className={styles["social-link"]}><XIcon /></a></li>
              <li className={styles["social-item"]}><a href="#" className={styles["social-link"]}><LinkedinIcon /></a></li>
            </ul>
          </div>
        </nav>
        <Divider />
        <div className={styles.copyright}>Skillbridge &copy; 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
      </div>
    </footer>
  );
}