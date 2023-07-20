import { createSlice } from "@reduxjs/toolkit";

export const topicPageSlice = createSlice({
    name: "topicPage",
    initialState: {
        articles: [],
        questions: [],
        videos: [],
    },
    reducers: {
        setArticles: (state, action) => {
            state.articles = action.payload;
        },
        setQuestions: (state, action) => {
            state.questions = action.payload;
        },
        setVideos: (state, action) => {
            state.videos = action.payload;
        }
    }
});

export const { setArticles, setQuestions, setVideos } = topicPageSlice.actions;

