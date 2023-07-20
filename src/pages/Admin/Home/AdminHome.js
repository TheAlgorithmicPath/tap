import React, { useEffect } from "react";
import "./AdminHome.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTopicsContent } from "../../../actions/admin/admin";

const AdminHome = () => {
  // const { DSA, CSF, LANG, PROJ } = useSelector((state) => state.subjects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopicsContent());
  }, [dispatch]);
  return (
    <div className="AdminHome">
      <div className="AdminHome_container">
        <p className="heading_page">Admin Controls</p>

        <div className="section_add_content_container">
          <Link to="/admin/add-article">
            <span className="card_btn">Add Article</span>
          </Link>
          <Link to="/admin/add-video">
            <span className="card_btn">Add Video</span>
          </Link>
          <Link to="/admin/add-problem">
            <span className="card_btn">Add Problem</span>
          </Link>
        </div>

        <div className="section_edit_content_container">
          <Link to="/admin/edit-article">
            <span className="card_btn">Edit Article</span>
          </Link>
          <Link to="/admin/edit-video">
            <span className="card_btn">Edit Video</span>
          </Link>
          <Link to="/admin/edit-problem">
            <span className="card_btn">Edit Problem</span>
          </Link>
        </div>

        {/* <div> -------------X-------------X------------- </div> */}

        <div className="section_topic_container">
          <Link to="/admin/add-topic-page">
            <span className="card_btn">Add Topic Page</span>
          </Link>
          <Link to="/admin/edit-topic-page">
            <span className="card_btn">Edit Topic Page</span>
          </Link>
          <Link to="/admin/delete-topic-page">
            <span className="card_btn">Delete Topic Page</span>
          </Link>
        </div>

        <div className="section_topic_container">
          <Link to="/admin/verify-contributions">
            <span className="card_btn">Verify Contributions</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
