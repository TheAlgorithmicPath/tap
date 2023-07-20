import { React, useEffect, useState } from "react";

import TextField from "@mui/material/TextField";

import "./../../pages/Admin/css/style.css";
import { useDispatch } from "react-redux";
import { updateArticle } from "../../actions/admin/articles";
import { updateVideo } from "../../actions/admin/videos";
import { updateQuestion } from "../../actions/admin/questions";

const EditContentForm = ({ formData, type }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  // const [isVerified, setIsVerified] = useState();
  const dispatch = useDispatch();

  const handleSubmit =  () => {
    if(type==="article"){
    const updatedArticle = {
      name,
      url,
      description,
      // verifid: isVerified,
    };
    dispatch(updateArticle(formData._id, updatedArticle));
  }else if(type==="video"){
    const updatedVideo = {
      name,
      url,
      description,
    };
    dispatch(updateVideo(formData._id, updatedVideo));
  }else if(type==="question"){
    const updatedQuestion = {
      name,
      url,
      description,
    };
    dispatch(updateQuestion(formData._id, updatedQuestion));
  }
  };

  useEffect(() => {
    setName(formData.name);
    setUrl(formData.url);
    setDescription(formData.description);
    // setIsVerified(formData.verified);
  }, [formData]);
  
  return (
    <div className="card1" >
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
          value={name ? name : ""}
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
          value={url ? url : ""}
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
          value={description ? description : ""}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          label="Description"
        />
      </div>
      {/* <div className="input_component">
        <p className="heading_2">Verified: </p>
        <FormControl
          sx={{
            width: { xs: 200, sm: 300, md: 400 },
            "& .MuiInputBase-root": {
              height: 45,
            },
          }}
        >
          <InputLabel id="isVerified-label">Verified</InputLabel>
          <Select
            labelId="isVerified-label"
            id="isVerified"
            value={isVerified}
            label="isVerified"
            onChange={(e) => {
              setIsVerified(e.target.value);
            }}
          >
            <MenuItem value={true}>True</MenuItem>
            <MenuItem value={false}>False</MenuItem>
          </Select>
        </FormControl>
      </div> */}
      <button className="actionSubmit" onClick={handleSubmit}>
        Update
      </button>
    </div>
  );
};

export default EditContentForm;
