import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getAllUnfilteredArticles } from "../../../actions/admin/articles";
import { getAllUnfilteredVideos } from "../../../actions/admin/videos";
import { getAllUnfilteredQuestions } from "../../../actions/admin/questions";
import VerifyContentForm from "../../../components/Forms/VerifyContentForm";

const VerifyContributions = () => {
  const dispatch = useDispatch();
  //   const { DSA, CSF, LANG, PROJ } = useSelector((state) => state.subjects);
  const { articles, videos, questions } = useSelector(
    (state) => state.topicPage
  );
  const [contributionOf, setContributionOf] = useState("");
  const [subject, setSubject] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (contributionOf === "Articles") {
      dispatch(getAllUnfilteredArticles(subject));
    } else if (contributionOf === "Videos") {
      dispatch(getAllUnfilteredVideos(subject));
    } else if (contributionOf === "Questions") {
      dispatch(getAllUnfilteredQuestions(subject));
    }
  };

  return (
    <div className="ContentEdit">
      <div className="ContentEdit_container">
        <p className="heading_page">Verify Contributions</p>
        <form onSubmit={submitHandler} className="ContentEdit_form">
          <div className="ContentEdit_form_container">
            <div className="ContentEdit_form_container__left">
              <p className="heading_1">Select Topic</p>
              <FormControl
                sx={{
                  width: { xs: 200, sm: 300, md: 400 },
                  "& .MuiInputBase-root": {
                    height: 45,
                  },
                }}
              >
                <InputLabel id="subject-label">Subjects</InputLabel>
                <Select
                  labelId="subject-label"
                  id="subject"
                  value={subject}
                  label="subject"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                >
                  <MenuItem value={"DSA"}>Data Structure & Algorithm</MenuItem>
                  <MenuItem value={"LANG"}>
                    Language, Object Oriented Programming, STL
                  </MenuItem>
                  <MenuItem value={"CSF"}>
                    Computer Science Fundamentals
                  </MenuItem>
                  <MenuItem value={"PROJ"}>Projects</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                sx={{
                  width: { xs: 200, sm: 300, md: 400 },
                  "& .MuiInputBase-root": {
                    height: 45,
                  },
                }}
              >
                <InputLabel id="topic-label">Contribution Type</InputLabel>
                <Select
                  labelId="topic-label"
                  id="topic"
                  value={contributionOf}
                  label="articles, video, questions"
                  onChange={(e) => {
                    setContributionOf(e.target.value);
                  }}
                >
                  <MenuItem value={"Articles"}>Articles</MenuItem>
                  <MenuItem value={"Videos"}>Videos</MenuItem>
                  <MenuItem value={"Questions"}>Questions</MenuItem>
                </Select>
              </FormControl>
              <button className="actionSubmit" type="submit">
                Find
              </button>
            </div>

            <div className="ContentEdit_form_container__right">
              {contributionOf === "Questions" &&
                (questions.length > 0 ? (
                  questions.map((question, i) => (
                    <VerifyContentForm
                      key={i}
                      formData={question}
                      type="question"
                    />
                  ))
                ) : (
                  <p className="heading_1">No Content Found</p>
                ))}
              {contributionOf === "Articles" &&
                (articles.length > 0 ? (
                  articles.map((article, i) => (
                    <VerifyContentForm
                      key={i}
                      formData={article}
                      type="article"
                    />
                  ))
                ) : (
                  <p className="heading_1">No Content Found</p>
                ))}
              {contributionOf === "Videos" &&
                videos.length > 0 &&
                videos.map((video, i) => (
                  <VerifyContentForm key={i} formData={video} type="video" />
                ))}
              {contributionOf === "" && (
                <p className="heading_1">No Content Found</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyContributions;
