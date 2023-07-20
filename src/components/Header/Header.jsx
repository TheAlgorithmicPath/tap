import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/user";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import CreateIcon from "@mui/icons-material/Create";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { Typography } from "@mui/material";

const Header = () => {
  const [navClassHome, setNavClassHome] = React.useState("nav_item active");
  const [navClassRoadmap, setNavClassRoadmap] = React.useState("nav_item");
  const [navClassLearn, setNavClassLearn] = React.useState("nav_item");
  const [navClassAbout, setNavClassAbout] = React.useState("nav_item");

  const [navClassArticles, setNavClassArticles] = React.useState("nav_item");
  const [navClassVideos, setNavClassVideos] = React.useState("nav_item");
  const [navClassQuestions, setNavClassQuestions] = React.useState("nav_item");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [headerType, setHeaderType] = React.useState("/");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const logoutHandler = () => {
    dispatch(logout());
    setAnchorEl(null);
    navigate("/");
  };

  useEffect(() => {
    if (user?.role === "admin") {
      setIsAdmin(true);
    }
    if (location.pathname === "/") {
      setHeaderType("home");
    } else if (location.pathname.includes("/dsa")) {
      setHeaderType("page");
    } else {
      setHeaderType("no");
    }
  }, [user, navigate, location]);

  return (
    <div className="header_after_login">
      <div className="top_bar"></div>
      <div className="nav_bar">
        <div
          className="company_name"
          onClick={(e) => {
            navigate("/");
          }}
        >
          The Algorithmic Path
        </div>
        {headerType === "home" ? (
          <nav className="nav_items">
            <a className={navClassHome} href="#hero" onClick={()=>{
              setNavClassHome("nav_item active");
              setNavClassRoadmap("nav_item");
              setNavClassLearn("nav_item");
              setNavClassAbout("nav_item");
            }}>
              Home
            </a>
            <a className={navClassRoadmap} href="#roadMap" onClick={()=>{
              setNavClassHome("nav_item");
              setNavClassRoadmap("nav_item active");
              setNavClassLearn("nav_item");
              setNavClassAbout("nav_item");
            }} >
              Roadmap
            </a>
            <a className={navClassLearn} href="#learn" onClick={()=>{
              setNavClassHome("nav_item");
              setNavClassRoadmap("nav_item");
              setNavClassLearn("nav_item active");
              setNavClassAbout("nav_item");
            }} >
              Learn
            </a>
            <a className={navClassAbout} href="#about" onClick={()=>{
              setNavClassHome("nav_item");
              setNavClassRoadmap("nav_item");
              setNavClassLearn("nav_item");
              setNavClassAbout("nav_item active");
            }} >  
              About
            </a>
          </nav>
        ) : headerType === "page" ? (
          <nav className="nav_items">
            <a className={navClassArticles} href="#articles" onClick={()=>{
              setNavClassArticles("nav_item active");
              setNavClassVideos("nav_item");
              setNavClassQuestions("nav_item");
            }} >
              Articles
            </a>
            <a className={navClassVideos} href="#videos" onClick={()=>{
              setNavClassArticles("nav_item");
              setNavClassVideos("nav_item active");
              setNavClassQuestions("nav_item");
            }}>
              Videos
            </a>
            <a className={navClassQuestions} href="#questions" onClick={()=>{
              setNavClassArticles("nav_item");
              setNavClassVideos("nav_item");
              setNavClassQuestions("nav_item active");
            }}>
              Problems
            </a>
            <a className={navClassAbout} href="#about" onClick={()=>{
              setNavClassHome("nav_item");
              setNavClassRoadmap("nav_item");
              setNavClassLearn("nav_item");
              setNavClassAbout("nav_item active");
            }} >  
              About
            </a>
          </nav>
        ) : null}
        {user ? (
          <div>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {/* <Typography variant="h5" component="h5">
            Shubham Kumar
          </Typography> */}
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar
                    sx={{ width: 32, height: 32 }}
                    alt="dp"
                    src={user?.avatar?.url}
                  ></Avatar>
                  <ArrowDropDownIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={   (e) => {
            navigate(`/user/${user?.userId}`);
          }}>
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  alt="dp"
                  src={user?.avatar?.url}
                />
                &nbsp; My Profile
              </MenuItem>
              {isAdmin ? (
                <MenuItem onClick={() => navigate("/admin")}>
                  <ListItemIcon>
                    <CreateIcon fontSize="medium" />
                  </ListItemIcon>
                  &nbsp; Admin Dashboard
                </MenuItem>
              ) : (
                <MenuItem onClick={(e) => {
                  navigate("/contribute");
                }}>
                  <ListItemIcon>
                    <CreateIcon fontSize="medium" />
                  </ListItemIcon>
                  &nbsp; Contribute
                </MenuItem>
              )}

              <Divider />
              <MenuItem onClick={logoutHandler}>
                <ListItemIcon>
                  <Logout fontSize="medium" />
                </ListItemIcon>
                &nbsp; Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <button
            className="btn_login_signup"
            onClick={(e) => {
              navigate("/login");
            }}
          >
            Login/SignUp
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
