import React from "react"
import { defer, useLoaderData, Await } from "react-router-dom";

export async function loader() {
  return defer({ imgUrl: "./profile-pic.jpg" });
}

export default function Info({ emailIcon, linkedInIcon }) {
  const data = useLoaderData();
  return (
    <>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={data.imgUrl}>
          {(imgUrl) => <img src={imgUrl} alt="profile picture " />}
        </Await>
      </React.Suspense>
      <section className="content">
        <h3 className="name">Siyabonga Mahlalela</h3>
        <h5 className="position">Frontend Developer</h5>
        <a
          className="personal-website"
          href="https://siya-portfolio.netlify.app/"
          style={{ textDecoration: "underline" }}
        >
          porfolio website
        </a>

        <div className="contact-me-btns">
          <a href="mailto:siyabongamahlalela71@gmail.com" className="email-btn">
            {emailIcon} Email
          </a>
          <a
            href="https://www.linkedin.com/in/siyabonga-mahlalela-3b130a266/"
            className="linkedIn-btn"
          >
            {linkedInIcon} LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
