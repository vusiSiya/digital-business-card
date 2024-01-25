import React from "react";

export default function Footer({ gitHubIcon, linkedInIcon }) {
  return (
    <>
      <footer>
        <ul>
          <li>
            <a href="https://github.com/vusiSiya" title="My Github Profile">
              {gitHubIcon}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/siyabonga-mahlalela-3b130a266"
              title="My LinkedIn Profile"
            >
              {linkedInIcon}
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
