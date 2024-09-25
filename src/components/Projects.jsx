import React from "react";
import EmblaCarousel from "./embla/EmblaCarousel.jsx";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Appointment1 from "../../public/photos/appointment-admin-calendar.png";
import Appointment2 from "../../public/photos/appointment-admin-requestGroup.png";
import Appointment3 from "../../public/photos/appointment-front-calendar.png";
import Appointment4 from "../../public/photos/appointment-front-privateRequest.png";
import Appointment5 from "../../public/photos/appointment-front-privateRequest2.png";
import Expense1 from "../../public/photos/expanseTracker-1.png";
import Expense2 from "../../public/photos/expanseTracker-2.png";
import Expense3 from "../../public/photos/expanseTracker-3.png";
import MusicTrivia1 from "../../public/photos/musicTrivia-1.png";
import MusicTrivia2 from "../../public/photos/musicTrivia-2.png";
import MusicTrivia3 from "../../public/photos/musicTrivia-3.png";
import Weather1 from "../../public/photos/weatherApp-favorites-dark.png";
import Weather2 from "../../public/photos/weatherApp-favorites-light.png";
import Weather3 from "../../public/photos/weatherApp1.png";
import Weather4 from "../../public/photos/weatherApp2.png";

import "../App.css";

const Projects = () => {
  const OPTIONS = { loop: true };
  const appointmentsPhotos = [
    Appointment1,
    Appointment2,
    Appointment3,
    Appointment4,
    Appointment5,
  ];
  const musicTriviaPhotos = [MusicTrivia1, MusicTrivia2, MusicTrivia3];
  const expensePhotos = [Expense1, Expense2, Expense3];
  const weatherPhotos = [Weather2, Weather1, Weather3, Weather4];

  return (
    <main style={{ minHeight: "100svh", width: "100%" }}>
      <h1
        style={{
          height: "20%",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          color: "white",
        }}
      >
        Projects
      </h1>

      <motion.section
        className="accordions-container"
        initial={{ opacity: 0, y: 50 }} // Initially invisible and slightly down
        whileInView={{ opacity: 1, y: 0 }} // Become visible and rise up
        transition={{ duration: 0.5 }} // Animation duration
      >
        {/* Project 1 */}
        <div className="project-container">
          <p
            className="p-accordion-height"
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <h2
              style={{
                fontWeight: "800",
                fontSize: "3rem",
                marginBottom: "1rem",
              }}
            >
              Schedule
            </h2>
            <span style={{ fontWeight: "800" }}>Full Stack App</span>
            <br />
            Demo Version: <br />
            <a
              href="https://appointment-front-5jsl.onrender.com/calendar"
              onTouchStart={(e) => e.preventDefault()}
            >
              Live Client Site
            </a>
            <br />
            <a
              href="https://appointment-admin-6f1y.onrender.com/calendar"
              onTouchStart={(e) => e.preventDefault()}
            >
              Live Admin Site
            </a>
          </p>
          <EmblaCarousel slides={appointmentsPhotos} options={OPTIONS} />
        </div>

        {/* Project 2 */}
        <div className="project-container">
          <p
            className="p-accordion-height"
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <h2
              style={{
                fontWeight: "800",
                fontSize: "3rem",
                marginBottom: "1rem",
              }}
            >
              Music Trivia
            </h2>
            <span style={{ fontWeight: "800" }}>Full Stack App</span>
            <br />
            Test your Music Theory Knowledge
            <br />
            <a
              href="https://shorturl.at/7hDef"
              onTouchStart={(e) => e.preventDefault()}
            >
              Live
            </a>
          </p>
          <EmblaCarousel slides={musicTriviaPhotos} options={OPTIONS} />
        </div>

        {/* Project 3 */}
        <div className="project-container">
          <p
            className="p-accordion-height"
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <h2
              style={{
                fontWeight: "800",
                fontSize: "3rem",
                marginBottom: "1rem",
              }}
            >
              Weather App
            </h2>
            <span style={{ fontWeight: "800" }}>Front End App</span>
            <br />
            Using GeoLocation API and Google Location API
            <br />
            Custom Hooks
            <br />
            <a
              href="https://shorturl.at/1D7X0"
              onTouchStart={(e) => e.preventDefault()}
            >
              Live
            </a>
          </p>
          <EmblaCarousel slides={weatherPhotos} options={OPTIONS} />
        </div>

        {/* Project 4 */}
        <div className="project-container">
          <p
            className="p-accordion-height"
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <h2
              style={{
                fontWeight: "800",
                fontSize: "3rem",
                marginBottom: "1rem",
              }}
            >
              Expense Tracker
            </h2>
            <span style={{ fontWeight: "800" }}>Front End App</span>
            <br />
            <a
              href="https://shorturl.at/xfVRL"
              onTouchStart={(e) => e.preventDefault()}
            >
              Live
            </a>
          </p>
          <EmblaCarousel slides={expensePhotos} options={OPTIONS} />
        </div>
      </motion.section>
    </main>
  );
};

export default Projects;
