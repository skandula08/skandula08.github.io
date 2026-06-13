export default function travelnote() {
  return (
    <div>
      <h2> Travel Note </h2>
      <div style={{display:"flex", margin: "0 auto", alignItems: "center", justifyContent: "center"}}>
        <h4 style={{width: "50%"}}>
          Imagining a unique travel site, <br />
          based on journaling and scrapbooking.{" "}
        </h4>
        <img src="/assets/travelnote/logo.png" width="30%" />
      </div>
      <br />
      Travel Note is a hi-fidelity prototype of a travel review website that's
      intended to be geared towards a younger demographic. I wanted to give the
      site another aspect which lent itself to interactivity and expression,
      alongside it's intended use as a travel planning/review website.
      <br />
      What I settled on was journaling. The site would feature an aesthetic
      reminiscent of paper, and typewriters which would lend itself to the theme
      of journaling while traveling and keeping track of memories.
      <br />
      At this stage I was plotting out a few sketches of what the wireframes
      would look like. There were a decent number of changes between the end to
      what i ultimately settled on.
      <div style={{display:"flex"}}>
        <img src="/assets/travelnote/favicon.png" width="100%" />
        <img src="/assets/travelnote/moodboard.png" width="75%" />
      </div>
      <img src="/assets/travelnote/lofis.png" />
      <br />
      ## Design Choices: After the first pass, I decided i wanted to change the
      visuals, like the colors, fonts and shape language a little more...
      <br />
      <img src="/assets/travelnote/branding.png" />
      <br />
      - The palette is primarily a combination of purples and a light paper
      colored beige. - The logo is a spin on a classic map pin morphed to look a
      little like a pen, which calls to the "journaling" theme of the site. -
      Headings are in a looping script typefaces, and a monospaced light
      typewriter style font for captions and body text. - The landing page would
      have a small section dedicated to the rest of the sites content.
      <br />
      <br />
      <button className="live-link-button">
        <a href="https://www.figma.com/design/5Fa1WB9dHRmVzmqLP9u9KG/Travel-Note?node-id=0-1&t=4KI107Y3cfqMAQwN-1" target="empty">
          View the prototype here
        </a>
      </button>
      <br />
      <iframe
        style={{border: "1px solid rgba(0, 0, 0, 0.1)"}}
        width="100%"
        height="450"
        src="https://embed.figma.com/design/5Fa1WB9dHRmVzmqLP9u9KG/Travel-Note?node-id=0-1&embed-host=share"
      ></iframe>
      <br />
    </div>
  );
}
