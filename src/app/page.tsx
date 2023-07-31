"use client";

import { useMemo } from "react";

const HomeScreen = () => {
  const PROJECTS = useMemo(() => {
    return [
      {
        title: "Kosmos",
        summary:
          "Knowledge-focused community aimed to connect people and help them learn and grow.",
        href: "https://kosmos.community/",
        id: crypto.randomUUID(),
      },
      {
        title: "Widgets",
        summary:
          "A showcase sandbox of react/javascript as a website of widgets.",
        href: "https://widgets-sandbox.vercel.app/",
        id: crypto.randomUUID(),
      },
      {
        title: "Root",
        summary: "Clean and simple start-page for daily use.",
        href: "https://github.com/imreyesjorge/root-startpage",
        id: crypto.randomUUID(),
      },
    ];
  }, []);

  return (
    <div>
      <header>
        <h1>Jorge Reyes</h1>
        <small>
          Software Engineer @{" "}
          <a href="https://www.oneseventech.com/" className="glow">
            Oneseven
          </a>
        </small>
        <div className="thought">
          <svg viewBox="0 0 22 11">
            <path
              stroke="#1A1F2C"
              fill="#0E1221"
              d="M1 10L8.87868 2.12132C10.0503 0.949745 11.9497 0.949748 13.1213 2.12132L21 10"
            />
          </svg>
          <p>“Sometimes even to live is an act of courage” — Seneca</p>
        </div>
      </header>
      <main>
        <h2>Projects</h2>
        <section>
          {PROJECTS.map((project) => (
            <a href={project.href} key={project.id}>
              <article>
                <h3>
                  {project.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </h3>
                <p>{project.summary}</p>
              </article>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
};

export default HomeScreen;
