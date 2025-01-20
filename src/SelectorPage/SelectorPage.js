import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./SelectorPage.css";
import Header from "../Header/Header";

function SelectorPage() {
  return (
    <>
     <Header/>
      <div className='mainContain3'>
        <div className='bothHeader'>
          <Link to="/noteReader" >
            <span >Play </span>
            <span >Game</span>
          </Link>
        </div>
        <div className='bothHeader'>
          <Link
            to="/sevenGame"
          >
            <span>Practice</span>
            <span> Sevens</span>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default SelectorPage;
