import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

import HeroImg from "./../../media/images/hero.png";
import InterviewRoadmapImg from "./../../media/images/interviewRoadmap.png";
import whyTapImgP from "../../media/images/why_tapP.png";
import whyTapImgS from "../../media/images/why_tapS.png";
import roadMapImg from "../../media/images/roadmap.svg";
import articleImg from "../../media/images/article.svg";
import problemImg from "../../media/images/problems.svg";

const Home = () => {
  const [whySectionImage, setWhySectionImage] = useState(1);
  const [whySectionText, setWhySectionText] = useState(1);
  let lastStudiedSubject = localStorage.getItem("lastSubjectStudied");
  useEffect(() => {
    // lastStudiedSubject = sessionStorage.getItem("lastSubjectStudied");
  }, []);
  return (
    <div>
      <section id="hero" className={styles.hero_section}>
        <div className={styles.hero_left}>
          <h1 className={styles.hero_heading}>
            Giving Path to Dedicated Students
          </h1>
          <p className={styles.hero_text}>
            Wanna be Interview Ready!!!
            <br />
            Confused What to Follow & Where to Study!!!
            <br />
            Not Getting the right path and materials!!!
            <br />
            Your problem is solved now.
            <br />
            Let’s Get Started and enjoy the journey...
          </p>
          {!lastStudiedSubject && (
            <Link to="/dsa">
              <button className={styles.btn_primary_dark}>Get Started</button>
            </Link>
          )}
          {lastStudiedSubject === "DSA" && (
            <Link to="/dsa">
              <button className={styles.btn_primary_dark}>
                Resume Journey
              </button>
            </Link>
          )}
          {lastStudiedSubject === "CSF" && (
            <Link to="/csf">
              <button className={styles.btn_primary_dark}>
                Resume Journey
              </button>
            </Link>
          )}
          {lastStudiedSubject === "PROJ" && (
            <Link to="/projects">
              <button className={styles.btn_primary_dark}>
                Resume Journey
              </button>
            </Link>
          )}
          {lastStudiedSubject === "LANG" && (
            <Link to="/lang">
              <button className={styles.btn_primary_dark}>
                Resume Journey
              </button>
            </Link>
          )}
        </div>
        <div className={styles.hero_right}>
          <img className={styles.hero_img} src={HeroImg} alt="hero_img" />
        </div>
      </section>

      <section id="roadMap" className={styles.roadmap_section}>
        <h1 className={styles.section_heading} style={{ textAlign: "center" }}>
          Roadmap For Interview
        </h1>
        <img
          className={styles.interview_roadmap_img}
          src={InterviewRoadmapImg}
          alt="roadmap_img"
        />
      </section>

      <section id="learn" className={styles.learn_section}>
        <h1 className={styles.section_heading} style={{ textAlign: "center" }}>
          Learning Paths
        </h1>
        <div className={styles.learn_card_container}>
          <div className={styles.learn_card}>
            <h1 className={styles.learn_card_heading}>
              Language, OOPs, STL
            </h1>
            <p className={styles.learn_card_text}>
              A language & OOP knowledge are crucial for starting a coding
              journey. It promotes modular coding. A strong foundation empowers
              problem-solving and unlocks endless possibilities in the tech
              landscape.
            </p>
            <Link to="/lang">
              <span className={styles.learn_btn}>Learn &rarr; </span>
            </Link>
          </div>
          <div className={styles.learn_card}>
            <h1 className={styles.learn_card_heading}>
              Data Structure and Algorithms
            </h1>
            <p className={styles.learn_card_text}>
              Data structure is used for organizing, processing, retrieving, and
              storing data. There are different types of data structure that are
              used in almost every software system. So we must have good
              knowledge about data structures.
            </p>
            <Link to="/dsa">
              <span className={styles.learn_btn}>Learn &rarr; </span>
            </Link>
          </div>
          <div className={styles.learn_card}>
            <h1 className={styles.learn_card_heading}>
              Computer Science Fundamentals
            </h1>
            <p className={styles.learn_card_text}>
              Core subjects like OS, DBMS, and CN are crucial for interviews.
              They provide essential knowledge for optimizing code, managing
              data efficiently, and troubleshooting network-related issues.
            </p>
            <Link to="/csf">
              <span className={styles.learn_btn}>Learn &rarr; </span>
            </Link>
          </div>
          <div className={styles.learn_card}>
            <h1 className={styles.learn_card_heading}>Projects</h1>
            <p className={styles.learn_card_text}>
              Projects play a vital role in interviews by showcasing a
              candidate's practical application of theoretical knowledge. They
              provide hands-on experience, foster creativity, and assess
              essential skills such as teamwork, communication, and initiative.
            </p>
            <Link to="/projects">
              <span className={styles.learn_btn}>Learn &rarr; </span>
            </Link>
          </div>
        </div>
      </section>

      <h1 className={styles.section_heading} style={{ textAlign: "center" }}>
        Why Algorithmic Path ?
      </h1>
      <section id="why_tap" className={styles.why_tap_container}>
        <div className={styles.why_tap_left}>
          {whySectionImage % 2 === 0 ? (
            <img className={styles.why_tap_img} src={whyTapImgP} alt="img" />
          ) : (
            <img className={styles.why_tap_img} src={whyTapImgS} alt="img" />
          )}
        </div>
        <div className={styles.why_tap_right}>
          <div className={styles.why_tap_right_text}>
            {/* <h1 className={styles.heading_2}>How We Differ ?</h1> */}
            {whySectionText === 0 ? (
              <p className={styles.why_tap_txt}>
                Students were facing challenges in finding the best resources like
                articles, videos, and questions. They struggle with information
                overload, outdated content, credibility issues, technical
                jargon, and limited access to resources. We are here to solve all the above problems.
              </p>
            ) : (
              <p className={styles.why_tap_txt}>
                We are giving best quality content by combining every possible
                websites like GfG, Leetcode and many more. We are refining the
                articles as well as questions from these websites and providing
                it in an organised manner so that it becomes easy for students
                to study.
              </p>
            )}
          </div>
          <div className={styles.btn_container}>
            <button
              className={
                whySectionText === 0
                  ? styles.btn_primary_dark
                  : styles.btn_primary_light
              }
              onClick={() => {
                setWhySectionImage(0);
                setWhySectionText(0);
              }}
            >
              Previously
            </button>
            <button
              className={
                whySectionText === 1
                  ? styles.btn_primary_dark
                  : styles.btn_primary_light
              }
              onClick={() => {
                setWhySectionImage(1);
                setWhySectionText(1);
              }}
            >
              Smartly
            </button>
          </div>
        </div>
      </section>

      <section id="features">
        <h1 className={styles.section_heading} style={{ textAlign: "center" }}>
          Features
        </h1>
        <div className={styles.features_container}>
          <div className={styles.features_card}>
            <div className={styles.features_icon}>
              <img
                className={styles.features_img}
                src={roadMapImg}
                alt="feature_roadmap_img"
              />
            </div>
            <h3 className={styles.features_head}>Roadmaps</h3>
            <p className={styles.features_txt}>
            A well-structured roadmap is crucial to determine your direction. Therefore, strict adherence is essential to accomplish your goal effectively.
            </p>
          </div>
          <div className={styles.features_card}>
            <div className={styles.features_icon}>
              <img
                className={styles.features_img}
                src={articleImg}
                alt="feature_article_img"
              />
            </div>
            <h3 className={styles.features_head}>
              Articles
            </h3>
            <p className={styles.features_txt}>
            Once you have identified correct path, it's essential to find well-crafted articles that will help you grasp the concepts more effectively.
            </p>
          </div>
          <div className={styles.features_card}>
            <div className={styles.features_icon}>
              <img
                className={styles.features_img}
                src={problemImg}
                alt="feature_problem_img"
              />
            </div>
            <h3 className={styles.features_head}>
              Problems
            </h3>
            <p className={styles.features_txt}>
            Solving every problem is un-necessary. By focusing on selected questions, you can understand the underlying logic and apply it to similar problems.
            </p>
          </div>
        </div>
      </section>

      <section id="video_solution" className={styles.video_section}>
        <div className={styles.video_section_left}>
          <h1 className={styles.video_section_heading}>
            Get The Video Solutions
          </h1>
          <p className={styles.video_section_text}>
            Only assigning the problems is not the end goal from our side. We
            are also providing video solutions of every possible questions from
            each and every topics and also some additional problems of the day
            to keep the students motivated.
          </p>
          <Link to="https://www.youtube.com/" target="_blank">
            <button className={styles.btn_primary_dark}>Visit Channel</button>
          </Link>
        </div>
        <div className={styles.video_section_right}>
          <iframe
            title="youtube channel"
            className={styles.home_yt_video}
            src="https://www.youtube.com/embed/watch?v=u202zgM7Fqk&list=PL1w8k37X_6L86f3PUUVFoGYXvZiZHde1S&index=3"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
