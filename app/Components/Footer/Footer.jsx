'use client'
import "./Footer.css";
import React from "react";
class Footer extends React.Component {

  render() {
    return (
    <footer className="footer">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <span className="logo">
          <time>2022</time> © Семенов Павел.
        </span>
      </a>
    </footer>
    )
  }
}
export default Footer


