import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import "./Contribute.css";
import { useDispatch, useSelector } from "react-redux";
import { createVideo } from "../../actions/admin/videos";

const ContributeVideo = () => {
    const { user } = useSelector((state) => state.user);
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    const videoData = {
      subject: topic,
      name: name,
      url: url,
      description: description,
      contributor: user?._id,
      verified: false,
    };
    dispatch(createVideo(videoData));
  };
  return (
    <div className="ContributeContentCreate">
      <div className="ContributeContentCreate_container">
        <p className="heading_page">Contribute Video</p>
        <form onSubmit={submitHandler} className="ContributeContentCreate_form">
          <div className="ContributeContentCreate_form_container">
            <div className="ContributeContentCreate_form_container__left">
              <p className="heading_1">Select Topic</p>
              <FormControl
                sx={{
                  width: { xs: 200, sm: 300, md: 400 },
                  "& .MuiInputBase-root": {
                    height: 50,
                  },
                }}
              >
                <InputLabel id="topic-label">Topic</InputLabel>
                <Select
                  labelId="topic-label"
                  id="topic"
                  value={topic}
                  label="topic"
                  onChange={(e) => {
                    setTopic(e.target.value);
                  }}
                >
                  <MenuItem value={"LANG"}>Language, OOPs, STL</MenuItem>
                  <MenuItem value={"DSA"}>Data Structure & Algo</MenuItem>
                  <MenuItem value={"CSF"}>CS Fundamentals</MenuItem>
                  <MenuItem value={"PROJ"}>Projects</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="ContributeContentCreate_form_container__right">
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
                Contribute
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContributeVideo