import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";


function Header() {

  return (
    <div className={styles["mainContain"]}>
      <div className={styles["leftHeader"]}>
        <div className={styles["navMenu"]}>
          <a>
            <Link
              to="/about"
              style={{ color: "black", textDecoration: "none" }}
            >
              <span style={{ marginRight: -9 }}>About Me</span>
            </Link>
          </a>
        </div>
      </div>

      <div className={styles["centerHeader"]}>
        <div className={styles["centerHeader2"]}>
          <div className={styles["navMenu"]}>
            <a>
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                <span style={{ fontSize: "larger" }}>
                  LEARN MUSIC
                </span>
              </Link>
            </a>
          </div>
        </div>
      </div>

      <div className={styles["rightHeader"]}>
        <div className={styles["navMenu"]}>
          <a>
            <Link
              to="/portfolio"
              style={{ color: "black", textDecoration: "none" }}
            >
              <span>Portfolio</span>
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
