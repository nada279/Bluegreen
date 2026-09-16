import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import heroImage from "../assets/bluegreen-hero.jpg";
import ecosystemImage from "../assets/bluegreen-ecosystem.jpg";
import streamImage from "../assets/bluegreen-stream.jpg";
import upcycleImage from "../assets/bluegreen-upcycle.jpg";
import storyImage from "../assets/bluegreen-story.jpg";
import logoWhite from "@/assets/logo-white.png.asset.json";

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

const C = 500;
const RI = 232;
const RO = 400;
const GAP = 3.2;

const P = (r: number, deg: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return `${(C + r * Math.cos(a)).toFixed(1)} ${(C + r * Math.sin(a)).toFixed(1)}`;
};

const RM = (RI + RO) / 2;
const LOBE = 30;
const LOBE_DEG = (46 / RM) * (180 / Math.PI);

// radial edge from inner to outer at angle `a`, with a puzzle lobe bulging toward a - LOBE_DEG
const edgeOut = (a: number) =>
  `L ${P(RM - LOBE, a)} C ${P(RM - LOBE, a - LOBE_DEG)} ${P(RM + LOBE, a - LOBE_DEG)} ${P(RM + LOBE, a)} L ${P(RO, a)}`;
const edgeIn = (a: number) =>
  `L ${P(RM + LOBE, a)} C ${P(RM + LOBE, a - LOBE_DEG)} ${P(RM - LOBE, a - LOBE_DEG)} ${P(RM - LOBE, a)} L ${P(RI, a)}`;

const piecePath = (i: number) => {
  const a0 = i * 60 + GAP;
  const a1 = (i + 1) * 60 - GAP;
  return [
    `M ${P(RI, a0)}`,
    edgeOut(a0),
    `A ${RO} ${RO} 0 0 1 ${P(RO, a1)}`,
    edgeIn(a1),
    `A ${RI} ${RI} 0 0 0 ${P(RI, a0)}`,
  ].join(" ");
};

const pieces: Array<{ title: string[]; text: string[]; icon: string; color: string }> = [
  {
    title: ["Environmental", "Journey"],
    text: ["A cinematic walk", "through living", "landscapes."],
    color: "var(--puzzle-1)",
    icon: "M-16 12c0-16 12-26 30-26-2 18-12 28-30 26Zm0 0 22-20",
  },
  {
    title: ["Eco", "Logic"],
    text: ["Thinking in systems,", "patterns and", "balance."],
    color: "var(--puzzle-2)",
    icon: "M-14 14v-18a14 14 0 0 1 28 0v18M-14 2h28M0-18v34",
  },
  {
    title: ["Eco", "Melody"],
    text: ["Listening to the", "rhythm of the", "natural world."],
    color: "var(--puzzle-3)",
    icon: "M-6 14a7 7 0 1 0 0-2v-28l20-6v26a7 7 0 1 0 0-2",
  },
  {
    title: ["Waste", "Wonder"],
    text: ["Turning discarded", "things into", "new value."],
    color: "var(--puzzle-4)",
    icon: "M-16 6 -8-8 4-8m12 14L8 20h-14m0-26L-16 6l6 10m24-16 8 12-6 10M-6 20l6-8m-6 8 6 8",
  },
  {
    title: ["Planet", "Story"],
    text: ["Voices weaving a", "shared, hopeful", "vision."],
    color: "var(--puzzle-5)",
    icon: "M-18-12h16a6 6 0 0 1 2 5v19a6 6 0 0 0-2-4h-16Zm36 0H2a6 6 0 0 0-2 5v19a6 6 0 0 1 2-4h16Z",
  },
  {
    title: ["Play", "Sustainability"],
    text: ["Learning the planet", "through play", "and curiosity."],
    color: "var(--puzzle-6)",
    icon: "M0-16a16 16 0 1 0 0 32 16 16 0 0 0 0-32Zm0 6 10 8-4 12h-12l-4-12Z",
  },
];

function MindMap() {
  const RT = (RI + RO) / 2 + 4;
  return (
    <svg className="mind-map" viewBox="0 0 1000 1000" role="img" aria-label="The BlueGreen journey puzzle mind map">
      {pieces.map((piece, i) => {
        const mid = i * 60 + 30;
        const side = i < 3 ? 1 : -1;
        const [tx = 0, ty = 0] = P(RT, mid - side * 5).split(" ").map(Number);
        const [ix = 0, iy = 0] = P(RT + 2, mid + side * 21).split(" ").map(Number);
        return (
          <g className="puzzle-piece" key={piece.title.join(" ")} style={{ color: piece.color }}>
            <path className="piece-outline" d={piecePath(i)} />
            <g className="piece-icon" transform={`translate(${ix} ${iy})`}>
              <path d={piece.icon} />
            </g>
            <text x={tx} y={ty - 22} className="piece-title">
              {piece.title[0]}
            </text>
            <text x={tx} y={ty + 2} className="piece-title">
              {piece.title[1]}
            </text>
            {piece.text.map((line, n) => (
              <text key={line} x={tx} y={ty + 28 + n * 19} className="piece-text">
                {line}
              </text>
            ))}
          </g>
        );
      })}
      <text className="earth-label" x="500" y="488">BLUE</text>
      <text className="earth-label" x="500" y="528">GREEN</text>
      <text className="piece-text" x="500" y="562">one living ecosystem</text>
    </svg>
  );
}


function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
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
        <img src={heroImage} alt="Green coastal wetlands meeting a calm sea" width={1920} height={1088} />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="section-number light">BlueGreen / 01</p>
          <h1>Transforming our<br />future together</h1>
        </div>
        <a className="scroll-cue" href="#journey" aria-label="Scroll to the environmental journey"><span />Explore the journey</a>
      </section>

      <section id="journey" className="journey-section cream-section">
        <div className="journey-image reveal">
          <img src={heroImage} alt="A connected landscape of forest, water and coast" loading="lazy" width={1920} height={1088} />
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
        <img src={ecosystemImage} alt="A young fern growing through a living forest floor" loading="lazy" width={1600} height={1200} />
        <div className="image-shade" />
        <Doodle kind="story" />
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
          <img src={ecosystemImage} alt="Fern, roots, water and moss forming a forest ecosystem" loading="lazy" width={1600} height={1200} />
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

      <footer id="contact" className="contact-section">
        <div>
          <p className="section-number">08 / Continue the journey</p>
          <h2>Contacts</h2>
        </div>
        <div className="contact-grid">
          <span>Email <b>—</b></span>
          <span>Phone <b>—</b></span>
          <span>Social media <b>—</b></span>
          <span>Location <b>—</b></span>
        </div>
        <a href="#hero" className="back-top">Back to the landscape ↑</a>
      </footer>
    </main>
  );
}