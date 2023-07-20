import axios from "axios";
import { toast } from "react-hot-toast";
import { showLoading, hideLoading } from "../../redux/alertSlice";
import { setQuestions } from "../../redux/topicPageSlice";

export const createQuestion = (questionData) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    };
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/create-question`,
      questionData,
      config
    );
    dispatch(hideLoading());
    toast.success(res.data.message);
  } catch (err) {
    dispatch(hideLoading());
    toast.error(err.response.data.message);
  }
};

export const getFilteredQuestions = (questionIds) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    };
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/get-filtered-questions`,
      { questionIds },
      config
    );
    dispatch(hideLoading());
    dispatch(setQuestions(res.data.questions));
  } catch (err) {
    dispatch(hideLoading());
    console.error(err);
    toast.error(err.response.data.message);
  }
};

export const getAllUnfilteredQuestions = (subject) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/get-all-unverified-questions/${subject}`,
      { withCredentials: true }
    );
    dispatch(hideLoading());
    dispatch(setQuestions(res.data.questions));
  } catch (err) {
    dispatch(hideLoading());
    console.error(err);
    toast.error(err.response.data.message);
  }
};

export const getQuestionsBySubject = (subject) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/get-questions-by-subject/${subject}`,
      { withCredentials: true }
    );
    dispatch(hideLoading());
    dispatch(setQuestions(res.data.questions));
    // console.log(res.data.articles);
  } catch (err) {
    dispatch(hideLoading());
    console.error(err);
    toast.error(err.response.data.message);
  }
};

export const updateQuestion =
  (questionId, questionData) => async (dispatch) => {
    dispatch(showLoading());
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
        withCredentials: true,
      };
      const res = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/update-question/${questionId}`,
        questionData,
        config
      );
      dispatch(hideLoading());
      toast.success(res.data.message);
    } catch (err) {
      dispatch(hideLoading());
      toast.error(err.response.data.message);
    }
  };
