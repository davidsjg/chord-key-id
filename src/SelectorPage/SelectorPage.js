import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./SelectorPage.module.css";

function SelectorPage() {
  return (
    <>
      <div className={styles["mainContain"]}>
        <div className={styles["leftHeader"]}>
          <Link to="/noteReader" style={{ color: "black", textDecoration: "none" }}>
            <span style={{ marginRight: -9 }}>Play Game</span>
          </Link>
        </div>
        <div className={styles["rightHeader"]}>
          <Link
            to="/sevenGame"
            style={{ color: "black", textDecoration: "none" }}
          >
            <span>Practice Sevens</span>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default SelectorPage;
