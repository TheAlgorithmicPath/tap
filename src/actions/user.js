import axios from "axios";
import { showLoading, hideLoading } from "../redux/alertSlice";
import { setUser } from "../redux/userSlice";
import { toast } from "react-hot-toast";

export const getUserByUserId = (userId) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/${userId}`,
      { withCredentials: true }
    );
    dispatch(hideLoading());
    dispatch(setUser(res.data.user));
  } catch (err) {
    dispatch(hideLoading());
    toast.error(err.response.data.message);
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
      withCredentials: true,
    };
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/login`,
      { email, password },
      config
    );
    // const res = await axios.get(
    // "http://localhost:8000/api/v1/test"
    // );

    dispatch(hideLoading());
    toast.success(res.data.message);
    dispatch(setUser(res.data.user));
  } catch (err) {
    dispatch(hideLoading());
    toast.error(err.response.data.message);
  }
};

export const logout = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/logout`,
      { withCredentials: true }
    );
    dispatch(hideLoading());
    dispatch(setUser(null));
    toast.success(res.data.message);
  } catch (err) {
    dispatch(hideLoading());
    toast.error(err.response.data.message);
  }
};

export const register = (userData) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const config = {
      headers: {
        "content-type": "multipart/form-data;",
      },
      withCredentials: true,
    };
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/register`,
      userData,
      config
    );
    dispatch(hideLoading());
    dispatch(setUser(res.data.user));
    toast.success(res.data.message);
  } catch (err) {
    dispatch(hideLoading());
    toast.error(err.response.data.message);
  }
};

export const updateUser = (userData) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const config = {
      headers: {
        "content-type": "multipart/form-data;",
      },
      withCredentials: true,
    };
    const res = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/me/update`,
      userData,
      config
    );
    dispatch(hideLoading());
    dispatch(setUser(res.data.user));
    toast.success(res.data.message);
  } catch (err) {
    dispatch(hideLoading());
    toast.error(err.response.data.message);
  }
};

export const isAuthenticatedUser = () => async (dispatch) => {
  // dispatch(showLoading());
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/isAuthenticatedUser`,
      { withCredentials: true }
    );
    // dispatch(hideLoading());
    dispatch(setUser(res.data.user));
  } catch (err) {
    dispatch(hideLoading());
    // toast.error(err.response.data.message);
  }
};
