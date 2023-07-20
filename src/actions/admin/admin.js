import axios from "axios";
import {
  setDSAPages,
  setCSFPages,
  setLANGPages,
  setPROJPages,
} from "../../redux/subjectsSlice";
import { showLoading, hideLoading } from "../../redux/alertSlice";
import { toast } from "react-hot-toast";

export const getTopicsContent = () => async (dispatch) => {
  try {
    dispatch(showLoading());
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/get-all-topic-pages`,
      { withCredentials: true }
    );
    dispatch(setDSAPages(res.data.topics.DSA));
    dispatch(setCSFPages(res.data.topics.CSF));
    dispatch(setLANGPages(res.data.topics.LANG));
    dispatch(setPROJPages(res.data.topics.PROJ));
    dispatch(hideLoading());
  } catch (err) {
    console.error(err);
    dispatch(hideLoading());
    toast.error("Error getting contents");
    toast.error(err.response.data.message);
  }
};
