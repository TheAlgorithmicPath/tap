import axios from "axios";
import { toast } from "react-hot-toast";
import { showLoading, hideLoading } from "../../redux/alertSlice";

export const createTopicPage = (topicPageData, subject) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    };
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/create-topic-page/${subject}`,
      topicPageData,
      config
    );
    dispatch(hideLoading());
    toast.success(res.data.message);
  } catch (err) {
    dispatch(hideLoading());
    console.log(err.response);
    toast.error(err.response.data.message);
  }
};

export const updateTopicPage = (topicPageData, topicPageId) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    };
    const res = await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/update-topic-page/${topicPageId}`,
      topicPageData,
      config
    );
    dispatch(hideLoading());
    toast.success(res.data.message);
  } catch (err) {
    dispatch(hideLoading());
    console.log(err.response);
    toast.error(err.response.data.message);
  }
}

