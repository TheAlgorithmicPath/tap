import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import EditContentForm from "../../../components/Forms/EditContentForm";
import { getFilteredVideos } from "../../../actions/admin/videos";

const VideoEdit = () => {
  const dispatch = useDispatch();
  const { DSA, CSF, LANG, PROJ } = useSelector((state) => state.subjects);
  const { videos } = useSelector((state) => state.topicPage);
  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    let videosIds = [];
    if (subject === "DSA") {
      videosIds = DSA[topic].videos;
    } else if (subject === "CSF") {
      videosIds = CSF[topic].videos;
    } else if (subject === "LANG") {
      videosIds = LANG[topic].videos;
    } else if (subject === "PROJ") {
      videosIds = PROJ[topic].videos;
    }
    console.log(videosIds)
    dispatch(getFilteredVideos(videosIds));
  };

  return (
    <div className="ContentEdit">
      <div className="ContentEdit_container">
        <p className="heading_page">Edit Video</p>
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
                        {topic.name}
                      </MenuItem>
                    ))}
                  {subject === "LANG" &&
                    LANG.map((topic, i) => (
                      <MenuItem key={i} value={i}>
                        {topic.name}
                      </MenuItem>
                    ))}
                  {subject === "CSF" &&
                    CSF.map((topic, i) => (
                      <MenuItem key={i} value={i}>
                        {topic.name}
                      </MenuItem>
                    ))}
                  {subject === "PROJ" &&
                    PROJ.map((topic, i) => (
                      <MenuItem key={i} value={i}>
                        {topic.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <button className="actionSubmit" type="submit">
                Find
              </button>
            </div>

            <div className="ContentEdit_form_container__right">
              {videos.length > 0 &&
                videos.map((video, i) => (
                  <EditContentForm key={i} formData={video} type="video" />
                ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VideoEdit;
