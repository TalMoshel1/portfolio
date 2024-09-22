import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import EmblaCarousel from "./embla/EmblaCarousel.jsx";
import Appointment1 from "../photos/schedule1.png";
import Appointment2 from "../photos/schedule2.png";
import Appointment3 from "../photos/schedule3.png";
import Appointment4 from "../photos/schedule4.png";
import Appointment5 from "../photos/schedule5.png";
import Appointment6 from "../photos/schedule6.png";
import Appointment7 from "../photos/schedule7.png";

import MusicTrivia1 from "../photos/MusicTrivia1.png";
import MusicTrivia2 from "../photos/MusicTrivia2.png";
import MusicTrivia3 from "../photos/MusicTrivia3.png";
import MusicTrivia4 from "../photos/MusicTrivia4.png";
import Weather1 from "../photos/Weather1.png";
import Weather1Dark from "../photos/weather1dark.png";
import Weather2 from "../photos/weather2.png";
import Weather2Dark from "../photos/weather2dark.png";
import Expense1 from "../photos/expanse1.png";
import Expense2 from "../photos/expanse2.png";
import Expense3 from "../photos/expanse3.png";
import Expense4 from "../photos/expanse4.png";

import "../App.css";

const Projects = (props) => {
  const OPTIONS = { loop: true };
  const appointmentsPhotos = [
    Appointment1,
    Appointment2,
    Appointment3,
    Appointment4,
    Appointment5,
    Appointment6,
    Appointment7,
  ];
  const musicTriviaPhotos = [
    MusicTrivia1,
    MusicTrivia2,
    MusicTrivia3,
    MusicTrivia4,
  ];
  const expensePhotos = [Expense1, Expense2, Expense3, Expense4];
  const weatherPhotos = [Weather1, Weather2, Weather1Dark, Weather2Dark];

  return (
    <main style={{ minHeight: "100svh", width: "100%" }}>
      <h1 style={{ height: "20%", paddingTop: "2rem", paddingBottom: "2rem", color: "white" }}>
        Projects
      </h1>
      <section className="accordions-container">
        <Accordion type="single" collapsible className="accordion-container">
          <AccordionItem value="item-1">
            <AccordionTrigger
              style={{
                textAlign: "center",
                height: "7.1rem",
                fontSize: "1.5rem",
                backgroundColor: "#f9f9f9",
              }}
            >
              Appointment Schedule
            </AccordionTrigger>
            <AccordionContent style={{ backgroundColor: "white" }}>
              <p
                className="p-accordion-height"
                style={{
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  textAlign: "left",
                  paddingLeft: "1.6rem",
                  paddingRight: "1.6rem",
                }}
              >
                * Full Stack App
                <br />
                * Demo Version: <br />
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="accordion-container">
          <AccordionItem value="item-2">
            <AccordionTrigger
              style={{
                textAlign: "center",
                height: "7.1rem",
                fontSize: "1.5rem",
                backgroundColor: "#f9f9f9",
              }}
            >
              Music Trivia
            </AccordionTrigger>
            <AccordionContent>
              <p
                className="p-accordion-height"
                style={{
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  textAlign: "left",
                  paddingLeft: "1.6rem",
                  paddingRight: "1.6rem",
                }}
              >
                * Full Stack App
                <br />
                * Test your Music Theory Knowledge
                <br />
                <a href="https://shorturl.at/7hDef" onTouchStart={(e) => e.preventDefault()}>
                  Live
                </a>
              </p>
              <EmblaCarousel slides={musicTriviaPhotos} options={OPTIONS} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="accordion-container">
          <AccordionItem value="item-3">
            <AccordionTrigger
              style={{
                textAlign: "center",
                height: "7.1rem",
                fontSize: "1.5rem",
                backgroundColor: "#f9f9f9",
              }}
            >
              Weather App
            </AccordionTrigger>
            <AccordionContent>
              <p
                className="p-accordion-height"
                style={{
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  textAlign: "left",
                  paddingLeft: "1.6rem",
                  paddingRight: "1.6rem",
                }}
              >
                * Front End App
                <br />
                * Using GeoLocation API and Google Location API
                <br />
                * Custom Hooks
                <br />
                <a href="https://shorturl.at/1D7X0" onTouchStart={(e) => e.preventDefault()}>
                  Live
                </a>
              </p>
              <EmblaCarousel slides={weatherPhotos} options={OPTIONS} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="accordion-container">
          <AccordionItem value="item-4">
            <AccordionTrigger
              style={{
                textAlign: "center",
                height: "7.1rem",
                fontSize: "1.5rem",
                backgroundColor: "#f9f9f9",
              }}
            >
              Expense Tracker
            </AccordionTrigger>
            <AccordionContent>
              <p
                className="p-accordion-height"
                style={{
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  textAlign: "left",
                  paddingLeft: "1.6rem",
                  paddingRight: "1.6rem",
                }}
              >
                * Front End App
                <br />
                <a href="https://shorturl.at/xfVRL" onTouchStart={(e) => e.preventDefault()}>
                  Live
                </a>
              </p>
              <EmblaCarousel slides={expensePhotos} options={OPTIONS} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
};

export default Projects;
