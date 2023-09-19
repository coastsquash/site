import PropTypes from "prop-types";
import { Link, Outlet, useLocation } from "react-router-dom";

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

const MenuButton = ({ children, path }) => {
  const location = useLocation();

  const isActive = location.pathname === path;

  const buttonClasses = "text-slate-300 w-32 h-20 border-b-2 border-slate-800 hover:bg-slate-700 hover:border-b-2 hover:border-slate-200";
  const classes = isActive ? `${buttonClasses} bg-slate-700 border-b-2 border-slate-200` : buttonClasses;

  return (
    <Link to={path}>
      <button className={classes}>
        {children}
      </button>
    </Link>
  );
};

MenuButton.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

const Menu = () => (
  <div className="flex h-20 w-full items-center bg-slate-800 drop-shadow-xl">
    <div className="flex mx-auto max-w-[1280px] items-center">
      <MenuButton path="/">Home</MenuButton>
      <MenuButton path="/league">League</MenuButton>
      <MenuButton path="/members">Members</MenuButton>
      <MenuButton path="/photos">Photos</MenuButton>
      <MenuButton path="/about">About</MenuButton>
    </div>
  </div>
);

const Layout = () => (
  <>
    <Header />
    <Menu />
    <div className="bg-slate-300 w-full grow">
      <main role="main" className="w-full p-8 mx-auto max-w-[1280px]">
        <Outlet />
      </main>
    </div>
  </>
);

export default Layout;
