import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NotFoundPage from "../../pages/404 Not Found/404NotFound";

const ProtectedRoute = (props) => {
  const { user } = useSelector((state) => state.user);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.role === "admin") setIsAdmin(true);
    
  }, [user, isAdmin, navigate, dispatch]);

  return isAdmin ? props.children : <NotFoundPage />;
};
export default ProtectedRoute;
