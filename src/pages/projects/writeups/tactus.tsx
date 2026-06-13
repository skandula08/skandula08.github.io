export default function tactus() {
  return (
    <div className="w-5/6 m-auto">
      <h2>Foreword</h2>

      <p>
        Tactus is a wearable technology startup aimed at giving deaf people and those
        who are hard of hearing the ability to experience music. They use vests
        and jackets embedded with small devices and conductive fibers that
        transmit vibrations at pressure points to evoke the feeling of music.
        The technology the Tactus team developed is seriously cool—having tried it
        myself, it really does feel like music is playing even if you can't hear
        any audio.
      </p>

      <p>
        Tactus approached SCOUT to create a customer-facing e-commerce website to
        officially launch their product. The requested package included a brand
        refresh and packaging work.
      </p>

      <p>
        The goal was to have the website live and support pre-orders for the
        official product showcase at the Japanese Deaflympics. The Deaflympics
        created an extremely tight deadline to get the core purchasing system
        and product pages deployed quickly, so our studio team got to work fast.
      </p>

      <h2>Branding &amp; Low-Fis</h2>

      <p>
        Our first order of business was working on a brand refresh. We were
        given a system of a few colors and a logo, but Tactus had no designated
        fonts, supplementary design elements, patterns, or hierarchy.
      </p>

      <p>
        Through brand identity exercises with the founder, we learned we needed
        to emphasize an “active” look that conveys prestige and a modern tech
        feel—similar to companies like Bose, Music: Not Impossible, and Woojer.
      </p>

      <p>
        Our first pass didn’t match the vision well. It was too bright, too
        bouncy, and too playful. The direction needed to be dark, sleek, and
        modern.
      </p>

      <p>
        This required adding extra colors to the palette, namely darker shades
        of blue to contrast with the provided teal and coral orange. We also
        designed flowing lines and textures inspired by waveforms.
      </p>

      <h2>Low and Mid Fidelity Prototypes</h2>

      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)", margin: "auto" }}
        width="800"
        height="450"
        src="https://embed.figma.com/design/6LGlPx43Kdx26ZpYPj6keo/Main-Design-File?node-id=1-3&embed-host=share"
      ></iframe>

      <h2>Packaging</h2>

      <p>
        When we began the packaging portion of this commission, we learned early
        on that the founder was strongly attached to the concept of a vinyl
        record sleeve. Naturally, we ran with this idea and created a graphical
        cover featuring the Tactus symbol on a record. I took a lead role in this
        section of the design work.
      </p>

      <p>
        Due to manufacturing time constraints, we couldn’t achieve the ideal
        materials or box shapes, so we settled on a basic 14x14x2 hinge-closing
        box.
      </p>

      <p>
        Building on the disc design, we placed it on a glowing blue background
        and incorporated swooshy audio lines from earlier concepts. On the back,
        features were presented like a tracklist, and inside we included their
        slogans. The dark blue palette with bold teals and oranges worked very
        well for the final packaging.
      </p>

      <iframe
        style={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
          margin: "auto",
        }}
        width="800"
        height="450"
        src="https://embed.figma.com/design/6LGlPx43Kdx26ZpYPj6keo/Main-Design-File?node-id=2282-930&embed-host=share"
        // allowfullscreen
      />
      {/* </iframe> */}

      <h2>Final Design</h2>

      <p>There are 6 main pages on this website:</p>

      <ul>
        <li>
          <strong>Home:</strong> Showcases videos of the vests in use, sponsors,
          shop links, and a contact form.
        </li>
        <li>
          <strong>Product:</strong> Showcases the jacket and key features,
          linking to the pre-order form.
        </li>
        <li>
          <strong>Shop:</strong> Displays product images and allows quick
          add-to-cart functionality.
        </li>
        <li>
          <strong>Purchasing:</strong> Includes images, size selection, cart,
          sizing charts, specifications, and reviews.
        </li>
        <li>
          <strong>Checkout:</strong> Stripe-powered checkout page for payments.
        </li>
        <li>
          <strong>About Us:</strong> Mission, community involvement, principles,
          founder story, sponsors, and team.
        </li>
        <li>
          <strong>Community:</strong> Community engagement, testimonials,
          mission, blog, and news.
        </li>
      </ul>

      <p>
        The menu bar includes a cart that links to Stripe checkout. We added
        subtle web animations using the record motif. The jacket product page
        includes interactive icons that open popups describing features.
      </p>

      <iframe
        style={{ border: " 1px solid rgba(0, 0, 0, 0.1)", margin: "auto" }}
        width="800"
        height="450"
        src="https://embed.figma.com/design/6LGlPx43Kdx26ZpYPj6keo/Main-Design-File?node-id=3677-1006&embed-host=share"
      ></iframe>

      <br />
      <br />

      <h2>Development</h2>

      <p>Our tech stack was fairly basic:</p>

      <ul>
        <li>
          <strong>NextJS</strong> <code>for Front-End</code>
        </li>
        <li>
          <strong>Tailwind</strong> <code>for styling</code>
        </li>
        <li>
          <strong>Stripe</strong> <code>for E-Commerce purchasing element</code>
        </li>
        <li>
          <strong>Contentful</strong>{" "}
          <code>
            CMS integration allowing non-technical team members to update
            content easily
          </code>
        </li>
        <li>
          <strong>ThreeJS</strong>{" "}
          <code>
            originally intended for scroll-based jacket animations, but cut due
            to time constraints
          </code>
        </li>
      </ul>

      <p>
        The front-end used a component-driven architecture with abstracted
        elements like photo grids, tooltips, and contact forms. This was my
        first experience working in NextJS, though the learning curve wasn’t too
        steep.
      </p>

      <p>
        We deployed the site using AWS. The key deadline was mid-November for
        the Japanese Deaflympics. We managed to complete development in 2.5
        weeks and deploy in time for the event. The project received strong
        interest and the Tactus site gained thousands of visits.
      </p>

      <br />
      <br />

      <button className="live-link-button">
        <a href="https://tactusmusic.com" target="empty">
          Visit the live site here!
        </a>
      </button>

      <br />

      <h2>Conclusion</h2>

      <p>
        Overall, working with Tactus was an incredibly fun and educational
        challenge. Between the short turnaround, new technology, and large
        scope, my teammates and I did a great job bringing the project to
        completion.
      </p>

      <p>
        It was a great experience working with a small startup and contributing
        to meaningful pro bono work.
      </p>
    </div>
  );
}
