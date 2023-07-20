import axios from "axios";
import { toast } from "react-hot-toast";
import { showLoading, hideLoading } from "../../redux/alertSlice";
import { setArticles } from "../../redux/topicPageSlice";

export const createArticle = (articleData) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    };
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/create-article`,
      articleData,
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

export const getFilteredArticles = (articleIds) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    };
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/get-filtered-articles`,
      { articleIds },
      config
    );
    dispatch(hideLoading());
    dispatch(setArticles(res.data.articles));
    // console.log(res.data.articles);
  } catch (err) {
    dispatch(hideLoading());
    console.error(err);
    toast.error(err.response.data.message);
  }
};

export const getAllUnfilteredArticles = (subject) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/get-all-unverified-articles/${subject}`,
      { withCredentials: true }
    );
    dispatch(hideLoading());
    dispatch(setArticles(res.data.articles));
    // console.log("art" ,res.data.articles);
    // console.log("subject" ,subject);
  } catch (err) {
    dispatch(hideLoading());
    console.error(err);
    toast.error(err.response.data.message);
  }
};

export const getArticlesBySubject = (subject) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/get-articles-by-subject/${subject}`,
      { withCredentials: true }
    );
    dispatch(hideLoading());
    dispatch(setArticles(res.data.articles));
    // console.log(res.data.articles);
  } catch (err) {
    dispatch(hideLoading());
    console.error(err);
    toast.error(err.response.data.message);
  }
};

export const updateArticle = (id, articleData) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    };
    console.log(articleData);
    const res = await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/update-article/${id}`,
      articleData,
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
