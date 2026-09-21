import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import streamImage from "../assets/bluegreen-stream.jpg";
import upcycleImage from "../assets/bluegreen-upcycle.jpg";
import storyImage from "../assets/bluegreen-story.jpg";
const logoWhite = "/assets/logo-white.png";
const coastImage = "/assets/bluegreen-coast.png";
const seedlingsImage = "/assets/bluegreen-seedlings.webp";
const ecosystemMapImage = "/assets/bluegreen-ecosystem-map.png";
const riverImage = "/assets/bluegreen-river.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BlueGreen | Environmental Journey" },
      {
        name: "description",
        content:
          "BlueGreen transforms environmental learning through play, ecological thinking, music, upcycling, and storytelling.",
      },
      { property: "og:title", content: "BlueGreen | Environmental Journey" },
      {
        property: "og:description",
        content: "A cinematic journey connecting people with nature through creativity and learning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["The Journey", "journey"],
  ["Logic", "logic"],
  ["Melody", "melody"],
  ["Wonder", "wonder"],
  ["Story", "story"],
] as const;

function BrandMark() {
  return (
    <span className="brand-mark">
      <img src={logoWhite.url} alt="BlueGreen logo" width={897} height={310} />
    </span>
  );
}

function Doodle({ kind = "nature" }: { kind?: "nature" | "music" | "cycle" | "story" }) {
  if (kind === "music") {
    return (
      <svg className="doodle doodle-music" viewBox="0 0 520 230" aria-hidden="true">
        <path d="M7 130c62-65 123 64 190 0s126 68 196 1 103 18 120-11" />
        <path d="M36 158c59-46 108 41 168 4 54-33 104 33 160 1 47-27 98-6 137 14" />
        <path d="M146 70v58c0 18-31 24-38 6-7-20 26-31 38-16l42-12V47l-42 11" />
        <path d="M360 77v46c0 17-28 22-35 6-6-18 23-28 35-14l34-10V58l-34 9" />
      </svg>
    );
  }
  if (kind === "cycle") {
    return (
      <svg className="doodle doodle-cycle" viewBox="0 0 260 260" aria-hidden="true">
        <path d="M95 36c22-12 54-8 73 8l-18 3 9 17" />
        <path d="M192 74c15 19 19 50 7 73l-6-18-18 5" />
        <path d="M177 187c-19 17-50 23-74 13l18-8-7-17" />
        <path d="M69 176c-17-17-24-48-15-72l9 17 17-8" />
        <circle cx="130" cy="128" r="23" />
        <path d="M126 145c-10-14-9-28 7-39 10 15 8 29-7 39Z" />
      </svg>
    );
  }
  if (kind === "story") {
    return (
      <svg className="doodle doodle-story" viewBox="0 0 420 500" aria-hidden="true">
        <circle cx="205" cy="90" r="42" />
        <path d="M173 93c18-19 43-22 67-8M182 72c6 13 4 29-5 43M220 53c-2 18 4 31 19 43" />
        <path d="M108 301c58-30 126-30 194 0v112c-68-28-136-28-194 0V301Z" />
        <path d="M205 314v96M113 308c-22-34-13-73 19-91 18 24 19 51 3 77M300 310c20-34 11-72-21-90-17 25-17 52-1 76" />
        <path d="M71 167c21-20 42-17 57 5-23 15-44 12-57-5ZM336 178c-21-20-42-17-57 5 23 15 44 12 57-5Z" />
      </svg>
    );
  }
  return (
    <svg className="doodle doodle-nature" viewBox="0 0 420 360" aria-hidden="true">
      <circle cx="305" cy="73" r="34" />
      <path d="M305 15v20m0 76v20m-58-58h20m76 0h20m-99-41 14 14m54 54 14 14m0-82-14 14m-54 54-14 14" />
      <path d="M49 215c65-64 143-65 228 0M87 214v85m38-111v111m46-114v114m47-93v93" />
      <path d="M76 152c-22-19-18-43 9-58 18 25 15 46-9 58Zm58 6c-16-28-5-54 29-61 9 31-1 52-29 61Z" />
      <path d="M50 300c68-23 141-22 218 0M80 301c10 20 11 34 1 43m45-43c7 22 5 37-8 48m63-48c-1 21-8 35-24 44m69-44c-4 17-12 28-25 34" />
    </svg>
  );
}

function MindMap() {
  return (
    <svg className="mind-map" viewBox="0 0 1200 650" role="img" aria-label="BlueGreen sustainable future infinity diagram">
      <defs>
        <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0 0 8 3 0 6Z" /></marker>
        <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0 0 8 3 0 6Z" /></marker>
      </defs>
      <g className="infinity-loop infinity-loop-green">
        <path className="loop-outline" d="M600 325C510 205 430 65 235 65 80 65 50 260 165 325 50 390 80 585 235 585c195 0 275-140 365-260" />
        <path className="loop-pulse" d="M600 325C510 205 430 65 235 65 80 65 50 260 165 325 50 390 80 585 235 585c195 0 275-140 365-260" />
        <path className="loop-arrow" markerEnd="url(#arrow-green)" d="M575 300C480 190 410 100 240 100 125 100 105 245 180 290" />
        <path className="loop-arrow" markerEnd="url(#arrow-green)" d="M180 360c-75 45-55 190 60 190 170 0 240-90 335-200" />
      </g>
      <g className="infinity-loop infinity-loop-blue">
        <path className="loop-outline" d="M600 325C690 205 770 65 965 65c155 0 185 195 70 260 115 65 85 260-70 260-195 0-275-140-365-260" />
        <path className="loop-pulse" d="M600 325C690 205 770 65 965 65c155 0 185 195 70 260 115 65 85 260-70 260-195 0-275-140-365-260" />
        <path className="loop-arrow" markerEnd="url(#arrow-blue)" d="M625 300c95-110 165-200 335-200 115 0 135 145 60 190" />
        <path className="loop-arrow" markerEnd="url(#arrow-blue)" d="M1020 360c75 45 55 190-60 190-170 0-240-90-335-200" />
      </g>

      <g className="infinity-topic topic-education" tabIndex={0} role="button" aria-label="Environmental Education: Learn, Explore, Act">
        <g className="topic-icon" transform="translate(330 180)"><path d="M-43-22v58c30-8 44 7 44 7s14-15 44-7v-58C18-27 1-12 1-12S-18-27-43-22Zm44 10v55M-32-10c15-2 24 4 24 4m-24 13c15-2 24 4 24 4m16-17c9-6 18-6 27-4M8 11c9-6 18-6 27-4M-8-30c-9-20-28-19-28-19 0 21 17 27 28 19Zm9 0c10-25 34-26 34-26 0 25-19 34-34 26Z" /></g>
        <text className="topic-title" x="330" y="250"><tspan x="330">Environmental</tspan><tspan x="330" dy="30">Education</tspan></text>
        <text className="topic-tag" x="330" y="326">LEARN · EXPLORE · ACT</text>
      </g>
      <g className="infinity-topic topic-business" tabIndex={0} role="button" aria-label="Green Business and Entrepreneurship: Innovate, Create, Scale">
        <g className="topic-icon" transform="translate(870 180)"><path d="M-43-18h86v55h-86Zm0 15h86M-22-18v-11h44v11M0-3c0 0-22-27-22-47 22 1 30 22 22 47Zm0 0c0 0 25-17 39-38-22-5-38 13-39 38ZM0-3v30" /></g>
        <text className="topic-title" x="870" y="250"><tspan x="870">Green Business &amp;</tspan><tspan x="870" dy="30">Entrepreneurship</tspan></text>
        <text className="topic-tag" x="870" y="326">INNOVATE · CREATE · SCALE</text>
      </g>
      <g className="infinity-topic topic-upcycling" tabIndex={0} role="button" aria-label="Upcycling and Recycling: Reduce, Reuse, Reimagine">
        <g className="topic-icon" transform="translate(330 425)"><path d="M-22-33 0-48l18 31M0-48l8 18m10 13 22 38-18 28M40 21 20 19M22 49h-47l-18-31m18 31 10-17M-43 18l22-38h37m-37 0 11 15M18 20c4-27 20-40 39-43-1 25-15 42-39 43Zm0 0L48-13" /></g>
        <text className="topic-title" x="330" y="490"><tspan x="330">Upcycling &amp;</tspan><tspan x="330" dy="30">Recycling</tspan></text>
        <text className="topic-tag" x="330" y="566">REDUCE · REUSE · REIMAGINE</text>
      </g>
      <g className="infinity-topic topic-products" tabIndex={0} role="button" aria-label="Environmental Products: Design, Produce, Impact">
        <g className="topic-icon" transform="translate(870 425)"><path d="M-48-14 0-35l48 21L0 8Zm0 0v50L0 58l48-22v-50M0 8v50M-48-14l22 17L0-17 26 3l22-17M0-35c0 0-20-21-18-40 20 3 26 22 18 40Zm0 0c3-22 20-38 40-39-2 23-19 37-40 39Z" /></g>
        <text className="topic-title" x="870" y="490"><tspan x="870">Environmental</tspan><tspan x="870" dy="30">Products</tspan></text>
        <text className="topic-tag" x="870" y="566">DESIGN · PRODUCE · IMPACT</text>
      </g>

      <g className="infinity-center">
        <circle cx="600" cy="325" r="91" />
        <circle cx="600" cy="325" r="76" />
        <path className="globe" d="M600 252a42 42 0 1 0 0 84 42 42 0 0 0 0-84Zm-39 42h78M600 252c-21 18-21 66 0 84m0-84c21 18 21 66 0 84M571 270c20 10 39 10 58 0m-58 48c20-10 39-10 58 0" />
        <path className="center-leaf" d="M551 340c-22-22-12-43 10-53 12 23 6 40-10 53Zm98 0c22-22 12-43-10-53-12 23-6 40 10 53Z" />
        <text className="center-title" x="600" y="363"><tspan x="600">Sustainable</tspan><tspan x="600" dy="27">Future</tspan></text>
      </g>
    </svg>
  );
}


function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.target.classList.contains("mindmap-visual")) {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        } else if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      }),
      { threshold: 0.16 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-nav">
        <a href="#mindmap" className="brand-link" aria-label="Go to the BlueGreen mind map"><BrandMark /></a>
        <nav aria-label="Main navigation">
          {nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
      </header>

      <section id="hero" className="hero-section">
        <img src={coastImage.url} alt="Green landscape beside blue water under sunlit clouds" width={1024} height={768} />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="section-number light">BlueGreen / 01</p>
          <h1>Transforming our<br />future together</h1>
        </div>
        <a className="scroll-cue" href="#journey" aria-label="Scroll to the environmental journey"><span />Explore the journey</a>
      </section>

      <section id="journey" className="journey-section cream-section">
        <div className="journey-image reveal">
          <img src={riverImage.url} alt="A clear river flowing through a green mountain landscape" loading="lazy" width={1365} height={768} />
          <Doodle kind="nature" />
        </div>
        <div className="journey-copy reveal">
          <p className="section-number">01 / The beginning</p>
          <h2>Environmental<br /><em>Journey</em></h2>
          <p className="lead">Learning that transforms knowledge into new ways of thinking, acting, and living.</p>
          <p>BlueGreen edutainment journey explores different environmental aspects, from climate change to the circular economy, mapping different layers of intervention that help transform the future, build resilience, and reveal sustainable solutions.</p>
          <p>This journey is more than learning; it’s a fun, game-changing experience. Together we play, we sing, we upcycle, and we tell the planet’s story in ways that inspire creativity and responsibility.</p>
        </div>
      </section>

      <section id="play" className="image-chapter play-section">
        <img src={ecosystemMapImage.url} alt="Forest ecosystem with hand-drawn water, sun and growth connections" loading="lazy" width={1778} height={768} />
        <div className="image-shade" />
        <div className="chapter-copy reveal">
          <p className="section-number light">02 / Play</p>
          <h2>Play<br /><em>Sustainability</em></h2>
          <p>Games and playful challenges open doors to new ways of seeing the planet. Through imagination and interaction, sustainability becomes a joyful path of discovery and action.</p>
        </div>
      </section>

      <section id="logic" className="logic-section cream-section">
        <div className="logic-copy reveal">
          <p className="section-number">03 / See the connections</p>
          <h2>Eco <em>Logic</em></h2>
          <p className="lead">Activities unfold like pieces of a puzzle, building logic and advancing perception of the environment.</p>
          <p>Connections and interrelations emerge, revealing the ecosystem as a living, dynamic whole.</p>
        </div>
        <div className="logic-image reveal">
          <img src={seedlingsImage.url} alt="Young plants growing across a mossy forest floor" loading="lazy" width={1778} height={768} />
          <Doodle kind="nature" />
        </div>
      </section>

      <section id="melody" className="image-chapter melody-section">
        <img src={streamImage} alt="A clear stream flowing through a mossy forest" loading="lazy" width={1600} height={1008} />
        <div className="image-shade" />
        <Doodle kind="music" />
        <div className="chapter-copy reveal">
          <p className="section-number light">04 / Listen closely</p>
          <h2>Eco <em>Melody</em></h2>
          <p>Nature’s sounds become melodies that invite listening and respect. Singing for and about the planet turns its message into harmony, echoing our commitment to a transformed future.</p>
        </div>
      </section>

      <section id="wonder" className="wonder-section cream-section">
        <div className="wonder-copy reveal">
          <p className="section-number">05 / Reimagine value</p>
          <h2>Waste<br /><em>Wonder</em></h2>
          <p className="lead">What was once discarded is reborn as something useful and beautiful.</p>
          <p>Transformation reveals the hidden value of materials, honoring resources by turning waste into wonder.</p>
          <Doodle kind="cycle" />
        </div>
        <div className="wonder-image reveal">
          <img src={upcycleImage} alt="Natural materials transformed into useful objects" loading="lazy" width={1600} height={1200} />
        </div>
      </section>

      <section id="story" className="story-section">
        <img src={storyImage} alt="Sunlight and a waterfall along a path through an ancient forest" loading="lazy" width={1200} height={1600} />
        <div className="image-shade" />
        <Doodle kind="story" />
        <div className="story-copy reveal">
          <p className="section-number light">06 / Share the vision</p>
          <h2>Planet <em>Story</em></h2>
          <p>Narratives unfold not only from history but also from personal and imaginative voices. Together they weave a shared vision, telling the planet’s story toward a transformed and hopeful future.</p>
        </div>
      </section>

      <section id="mindmap" className="mindmap-section cream-section">
        <div className="mindmap-heading reveal">
          <p className="section-number">07 / Everything connects</p>
          <h2>One living<br /><em>ecosystem</em></h2>
          <p>Every branch of the journey returns to the same place: a deeper relationship with our planet.</p>
        </div>
        <div className="mindmap-visual reveal"><MindMap /></div>
      </section>

      <footer className="closing-section">
        <img src={coastImage.url} alt="Quiet water and green land beneath a sunlit sky" loading="lazy" width={1024} height={768} />
        <div className="closing-shade" />
        <div className="closing-content reveal">
          <blockquote>
            <span>Understand the system.</span>
            <span>Rethink the habit.</span>
            <em>Transform the future.</em>
          </blockquote>
          <img className="closing-logo" src={logoWhite.url} alt="BlueGreen" width={897} height={310} />
        </div>
      </footer>

    </main>
  );
}