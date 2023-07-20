import React from "react";
import styles from "./style.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  const date = new Date();
  return (
    <footer id="about" className={styles.footer}>
      <div className={styles.footer_top}>
        <div className={styles.footer_top_left}>
          <h1 className={styles.footer_title}>The Algorithmic Path</h1>
          <p className={styles.footer_about_text}>
          "The Algorithmic Path" is the ultimate destination for college freshers gearing up for interviews. Our website provides a roadmap, articles, video lectures, and curated question sets to equip you with the essential knowledge and skills. Join our supportive community as we guide you towards interview success and help you kickstart your career.
          </p>
        </div>
        <div className={styles.footer_top_right}>
          <MailIcon
            className={styles.footer_social_icon}
            sx={{
              width: { xs: 30, sm: 40, md: 40 },
              "& .MuiInputBase-root": {
                height: 50,
              },
            }}
            onClick={() => window.open("mailto:thealgorithmicpath@gmail.com")}
          />
          <LinkedInIcon
            className={styles.footer_social_icon}
            sx={{
              width: { xs: 30, sm: 40, md: 40 },
              "& .MuiInputBase-root": {
                height: 50,
              },
            }}
            onClick={() => window.open("https://www.linkedin.com/")}
          />
          <YouTubeIcon
            className={styles.footer_social_icon}
            sx={{
              width: { xs: 30, sm: 40, md: 40 },
              "& .MuiInputBase-root": {
                height: 50,
              },
            }}
            onClick={() => window.open("https://www.youtube.com/")}
          />
          <TelegramIcon
            className={styles.footer_social_icon}
            sx={{
              width: { xs: 30, sm: 40, md: 40 },
              "& .MuiInputBase-root": {
                height: 50,
              },
            }}
            onClick={() => window.open("https://telegram.org/")}
          />
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <p className={styles.copyright}>
          Copyright © 2022-{date.getFullYear()}, The Algorithmic Path
        </p>
      </div>
    </footer>
  );
};

export default Footer;
