import React, { useEffect } from "react";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import { getFilteredArticles } from "../../actions/admin/articles";
import { getFilteredQuestions } from "../../actions/admin/questions";
import { getFilteredVideos } from "../../actions/admin/videos";
import { toast } from "react-hot-toast";

const TopicPage = ({ subject }) => {
  const { user } = useSelector((state) => state.user);
  const lastSessionPageNO = localStorage.getItem(subject);
  const { DSA, CSF, PROJ, LANG } = useSelector((state) => state.subjects);
  const [pageNo, setPageNo] = React.useState(lastSessionPageNO || 0);
  const [topicName, setTopicName] = React.useState("Sorry, No topic found !!!");
  const dispatch = useDispatch();
  const reducePageNo = () => {
    if (Number(pageNo) - 1 < 0) {
      toast.error("No more previous topics to show");
    } else {
      setPageNo((prev) => Number(prev) - 1);
      localStorage.setItem(subject, Number(pageNo) - 1);
    }
  };
  const getTopicPageLength = () => {
    if (subject === "DSA") {
      return DSA.length;
    } else if (subject === "CSF") {
      return CSF.length;
    } else if (subject === "PROJ") {
      return PROJ.length;
    } else if (subject === "LANG") {
      return LANG.length;
    }
  };
  const increasePageNo = () => {
    if (Number(pageNo) + 1 >= getTopicPageLength()) {
      toast.error("No more topics to show");
    } else {
      setPageNo((prev) => Number(prev) + 1);
      localStorage.setItem(subject, Number(pageNo) + 1);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    // if (user) {
      localStorage.setItem("lastSubjectStudied", subject);
      if (subject === "DSA") {
        setTopicName(DSA[pageNo]?.name);
        dispatch(getFilteredArticles(DSA[pageNo]?.articles));
        dispatch(getFilteredQuestions(DSA[pageNo]?.questions));
        dispatch(getFilteredVideos(DSA[pageNo]?.videos));
      } else if (subject === "CSF") {
        setTopicName(CSF[pageNo]?.name);
        dispatch(getFilteredArticles(CSF[pageNo]?.articles));
        dispatch(getFilteredQuestions(CSF[pageNo]?.questions));
        dispatch(getFilteredVideos(CSF[pageNo]?.videos));
      } else if (subject === "PROJ") {
        setTopicName(PROJ[pageNo]?.name);
        dispatch(getFilteredArticles(PROJ[pageNo]?.articles));
        dispatch(getFilteredQuestions(PROJ[pageNo]?.questions));
        dispatch(getFilteredVideos(PROJ[pageNo]?.videos));
      } else if (subject === "LANG") {
        setTopicName(LANG[pageNo]?.name);
        dispatch(getFilteredArticles(LANG[pageNo]?.articles));
        dispatch(getFilteredQuestions(LANG[pageNo]?.questions));
        dispatch(getFilteredVideos(LANG[pageNo]?.videos));
      }
    // } 
    // else {
    //   toast.error("Please login to continue");
    // }
  }, [DSA, CSF, PROJ, LANG, subject, pageNo, user, dispatch]);

  return (
    <div>
      <div className={styles.topic_heading}>{topicName}</div>

      <div className={styles.nav_buttons_top}>
        <button onClick={reducePageNo} className={styles.btn_primary_light}>
          Prev Topic
        </button>
        <button onClick={increasePageNo} className={styles.btn_primary_dark}>
          Next Topic
        </button>
      </div>
      <ContentContainer />
      <div className={styles.nav_buttons_bottom}>
        <button onClick={reducePageNo} className={styles.btn_primary_light}>
          Prev Topic
        </button>
        <button onClick={increasePageNo} className={styles.btn_primary_dark}>
          Next Topic
        </button>
      </div>
    </div>
  );
};

export default TopicPage;
