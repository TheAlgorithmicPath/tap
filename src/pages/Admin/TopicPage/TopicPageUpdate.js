import React, { useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { hideLoading, showLoading } from "../../../redux/alertSlice";
// import { setUser } from "../../../redux/userSlice";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import Checkbox from "@mui/material/Checkbox";

import "../css/style.css";
import {  updateTopicPage } from "../../../actions/admin/topicpage";
import { getArticlesBySubject } from "../../../actions/admin/articles";
import { getVideosBySubject } from "../../../actions/admin/videos";
import { getQuestionsBySubject } from "../../../actions/admin/questions";

// for selecting contents
const ITEM_HEIGHT = 100;
const ITEM_PADDING_TOP = 100;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, list, theme) {
  return {
    fontWeight:
      list.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const TopicPageUpdate = () => {
  const { articles, videos, questions } = useSelector(
    (state) => state.topicPage
  );
  const dispatch = useDispatch();
  const { DSA, CSF, LANG, PROJ } = useSelector((state) => state.subjects);
  const [subject, setSubject] = useState("");
  const [topicId, setTopicId] = useState("");

  // for selecting dropdown contents
  const [articlesDropdown, setArticlesDropdown] = useState([]);
  const [videosDropdown, setVideosDropdown] = useState([]);
  const [questionsDropdown, setQuestionsDropdown] = useState([]);

  // for selecting contents
  const theme = useTheme();
  const [name, setName] = useState("");
  const [selectedArticleList, setSelectedArticleList] = useState([]);
  const [selectedVideoList, setSelectedVideoList] = useState([]);
  const [selectedQuestionList, setSelectedQuestionList] = useState([]);
  // const [selectedTopicList, setSelectedTopicList] = useState([]);

  let selectedArticlesIndex = [],
    selectedVideosIndex = [],
    selectedQuestionsIndex = [];

  const submitHandler = async (e) => {
    e.preventDefault();
    for (let i = 0; i < selectedArticleList.length; i++) {
      // storing article id of selected articles
      selectedArticlesIndex.push(
        articles[articlesDropdown.indexOf(selectedArticleList[i])]._id
      );
    }
    for (let i = 0; i < selectedVideoList.length; i++) {
      // storing video id of selected videos
      selectedVideosIndex.push(
        videos[videosDropdown.indexOf(selectedVideoList[i])]._id
      );
    }
    for (let i = 0; i < selectedQuestionList.length; i++) {
      // storing question id of selected questions
      selectedQuestionsIndex.push(
        questions[questionsDropdown.indexOf(selectedQuestionList[i])]._id
      );
    }
    const topicPageData = {
      name,
      articles: selectedArticlesIndex,
      videos: selectedVideosIndex,
      questions: selectedQuestionsIndex,
    };
    dispatch(updateTopicPage(topicPageData, topicId));
  };
  
  useEffect(() => {
    if (subject === "DSA") {
      dispatch(getArticlesBySubject("DSA"));
      dispatch(getVideosBySubject("DSA"));
      dispatch(getQuestionsBySubject("DSA"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subject]);
  useEffect(() => {
    if (subject === "DSA") {
      let articlesName = [],
        videosName = [],
        questionsName = [];
      for (let i = 0; i < articles.length; i++) {
        articlesName.push(articles[i].name);
      }
      for (let i = 0; i < videos.length; i++) {
        videosName.push(videos[i].name);
      }
      for (let i = 0; i < questions.length; i++) {
        questionsName.push(questions[i].name);
      }
      // console.log(videosName);
      // for dropdown menu
      setArticlesDropdown(articlesName);
      setVideosDropdown(videosName);
      setQuestionsDropdown(questionsName);

      // setArticleList(articleName);
      // setVideoList(videos);
      // setQuestionList(questions);
      // console.log(articleList);
    }
  }, [articles, videos, questions, subject]);
  return (
    <div className="ContentCreate">
      <div className="ContentCreate_container">
        <p className="heading_page">Edit Topic Page</p>
        <form onSubmit={submitHandler} className="ContentCreate_form">
          <div className="ContentCreate_form_container">
            <div className="ContentCreate_form_container__left">
              {/* <p className="heading_1">Select Topic</p> */}
              <FormControl
                sx={{
                  width: { xs: 200, sm: 300, md: 400 },
                  "& .MuiInputBase-root": {
                    height: 45,
                  },
                }}
              >
                <InputLabel id="subject-label">Subject</InputLabel>
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
                <InputLabel id="topic-label">Topics</InputLabel>
                <Select
                  labelId="topic-label"
                  id="topic"
                  value={topicId}
                  label="topic"
                  onChange={(e) => {
                    setTopicId(e.target.value);
                  }}
                >
                  {subject === "DSA" &&
                    DSA.map((topic, i) => (
                      <MenuItem key={i} value={topic._id}>
                        {topic.name}
                      </MenuItem>
                    ))}
                  {subject === "LANG" &&
                    LANG.map((topic, i) => (
                      <MenuItem key={i} value={topic._id}>
                        {topic.name}
                      </MenuItem>
                    ))}
                  {subject === "CSF" &&
                    CSF.map((topic, i) => (
                      <MenuItem key={i} value={topic._id}>
                        {topic.name}
                      </MenuItem>
                    ))}
                  {subject === "PROJ" &&
                    PROJ.map((topic, i) => (
                      <MenuItem key={i} value={topic._id}>
                        {topic.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>

              <TextField
                sx={{
                  width: { xs: 300, sm: 400, md: 400 },
                  "& .MuiInputBase-root": {
                    height: 50,
                  },
                }}
                id="name"
                name="name"
                label="Topic Name"
                minLength="6"
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <FormControl sx={{ m: 1, width: 400 }}>
                <InputLabel id="articles-label">Articles</InputLabel>
                <Select
                  labelId="articles-label"
                  id="articles"
                  multiple
                  value={selectedArticleList}
                  onChange={(e) => {
                    setSelectedArticleList(
                      typeof e.target.value === "string"
                        ? e.target.value.split(",")
                        : e.target.value
                    );
                  }}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="articles" />
                  }
                  MenuProps={MenuProps}
                >
                  {articlesDropdown.map((article, i) => (
                    <MenuItem
                      key={i}
                      value={article}
                      style={getStyles(
                        article.name,
                        selectedArticleList,
                        theme
                      )}
                    >
                      <Checkbox
                        onClick={() => {
                          // if(selectedArticlesIndex.indexOf(i) === -1)
                          selectedArticlesIndex.push(i);
                        }}
                        checked={selectedArticleList.indexOf(article) > -1}
                      />
                      {article}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, width: 400 }}>
                <InputLabel id="videos-label">Videos</InputLabel>
                <Select
                  labelId="videos-label"
                  id="videos"
                  multiple
                  value={selectedVideoList}
                  onChange={(e) =>
                    setSelectedVideoList(
                      typeof e.target.value === "string"
                        ? e.target.value.split(",")
                        : e.target.value
                    )
                  }
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Articles" />
                  }
                  MenuProps={MenuProps}
                >
                  {videosDropdown.map((video, i) => (
                    <MenuItem
                      key={i}
                      value={video}
                      style={getStyles(video, selectedVideoList, theme)}
                    >
                      <Checkbox
                        onClick={() => {
                          selectedVideosIndex.push(i);
                        }}
                        checked={selectedVideoList.indexOf(video) > -1}
                      />
                      {video}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, width: 400 }}>
                <InputLabel id="questions-label">Questions</InputLabel>
                <Select
                  labelId="questions-label"
                  id="questions"
                  multiple
                  value={selectedQuestionList}
                  onChange={(e) =>
                    setSelectedQuestionList(
                      typeof e.target.value === "string"
                        ? e.target.value.split(",")
                        : e.target.value
                    )
                  }
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Articles" />
                  }
                  MenuProps={MenuProps}
                >
                  {questionsDropdown.map((question, i) => (
                    <MenuItem
                      key={i}
                      value={question}
                      style={getStyles(question, selectedQuestionList, theme)}
                    >
                      <Checkbox
                        onClick={() => {
                          selectedQuestionsIndex.push(i);
                        }}
                        checked={selectedQuestionList.indexOf(question) > -1}
                      />
                      {question}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="ContentCreate_form_container__right">
              <div className="input_component">
                <p className="heading_2">Articles: </p>
                <div className="display_selected_items">
                  {selectedArticleList.length === 0 ? (
                    <p className="selected_items_placeholder">
                      Please Select Articles
                    </p>
                  ) : (
                    selectedArticleList.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        sx={{ color: "#fff", backgroundColor: "#f06b3e" }}
                      />
                    ))
                  )}
                </div>
              </div>
              <div className="input_component">
                <p className="heading_2">Videos: </p>
                <div className="display_selected_items">
                  {selectedVideoList.length === 0 ? (
                    <p className="selected_items_placeholder">
                      Please Select Videos
                    </p>
                  ) : (
                    selectedVideoList.map((item) => (
                      <Chip
                        className="chip"
                        key={item}
                        label={item}
                        sx={{ color: "#fff", backgroundColor: "#f06b3e" }}
                      />
                    ))
                  )}
                </div>
              </div>
              <div className="input_component">
                <p className="heading_2">Questions: </p>
                <div className="display_selected_items">
                  {selectedQuestionList.length === 0 ? (
                    <p className="selected_items_placeholder">
                      Please Select Questions
                    </p>
                  ) : (
                    selectedQuestionList.map((item) => (
                      <Chip
                        className="chip"
                        key={item}
                        label={item}
                        sx={{ color: "#fff", backgroundColor: "#f06b3e" }}
                      />
                    ))
                  )}
                </div>
              </div>
              <button className="actionSubmit" type="submit">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TopicPageUpdate;
