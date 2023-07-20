import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import "../css/style.css";
import { createQuestion } from "../../../actions/admin/questions";

const ProblemCreate = () => {
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(topic, name, url, description);
    const questionData = {
      subject: topic,
      name,
      url,
      description,
      contributor: user?._id,
      verified: true,
    };
    dispatch(createQuestion(questionData));
  };

  return (
    <div className="ContentCreate">
      <div className="ContentCreate_container">
        <p className="heading_page">Add Question</p>
        <form onSubmit={submitHandler} className="ContentCreate_form">
          <div className="ContentCreate_form_container">
            <div className="ContentCreate_form_container__left">
              <p className="heading_1">Select Topic</p>
              <FormControl
                sx={{
                  width: { xs: 200, sm: 300, md: 400 },
                  "& .MuiInputBase-root": {
                    height: 45,
                  },
                }}
              >
                <InputLabel id="topic-label">Subjects</InputLabel>
                <Select
                  labelId="topic-label"
                  id="topic"
                  value={topic}
                  label="topic"
                  onChange={(e) => {
                    setTopic(e.target.value);
                  }}
                >
                  <MenuItem value={"DSA"}>Data Structure & Algo</MenuItem>
                  <MenuItem value={"CSF"}>CS Fundamentals</MenuItem>
                  <MenuItem value={"LANG"}>Languages</MenuItem>
                  <MenuItem value={"PROJ"}>Projects</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="ContentCreate_form_container__right">
              <div className="input_component">
                <p className="heading_2">Name: </p>
                <TextField
                  sx={{
                    width: { xs: 300, sm: 400, md: 400 },
                    "& .MuiInputBase-root": {
                      height: 50,
                    },
                  }}
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  label="Name"
                />
              </div>
              <div className="input_component">
                <p className="heading_2">URL: </p>
                <TextField
                  sx={{
                    width: { xs: 300, sm: 400, md: 400 },
                    "& .MuiInputBase-root": {
                      height: 50,
                    },
                  }}
                  id="url"
                  name="url"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                  label="URL"
                />
              </div>
              <div className="input_component">
                <p className="heading_2">Description: </p>
                <TextField
                  sx={{
                    width: { xs: 300, sm: 400, md: 400 },
                    "& .MuiInputBase-root": {
                      height: 50,
                    },
                  }}
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  label="Description"
                />
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

export default ProblemCreate;
