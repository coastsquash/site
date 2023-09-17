import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const LogoHeader = () => (
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

const MenuButton = ({ children, path }) => (
  <Link to={path}>
    <button className="text-slate-300 w-24 h-20 hover:bg-slate-700 hover:border-b-2">
      {children}
    </button>
  </Link>
);

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

const Header = () => (
  <>
    <LogoHeader />
    <Menu />
  </>
);

export default Header;
