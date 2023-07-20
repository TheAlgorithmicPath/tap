// import axios from "axios";
import { toast } from "react-hot-toast";
import { showLoading, hideLoading } from "../../redux/alertSlice";

export const getTopicPage = (topicId) => async (dispatch) => {
    dispatch(showLoading());
    try {
        
    }catch(err){
        dispatch(hideLoading());
        console.log(err.response);
        toast.error(err.response.data.message);
    }
}
