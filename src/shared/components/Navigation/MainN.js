import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCameraFill } from "react-icons/bs";

import MainH from "./MainH";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import NavLinks from "./NavLinks";

import "./MainN.css";

const MainN = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <Fragment>
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <MainH>
        <h1 className="center-flex-row tg mainNTitle">
          <BsFillCameraFill title="camera icon" />
          <Link to="/">snap</Link>
        </h1>
        <nav className="main-navigation__links">
          <NavLinks />
        </nav>
        <button className="mainNavigationBtn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
      </MainH>
    </Fragment>
  );
};

export default MainN;
