import { useMediaQuery } from "@uidotdev/usehooks";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

import logo from "../assets/logo.png";

const Header = () => (
  <div className="flex p-8 h-40 w-full mx-auto max-w-[1280px] items-center">
    <div className="grow">
      <p className="text-4xl font-bold">Coast Squash</p>
      <p className="text-md text-slate-600 font-light">
        Home of squash on the Sunshine Coast
      </p>
    </div>
    <div className="w-128px h-128px">
      <img src={logo} alt="Coast Squash Logo" />
    </div>
  </div>
);

const MenuButton = ({ children, path, onClick }) => {
  const location = useLocation();
  const isMobile = useMediaQuery("only screen and (max-width: 768px)");

  const isActive = location.pathname === path;

  const linkClasses = isMobile ? "w-full" : "w-32";
  const baseClasses = "text-slate-200 border-b-2 border-slate-600 hover:bg-slate-600";
  const buttonClasses = isMobile
    ? `${baseClasses} w-full h-20 bg-slate-600 hover:border-b-2 hover:border-slate-200`
    : `${baseClasses} w-32 h-20 hover:border-b-2 hover:border-slate-200`;
  const classes = isActive ? `${buttonClasses} bg-slate-600 border-b-2 border-slate-200` : buttonClasses;

  return (
    <Link to={path} className={linkClasses}>
      <button className={classes} onClick={onClick}>
        {children}
      </button>
    </Link>
  );
};

MenuButton.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

MenuButton.defaultProps = {
  onClick: null,
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("only screen and (max-width: 768px)");
  // const isTablet = useMediaQuery("only screen and (min-width : 769px) and (max-width: 1024px)");
  // const isDesktop = useMediaQuery("only screen and (min-width: 1025px)");

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    isMobile ? (
      <div className="flex h-20 w-full items-center bg-slate-700 drop-shadow-xl">
        <div className="flex flex-col w-full max-w-[768px] items-center">
          <button className="h-20 w-full ml-8" onClick={handleOnClick}>
            <BiMenu color="white" size="32px" />
          </button>
          {isOpen && (
            <div className="absolute top-20 w-full">
              <MenuButton onClick={handleClose} path="/">Home</MenuButton>
              <MenuButton onClick={handleClose} path="/league">League</MenuButton>
              <MenuButton onClick={handleClose} path="/members">Members</MenuButton>
              <MenuButton onClick={handleClose} path="/lessons">Lessons</MenuButton>
              <MenuButton onClick={handleClose} path="/juniors">Juniors</MenuButton>
              <MenuButton onClick={handleClose} path="/recordings">Recordings</MenuButton>
              <MenuButton onClick={handleClose} path="/events">Events</MenuButton>
              <MenuButton onClick={handleClose} path="/misc">Misc</MenuButton>
            </div>
          )}
        </div>
      </div>
    ) : (
      <div className="flex h-20 w-full items-center bg-slate-700 drop-shadow-xl">
        <div className="flex mx-auto max-w-[1280px] items-center">
          <MenuButton path="/">Home</MenuButton>
          <MenuButton path="/league">League</MenuButton>
          <MenuButton path="/members">Members</MenuButton>
          <MenuButton path="/lessons">Lessons</MenuButton>
          <MenuButton path="/juniors">Juniors</MenuButton>
          <MenuButton path="/recordings">Recordings</MenuButton>
          <MenuButton path="/events">Events</MenuButton>
          <MenuButton path="/misc">Misc</MenuButton>
        </div>
      </div>
    )
  );
};

const Layout = () => (
  <>
    <Header />
    <Menu />
    <div className="bg-slate-100 w-full grow">
      <main role="main" className="w-full p-8 mx-auto max-w-[1280px]">
        <Outlet />
      </main>
    </div>
  </>
);

export default Layout;
