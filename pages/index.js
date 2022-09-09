import Head from "next/head";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

import styles from "../styles/Home.module.css";
import data from "../public/data.json";
import experience from "../public/experience.json";
import AppInfo from "../public/app.json";

export default function Home() {
  const renderSkills = () => {
    return Object.keys(data).map((item) => {
      return (
        <React.Fragment key={item}>
          <h4>{item}</h4>
          {data[item].map((skill) => {
            return (
              <div key={skill} className={styles.chip}>
                {skill}
              </div>
            );
          })}
        </React.Fragment>
      );
    });
  };

  const handleMenu = () => {
    const nav = document.getElementById("navbar");
    if (nav.className === "navbar") {
      nav.className += " responsive";
    } else {
      nav.className = "navbar";
    }
  };

  const renderPoints = (description, expPoints) => {
    return description[expPoints].map((points, index) => {
      return <li key={`points-${index}`}>{points}</li>;
    });
  };
  const renderExperience = () => {
    return experience.map((com, index) => {
      const { title, tenure, company, description, location } = com;
      return (
        <React.Fragment key={`com-${index}`}>
          <h2 className="title">
            {title} | {tenure}
          </h2>
          <h3 className="company">
            {company}, {location}
          </h3>

          {Object.keys(description).map((expPoints, index) => {
            return (
              <React.Fragment key={`des-${index}`}>
                <ReactMarkdown>{expPoints}</ReactMarkdown>
                <ul>{renderPoints(description, expPoints)}</ul>
              </React.Fragment>
            );
          })}
          <br />
        </React.Fragment>
      );
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{AppInfo.appName}</title>
        <meta name="description" content={AppInfo.appName} />
        <link rel="icon" href="/favicon.ico" />
        {/* <script type="text/javascript" src="/custom.js" async /> */}
      </Head>

      <nav className="navbar" id="navbar">
        <a className="navItem" href="#home">
          Home
        </a>
        <a className="navItem" href="#about">
          About
        </a>
        <a className="navItem" href="#skills">
          Skills
        </a>
        <a className="navItem" href="#experience">
          Experience
        </a>
        <a className="navItem icon" onClick={handleMenu}>
          <i className="fa fa-bars"></i>
        </a>
      </nav>

      <header className={styles.header} id="home">
        <div className={styles.profileImg}>
          <Image
            loading="lazy"
            src="/profile.png"
            alt="Profile Image"
            width={146}
            height={144}
          />
        </div>
        <h1>{AppInfo.appName}</h1>
        <h3>&#60; Front End Developer &#47; &#62;</h3>
        <div>
          <div className={styles.icon_container}>
            <a
              className={`${styles.connect_icons} ${styles.linkedInIcon}`}
              aria-label="linkedin"
              href="https://linkedin.com/in/rohitluthra19/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className={styles.icon}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>
            <a
              className={`${styles.connect_icons} ${styles.twitterInIcon}`}
              aria-label="twitter"
              href="https://twitter.com/rohit_luthra"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className={styles.icon}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a
              className={`${styles.connect_icons} ${styles.githubInIcon}`}
              aria-label="github"
              href="https://github.com/RohitLuthra19"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className={styles.icon}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
            <a
              className={`${styles.connect_icons} ${styles.stackOverflowIcon}`}
              aria-label="github"
              href="https://stackoverflow.com/users/4936535/rohit-luthra"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                <g>
                  <title>Layer 1</title>
                  <g stroke="null" id="svg_1">
                    <path
                      stroke="null"
                      id="svg_2"
                      d="m16.79704,13.1871l0,5.16225l-14.31767,0l0,-5.16225l-2.15684,0l0,6.99402l18.62723,0l0,-6.99402l-2.15272,0z"
                      fill="#bcbbbb"
                    />
                    <path
                      stroke="null"
                      id="svg_3"
                      d="m4.4513,16.68412l10.38086,0l0,-1.66524l-10.38086,0l0,1.66524zm0.20745,-3.98243l10.0838,1.79746l0.41509,-1.70937l-10.08419,-1.79746l-0.4147,1.70937l-0.00001,0zm1.32802,-4.10582l9.33675,3.7005l0.87156,-1.58597l-9.33734,-3.7005l-0.87136,1.58597l0.00039,0zm2.5935,-3.89433l7.92598,5.60354l1.32802,-1.33919l-7.94696,-5.60354l-1.30704,1.33919l0.00001,0zm5.10425,-4.14112l-1.66017,1.03961l6.14169,7.03115l1.65978,-1.03978l-6.1413,-7.03099z"
                      fill="#f48024"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* <button onClick={goToTop()} className={styles.topBtn} id="topBtn" title="Back to top">
        <svg className={styles.arrowUpIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6">
          <path d="M12 6H0l6-6z" />
        </svg>
        <span className={styles.srOnly}>Back to top</span>
      </button> */}

      <section className={`${styles.row} content`} id="about">
        <div className={styles.main}>
          <h1 className={styles.heading}>About</h1>
          <p>
            Senior Software Engineer with more than 7 years of experience
            (ReactJs | React-Context | Redux-Saga | HTML5 | JavaScript |
            CSS/SCSS | Apollo GraphQL Client &amp; Server | Nextjs | Node.js |
            React-Native)
          </p>
          <ul>
            <li>
              Hands-on experience in creating RESTful web services using
              Express.Js(Node.Js) and Apollo GraphQL.
            </li>
            <li>
              Experience in developing Single Page Responsive Applications
              (SPA)/MicroFrontends using HTML5, SASS/CSS, JavaScript, React.js,
              React Hooks, React Context API, GraphQl Hooks, NextJS, Redux &amp;
              Redux-Saga.
            </li>
            <li>
              Experience in developing WebApps with full support for Web
              Accessibility(508/a11y).
            </li>
            <li>
              Experience in working with Cloud technologies/Cloud Services:
              CloudFront, S3, EC2, Heroku, Digital Ocean, and Firebase.
            </li>
            <li>
              Hands-on experience in Unit testing frameworks Jest, Enzyme, React
              Testing Library, and E2E testing framework TestCafe, Cucumber
              Gherkin(Given, When &amp; Then) with Testcafe.
            </li>
            <li>
              Proficient in Reusable React.JS library development and
              Integration.
            </li>
            <li>Proficient in Mobile development using React-Native.</li>
            <li>
              Experience in using version controlling systems like TFS and GIT.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.row} id="skills">
        <div className={styles.main}>
          <h1 className={styles.heading}>Skills</h1>
          <div>{renderSkills()}</div>
        </div>
      </section>

      <section className={styles.row} id="experience">
        <div className={styles.main}>
          <h1 className={styles.heading}>Work Experience</h1>
          {renderExperience()}
        </div>
      </section>

      <footer className={styles.footer}>
        <a href="mailto:rohit.luthra19@gmail.com">
          &copy; 2021 {AppInfo.appName}. All rights reserved.
        </a>
      </footer>
    </div>
  );
}
