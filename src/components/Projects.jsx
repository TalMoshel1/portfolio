import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import "../App.css";

import EmblaCarousel from "./embla/EmblaCarousel.jsx";

import Appointment1 from "../photos/appointment1.png";
import Appointment2 from "../photos/appointment2.png";
import Appointment3 from "../photos/appointment3.png";
import Appointment4 from "../photos/appointment4.png";
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

const Projects = (props) => {
  const OPTIONS = { loop: true };
  const appointmentsPhotos = [
    Appointment1,
    Appointment2,
    Appointment3,
    Appointment4,
  ];
  const musicTriviaPhotos = [
    MusicTrivia1,
    MusicTrivia2,
    MusicTrivia3,
    MusicTrivia4,
  ];
  const ExpensePhotos = [Expense1, Expense2, Expense3, Expense4];
  const weatherPhotos = [Weather1, Weather2, Weather1Dark, Weather2Dark];

  return (
    <main style={{ height: "100svh", width: "100%" }}>
      <h1 style={{ height: "20%", paddingTop: "2rem", paddingBottom: "2rem" }}>
        Projects
      </h1>
      <section
        className="accordions-container"
        // style={{height:'fit-content', boxSizing:'border-box', width: '100vw', justifyContent:'space-evenly', display:'flex', flexWrap:'wrap'}}
      >
        <Accordion type="single" collapsible className="accordion-container">
          <AccordionItem value="item-1">
            <AccordionTrigger
              style={{
                textAlign: "center",
                height: "7.1rem",
                fontSize: "1.5rem",
              }}
            >
              Appointment Schedule
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
                * Demo Version: <br />
                <a href="https://shorturl.at/9DkRi"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://shorturl.at/9DkRi", "_blank");
                  }}
                  >Live</a>
              </p>

              {/* <Carousel style={{ width: "100%" }}>
                <CarouselContent className="contain-image">
                  <CarouselItem>
                    <img src={Appointment1} loading="lazy" />
                  </CarouselItem>
                  <CarouselItem>
                    <img src={Appointment2} loading="lazy" />
                  </CarouselItem>
                  <CarouselItem>
                    <img src={Appointment4} loading="lazy"/>
                  </CarouselItem>

                  <CarouselItem>
                    <img src={Appointment3} loading="lazy"/>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel> */}

              <EmblaCarousel slides={appointmentsPhotos} options={OPTIONS} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="accordion-container">
          <AccordionItem value="item-1">
            <AccordionTrigger
              style={{
                textAlign: "center",
                height: "7.1rem",
                fontSize: "1.5rem",
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
                <a
                  href="https://shorturl.at/7hDef"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://shorturl.at/9DkRi", "_blank");
                  }}
                >
                  Live
                </a>
              </p>

              {/* <Carousel style={{ width: "100%",position: 'relative' }}>
                <div className="swipe" style={{position:'absolute', top:'0', backgroundColor:'rgba(0, 0, 0, 0.1)', height:'10px', zIndex: '1', width:'100%'}}></div>
                <CarouselContent>
                  <CarouselItem>
                    <img src={MusicTrivia1} style={{ width: "100%" }} loading="lazy" />
                  </CarouselItem>
                  <CarouselItem>
                    <img src={MusicTrivia2} style={{ width: "100%" }} loading="lazy" />
                  </CarouselItem>
                  <CarouselItem>
                    <img src={MusicTrivia3} style={{ width: "100%" }} loading="lazy"/>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={MusicTrivia4} style={{ width: "100%" }} loading="lazy"/>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel> */}
              <EmblaCarousel slides={musicTriviaPhotos} options={OPTIONS} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="accordion-container">
          <AccordionItem value="item-1">
            <AccordionTrigger
              style={{
                textAlign: "center",
                height: "7.1rem",
                fontSize: "1.5rem",
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
                * Front End App * Using GeoLocation API, Google Location API *
                Custom Hooks
                <br />
                <a
                  href="https://shorturl.at/1D7X0"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://shorturl.at/9DkRi", "_blank");
                  }}
                >
                  Live
                </a>
              </p>

              {/* <Carousel style={{ width: "100%" }}>
                <div
                  className="swipe"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    height: "10px",
                    width: "100%",
                  }}
                ></div>

                <CarouselContent>
                  <CarouselItem>
                    <img
                      src={Weather1}
                      style={{ width: "100%" }}
                      loading="lazy"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={Weather1Dark}
                      style={{ width: "100%" }}
                      loading="lazy"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={Weather2}
                      style={{ width: "100%" }}
                      loading="lazy"
                    />
                  </CarouselItem>

                  <CarouselItem>
                    <img
                      src={Weather2Dark}
                      style={{ width: "100%" }}
                      loading="lazy"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel> */}
              <EmblaCarousel slides={weatherPhotos} options={OPTIONS} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="accordion-container">
          <AccordionItem value="item-1">
            <AccordionTrigger
              style={{
                textAlign: "center",
                height: "7.1rem",
                fontSize: "1.5rem",
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
                <a href="https://shorturl.at/xfVRL"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://shorturl.at/9DkRi", "_blank");
                  }}>Live</a>
              </p>

              {/* <Carousel style={{ width: "100%" }}>
                <CarouselContent>
                  <CarouselItem>
                    <img src={Expense1} style={{ width: "100%" }} loading="lazy"/>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={Expense2} style={{ width: "100%" }} loading="lazy"/>
                  </CarouselItem>
                  <CarouselItem>
                    <img src={Expense3} style={{ width: "100%" }} loading="lazy"/>
                  </CarouselItem>

                  <CarouselItem>
                    <img src={Expense4} style={{ width: "100%" }} loading="lazy"/>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel> */}
              <EmblaCarousel slides={ExpensePhotos} options={OPTIONS} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
};

export default Projects;
