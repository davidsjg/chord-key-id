import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";


function Header() {

  return (
    <div className={styles["mainContain"]}>
      <div className={styles["leftHeader"]}>
        <div className={styles["navMenu"]}>
          
            <Link
              to="/about"
              style={{ color: "black", textDecoration: "none" }}
            >
              <span style={{ marginRight: -9 }}></span>
            </Link>
     
        </div>
      </div>

      <div className={styles["centerHeader"]}>
        <div className={styles["centerHeader2"]}>
          <div className={styles["navMenu"]}>
       
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                <span style={{ fontSize: "larger" }}>
                  LEARN MUSIC
                </span>
              </Link>
      
          </div>
        </div>
      </div>

      <div className={styles["rightHeader"]}>
        <div className={styles["navMenu"]}>
   
            <Link
              to="/about"
              style={{ color: "black", textDecoration: "none" }}
            >
              <span></span>
            </Link>
    
        </div>
      </div>
    </div>
  );
}

export default Header;
