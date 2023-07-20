import axios from "axios";
import { toast } from "react-hot-toast";
import { showLoading, hideLoading } from "../../redux/alertSlice";
import { setVideos } from "../../redux/topicPageSlice";

export const createVideo = (videoData) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    };
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/create-video`,
      videoData,
      config
    );
    dispatch(hideLoading());
    toast.success(res.data.message);
  } catch (err) {
    dispatch(hideLoading());
    toast.error(err.response.data.message);
  }
};

export const getFilteredVideos = (videoIds) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    };
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/get-filtered-videos`,
      { videoIds },
      config
    );
    dispatch(hideLoading());
    dispatch(setVideos(res.data.videos));
    // console.log(res.data.articles);
  } catch (err) {
    dispatch(hideLoading());
    console.error(err);
    toast.error(err.response.data.message);
  }
};

export const getAllUnfilteredVideos = (subject) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/get-all-unverified-videos/${subject}`,
      { withCredentials: true }
    );
    dispatch(hideLoading());
    dispatch(setVideos(res.data.videos));
  } catch (err) {
    dispatch(hideLoading());
    console.error(err);
    toast.error(err.response.data.message);
  }
};

export const getVideosBySubject = (subject) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/get-videos-by-subject/${subject}`,
      { withCredentials: true }
    );
    dispatch(hideLoading());
    dispatch(setVideos(res.data.videos));
    // console.log(res.data.articles);
  } catch (err) {
    dispatch(hideLoading());
    console.error(err);
    toast.error(err.response.data.message);
  }
};

export const updateVideo = (videoId, videoData) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    };
    // console.log(videoData);
    const res = await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/update-video/${videoId}`,
      videoData,
      config
    );
    dispatch(hideLoading());
    toast.success(res.data.message);
  } catch (err) {
    dispatch(hideLoading());
    toast.error(err.response.data.message);
  }
};
