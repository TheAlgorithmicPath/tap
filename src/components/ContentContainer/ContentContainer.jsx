import React from "react";
import styles from "./style.module.css";
import { useSelector } from "react-redux";

const ContentContainer = () => {
  const { articles, videos, questions } = useSelector(
    (state) => state.topicPage
  );
  return (
    <div>
      <section id="articles" className={styles.article_section}>
        <div className={styles.article_top_bar}>Articles</div>
        <div className={styles.links_container}>
          {articles.length === 0 ? (
            <div>
              <p className={styles.placeholder_for_empty_content}>
                We are continuously updating our content to meet your evolving
                needs.
              </p>
              <p className={styles.placeholder_for_empty_content}>
                Keep Calm and Code On...{" "}
              </p>
            </div>
          ) : (
            articles?.map((article, i) => (
              <a key={i} href={article.url}>
                <span className={styles.card_links}>{article.name}</span>
              </a>
            ))
          )}
        </div>
      </section>

      <section id="videos" className={styles.video_section}>
        <div className={styles.video_top_bar}>Videos</div>
        <div className={styles.links_container}>
          {videos.length === 0 ? (
            <div>
              <p className={styles.placeholder_for_empty_content}>
                We are continuously updating our content to meet your evolving
                needs.
              </p>
              <p className={styles.placeholder_for_empty_content}>
                Keep Calm and Code On...{" "}
              </p>
            </div>
          ) : (
            videos?.map((video, i) => (
              <div key={i} className={styles.yt_card}>
                <iframe
                  title="video1"
                  className={styles.dsa_yt_video}
                  src={video.url}
                />
                <div className={styles.yt_card_title}>{video.name}</div>
              </div>
            ))
          )}
        </div>
      </section>

      <section id="questions" className={styles.problem_section}>
        <div className={styles.problem_top_bar}>Problems</div>
        <div className={styles.links_container_problem}>
          {questions.length === 0 ? (
            <div>
              <p className={styles.placeholder_for_empty_content}>
                We are continuously updating our content to meet your evolving
                needs.
              </p>
              <p className={styles.placeholder_for_empty_content}>
                Keep Calm and Code On...{" "}
              </p>
            </div>
          ) : (
            questions?.map((question, i) => (
              <div key={i} className={styles.questions_card}>
                <a href={question.url}>
                  <span className={styles.questions_card_links}>
                    {question.name}
                  </span>
                </a>
                <a href={question.url}>
                  <button target="_blank" className={styles.questions_card_btn}>
                    Solve
                  </button>
                </a>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default ContentContainer;
