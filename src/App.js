import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Footer from "./components/Footer/Footer";
import TopicPage from "./pages/TopicPage/TopicPage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import MyProfile from "./pages/MyProfile/MyProfile";
import AdminHome from "./pages/Admin/Home/AdminHome";
import ArticleCreate from "./pages/Admin/Article/ArticleCreate";
import ArticleEdit from "./pages/Admin/Article/ArticleEdit";
import VideoCreate from "./pages/Admin/Video/VideoCreate";
import VideoEdit from "./pages/Admin/Video/VideoEdit";
import ProblemCreate from "./pages/Admin/Problem/ProblemCreate";
import ProblemEdit from "./pages/Admin/Problem/ProblemEdit";
import TopicPageCreate from "./pages/Admin/TopicPage/TopicPageCreate";
import TopicPageDelete from "./pages/Admin/TopicPage/TopicPageDelete";
import TopicPageUpdate from "./pages/Admin/TopicPage/TopicPageUpdate";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticatedUser } from "./actions/user";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import Header from "./components/Header/Header";
import { getTopicsContent } from "./actions/admin/admin";
import ContributeArticle from "./pages/Contributer/ContributeArticle";
import ContributeVideo from "./pages/Contributer/ContributeVideo";
import ContributeQuestion from "./pages/Contributer/ContributeQuestion";
import Contribute from "./pages/Contributer/Contribute";
import Loader from "./components/Loader/Loader";
import VerifyContributions from "./pages/Admin/VerifyContributions/VerifyContributions";

function App() {
  const { user } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) dispatch(isAuthenticatedUser());
    if (user) dispatch(getTopicsContent());
  }, [user, dispatch]);
  return (
    <Router>
      <Toaster position="top-center" duration="3000" />
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/my-profile" element={<MyProfile />} /> */}
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/contribute/article" element={<ContributeArticle />} />
        <Route path="/contribute/video" element={<ContributeVideo />} />
        <Route path="/contribute/question" element={<ContributeQuestion />} />
        <Route path="/user/*" element={<MyProfile />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-article"
          element={
            <ProtectedRoute>
              <ArticleCreate />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit-article"
          element={
            <ProtectedRoute>
              <ArticleEdit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-video"
          element={
            <ProtectedRoute>
              <VideoCreate />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit-video"
          element={
            <ProtectedRoute>
              <VideoEdit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-problem"
          element={
            <ProtectedRoute>
              <ProblemCreate />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit-problem"
          element={
            <ProtectedRoute>
              <ProblemEdit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add-topic-page"
          element={
            <ProtectedRoute>
              <TopicPageCreate />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/delete-topic-page"
          element={
            <ProtectedRoute>
              <TopicPageDelete />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit-topic-page"
          element={
            <ProtectedRoute>
              <TopicPageUpdate />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/verify-contributions"
          element={
            <ProtectedRoute>
              <VerifyContributions />
            </ProtectedRoute>
          }
        />
        <Route path="/dsa" element={<TopicPage subject={"DSA"} />} />
        <Route path="/lang" element={<TopicPage subject={"LANG"} />} />
        <Route path="/csf" element={<TopicPage subject={"CSF"} />} />
        <Route path="/projects" element={<TopicPage subject={"PROJ"} />} />
      </Routes>
      {!loading && <Footer />}
    </Router>
  );
}

export default App;
