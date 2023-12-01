import Head from "next/head";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

import styles from "../styles/Home.module.css";
import data from "../public/data.json";
import experience from "../public/experience.json";
import education from "../public/education.json";
import AppInfo from "../public/app.json";
import LinkedInIcon from "../public/icons/linkedInIcon";
import GithubIcon from "../public/icons/githubIcon";
import TwitterIcon from "../public/icons/twitterIcon";
import StackOverflowIcon from "../public/icons/stackOverflowIcon";

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

  const Experience = ({ expPoints, description, index }) => (
    <>
      <ReactMarkdown>{expPoints}</ReactMarkdown>
      <ul>{renderPoints(description, expPoints)}</ul>
    </>
  );

  const renderExperience = () => {
    return experience.map((com, index) => {
      const { title, tenure, company, description, location } = com;
      if (index === 0) return null;

      return (
        <React.Fragment key={`com-${index}`}>
          <h2 className="title">{`${title} | ${tenure}`}</h2>

          <h3 className="company">
            {company}, {location}
          </h3>

          {description.map((projects, index) => {
            const { title, tenure, technologies, points } = projects;
            return (
              <React.Fragment key={`com-${index}`}>
                <ReactMarkdown>{`**Title:** ${title} | ${tenure}`}</ReactMarkdown>

                <ReactMarkdown>
                  {`**Technologies:** ${technologies.join(", ")}`}
                </ReactMarkdown>
                <ul>
                  {points.map((point, index) => {
                    return <li key={`points-${index}`}>{point}</li>;
                  })}
                </ul>
                <br />
              </React.Fragment>
            );
          })}
          <br />
        </React.Fragment>
      );
    });
  };

  const renderEducation = () => {
    return education.map((item, index) => {
      const { degree, tenure, university, percentage } = item;
      return (
        <li className={index % 2 === 1 ? "timeline-inverted" : ""} key={degree}>
          <div className="posted-date">
            <span className="month">{tenure}</span>
          </div>
          <div
            id={`edu-${index + 1}`}
            className="panel panel-success timeline-panel"
          >
            <div className="timeline-content">
              <h3 className="panel-title">
                {degree} - {percentage}
              </h3>
              <h4 className="panel-title">{university}</h4>
            </div>
          </div>
        </li>
      );
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{AppInfo?.appName}</title>
        <meta name="description" content={AppInfo?.appName} />
        <link rel="icon" href="/favicon.ico" />
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
        <a className="navItem" href="#education">
          Education
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
        <h1>{AppInfo?.appName}</h1>
        <h3>&#60; Front End Developer &#47; &#62;</h3>

        <div className={styles.icon_container}>
          <a
            className={`${styles.connect_icons} ${styles.linkedInIcon}`}
            aria-label="linkedin"
            href="https://linkedin.com/in/rohitluthra19/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon className={styles.icon} />
          </a>
          <a
            className={`${styles.connect_icons} ${styles.twitterInIcon}`}
            aria-label="twitter"
            href="https://twitter.com/rohit_luthra"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon className={styles.icon} />
          </a>
          <a
            className={`${styles.connect_icons} ${styles.githubInIcon}`}
            aria-label="github"
            href="https://github.com/RohitLuthra19"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon className={styles.icon} />
          </a>
          <a
            className={`${styles.connect_icons} ${styles.stackOverflowIcon}`}
            aria-label="stackoverflow"
            href="https://stackoverflow.com/users/4936535/rohit-luthra"
            rel="noopener noreferrer"
            target="_blank"
          >
            <StackOverflowIcon />
          </a>
        </div>
      </header>

      <a
        href="https://web.whatsapp.com/send?phone=+919023288257&amp;text=Hi"
        className={styles.floating_actions}
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-whatsapp custom-size"></i>
      </a>

      <a
        href="tel:9023288257"
        className={`${styles.floating_actions} ${styles.action_blue_color}`}
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-phone"></i>
      </a>

      <section className={`${styles.row} content`} id="about">
        <div className={styles.main}>
          <h1 className={styles.heading}>About</h1>
          {Object.keys(experience[0]?.description).map((expPoints, index) => {
            return (
              <Experience
                key={`des-${index}`}
                expPoints={expPoints}
                description={experience[0]?.description}
              />
            );
          })}
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

      <section className={styles.row} id="education">
        <div className={styles.main}>
          <h1 className={styles.heading}>Education</h1>
          <div className="resume">
            <ul className="timeline">{renderEducation()}</ul>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <a href={`mailto:${AppInfo?.contactEmailId}`}>
          &copy; 2022 {AppInfo?.appName}. All rights reserved.
        </a>
      </footer>
    </div>
  );
}
