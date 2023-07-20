import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import EditContentForm from "../../../components/Forms/EditContentForm";
import { getFilteredArticles } from "../../../actions/admin/articles";

const ArticleEdit = () => {
  const dispatch = useDispatch();
  const { DSA, CSF, LANG, PROJ } = useSelector((state) => state.subjects);
  const { articles } = useSelector((state) => state.topicPage);
  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    let articleIds = [];
    if (subject === "DSA") {
      articleIds = DSA[topic].articles;
    } else if (subject === "CSF") {
      articleIds = CSF[topic].articles;
    } else if (subject === "LANG") {
      articleIds = LANG[topic].articles;
    } else if (subject === "PROJ") {
      articleIds = PROJ[topic].articles;
    }
    dispatch(getFilteredArticles(articleIds));
  };

  return (
    <div className="ContentEdit">
      <div className="ContentEdit_container">
        <p className="heading_page">Edit Article</p>
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
                <InputLabel id="topic-label">Topics</InputLabel>
                <Select
                  labelId="topic-label"
                  id="topic"
                  value={topic}
                  label="topic"
                  onChange={(e) => {
                    setTopic(e.target.value);
                  }}
                >
                  {subject === "DSA" &&
                    DSA.map((topic, i) => (
                      <MenuItem key={i} value={i}>
                        {topic?.name}
                      </MenuItem>
                    ))}
                  {subject === "LANG" &&
                    LANG.map((topic, i) => (
                      <MenuItem key={i} value={i}>
                        {topic?.name}
                      </MenuItem>
                    ))}
                  {subject === "CSF" &&
                    CSF.map((topic, i) => (
                      <MenuItem key={i} value={i}>
                        {topic?.name}
                      </MenuItem>
                    ))}
                  {subject === "PROJ" &&
                    PROJ.map((topic, i) => (
                      <MenuItem key={i} value={i}>
                        {topic?.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <button className="actionSubmit" type="submit">
                Find
              </button>
            </div>

            <div className="ContentEdit_form_container__right">
              {articles.length > 0 &&
                articles.map((article, i) => (
                  <EditContentForm key={i} formData={article} type="article"/>
                ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleEdit;
